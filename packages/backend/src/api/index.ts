import { Router, Request } from 'itty-router'
import { join } from 'path-browserify'

import { APIMapping } from '@hoshimi/types'

import { Routes } from '../const'
import CardLevelRoute from './cardLevel'
import CharacterRoute from './character'
import CardRoute from './card'
import { jsonResponse } from '../utils'

const apiRouter = Router({ base: Routes.Api })

const ApiRoutes: APIMapping = {
  CardLevel: CardLevelRoute,
  Character: CharacterRoute,
  Card: CardRoute,
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
    const reqBody: Record<string, string> = parseFromParams(req)
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
  const ret: Record<string, string> = {}
  for (const [k, v] of params.entries()) {
    ret[k] = v
  }
  return ret
}
