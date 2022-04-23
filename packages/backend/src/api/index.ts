import { Router, Request } from 'itty-router'
import { join } from 'path-browserify'

import { APIMapping } from '@outloudvi/hoshimi-types'
import { jsonResponse } from '../utils'

import { Routes } from '../const'
import CardRoute from './card'
import CardLevelRoute from './cardLevel'
import CardParameterRoute from './cardParameter'
import CardRarityRoute from './cardRarity'
import CharacterRoute from './character'
import SkillRoute from './skill'
import MusicChartRoutes from './musicChart'

const apiRouter = Router({ base: Routes.Api })

const ApiRoutes: APIMapping = {
  Card: CardRoute,
  CardLevel: CardLevelRoute,
  CardParameter: CardParameterRoute,
  CardRarity: CardRarityRoute,
  Character: CharacterRoute,
  MusicChart: MusicChartRoutes.pattern,
  MusicChartList: MusicChartRoutes.list,
  Skill: SkillRoute,
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
    const reqBody: Record<string, string | string[]> = parseFromParams(req)
    const ret = await responder(reqBody)
    return jsonResponse(ret)
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
