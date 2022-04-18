import { Router } from 'itty-router'
import { ApiRoutes, Routes } from '../const'

import CardLevelRouter from './cardLevel'

const router = Router({ base: Routes.Api })
router.get(ApiRoutes.CardLevel, CardLevelRouter.handle)

export default router
