import { Router } from '@ovv/itty-router'
import { join } from 'path-browserify'
import { APIMapping } from '@outloudvi/hoshimi-types'

import { jsonResponse, xxhash } from '../utils'
import { Routes } from '../const'
import CardRoute from './card'
import CardLevelRoute from './cardLevel'
import CardParameterRoute from './cardParameter'
import CardRarityRoute from './cardRarity'
import CharacterRoute from './character'
import MusicChartRoutes from './musicChart'
import SkillRoute from './skill'
import StoryRoute from './story'
import { dbGetLastUpdate } from '../db'

const apiRouter = Router({ base: Routes.Api })

const ApiRoutes: APIMapping = {
  Card: CardRoute,
  CardLevel: CardLevelRoute,
  CardParameter: CardParameterRoute,
  CardRarity: CardRarityRoute,
  Character: CharacterRoute.select,
  'Character/List': CharacterRoute.list,
  MusicChart: MusicChartRoutes.pattern,
  MusicChartList: MusicChartRoutes.list,
  Skill: SkillRoute,
  Story: StoryRoute,
}

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
    if (cachedResponse) {
      return cachedResponse
    }
    const lastUpdate = await dbGetLastUpdate()
    const reqBody: Record<string, string | string[]> = parseFromParams(req)
    const ret = await responder(reqBody)
    const response = jsonResponse(ret, {
      ETag: `"${xxhash(JSON.stringify(ret))}"`,
      ...(lastUpdate ? { 'Last-Modified': lastUpdate.toUTCString() } : {}),
    })
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
