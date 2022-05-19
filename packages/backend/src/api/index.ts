import { Router } from '@ovv/itty-router'
import { join } from 'path-browserify'
import { APIMapping } from '@outloudvi/hoshimi-types'

import { jsonResponse, xxhash } from '../utils'
import { CorsHeaders, Routes } from '../const'
import CardRoute from './card'
import CardLevelRoute from './cardLevel'
import CardParameterRoute from './cardParameter'
import CardRarityRoute from './cardRarity'
import CharacterRoute from './character'
import MusicChartRoutes from './musicChart'
import SkillRoute from './skill'
import StoryRoute from './story'
import VersionRoute from './version'
import { dbGetLastUpdate } from '../db'

const apiRouter = Router({ base: Routes.Api })

const ApiRoutes: APIMapping = {
  Card: CardRoute.list,
  CardLevel: CardLevelRoute,
  CardParameter: CardParameterRoute,
  CardRarity: CardRarityRoute,
  'Card/Id': CardRoute.id,
  Character: CharacterRoute.select,
  'Character/List': CharacterRoute.list,
  MusicChart: MusicChartRoutes.pattern,
  MusicChartList: MusicChartRoutes.list,
  Skill: SkillRoute.list,
  'Skill/All': SkillRoute.all,
  'Skill/EffectTypes': SkillRoute.effectTypes,
  'Skill/X': SkillRoute.skillx,
  Story: StoryRoute,
  Version: VersionRoute,
}

function validateCache(req: Request, eTag: string, lastUpdate: Date | null) {
  const reqETag = req.headers.get('If-None-Match')
  if (reqETag) {
    return reqETag.replace(/^W\//, '') === eTag.replace(/^W\//, '')
  }
  const ims = req.headers.get('If-Modified-Since')
  if (ims) {
    const oneDate = new Date(ims)
    if (Number.isNaN(Number(oneDate))) return false
    if (!lastUpdate) return false
    return Number(oneDate) >= Number(lastUpdate)
  }
  return false
}

const NonCachedRoutes: (keyof APIMapping)[] = ['Version']

for (const [name, route] of Object.entries(ApiRoutes)) {
  const path = '/' + name
  const router = createRouter(path, route)
  apiRouter.get(path, router.handle)
  // apiRouter.post(path, router.handle)
}

export function createRouter(
  path: string,
  responder: (...a: any) => Promise<any>,
): Router {
  const router = Router({ base: join(Routes.Api, path) })
  router.get('/', async (req) => {
    const cachedResponse = await caches.default.match(req)
    if (
      cachedResponse &&
      !NonCachedRoutes.includes(path.replace(/^\//, '') as any)
    ) {
      const cc = cachedResponse.headers.get('Cache-Control')
      if (cc !== 'no-cache') {
        await caches.default.delete(req as any)
      }
      cachedResponse.headers.set('Cache-Control', 'no-cache')
      // @ts-expect-error Somehow it does not recognize @cloudflare/workers-types
      await caches.default.put(req, cachedResponse.clone())
      cachedResponse.headers.set('Sourced-From', 'Cloudflare-Workers')
      return cachedResponse
    }
    const lastUpdate = await dbGetLastUpdate()
    const reqBody: Record<string, string | string[]> = parseFromParams(req)
    const ret = await responder(reqBody)
    const eTag = `"${xxhash(JSON.stringify(ret))}"`
    const headers = {
      ETag: eTag,
      'Cache-Control': 'no-cache',
      ...(lastUpdate ? { 'Last-Modified': lastUpdate.toUTCString() } : {}),
    }
    const response =
      !NonCachedRoutes.includes(path.replace(/^\//, '') as any) &&
      validateCache(req, eTag, lastUpdate)
        ? new Response(null, {
            status: 304,
            headers: {
              ...CorsHeaders,
              ...headers,
            },
          })
        : jsonResponse(ret, headers)
    // @ts-expect-error Somehow it does not recognize @cloudflare/workers-types
    await caches.default.put(req, response.clone())
    return response
  })
  // router.post('/', async (req) => {
  //   const reqBody: Record<string, string> = await parseFromBody(req)
  //   const ret = await responder(reqBody)
  //   return jsonResponse(ret)
  // })
  return router
}

export default apiRouter

function parseFromParams(req: Request) {
  const params = new URL(req.url).searchParams
  const ret: Record<string, string | string[]> = {}
  for (const key of params.keys()) {
    const values = params.getAll(key)
    if (values.length === 1) {
      ret[key] = values[0]
    } else {
      ret[key] = values
    }
  }
  return ret
}
