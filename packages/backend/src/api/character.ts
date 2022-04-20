import { Router } from 'itty-router'
import { Routes, ApiRoutes } from '../const'
import { join } from 'path-browserify'
import { dbGet } from '../db'
import { jsonResponse } from '../utils'

const router = Router({ base: join(Routes.Api, ApiRoutes.Character) })

router.get('/', async () => {
  const ret = await dbGet('Character')
  return jsonResponse(ret)
})

export default router
