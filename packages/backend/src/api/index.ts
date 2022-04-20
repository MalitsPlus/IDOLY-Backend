import { Router } from 'itty-router'
import { ApiRoutes, Routes } from '../const'

import CardLevelRouter from './cardLevel'
import CharacterRouter from './character'

const router = Router({ base: Routes.Api })
router.get(ApiRoutes.CardLevel, CardLevelRouter.handle)
router.get(ApiRoutes.Character, CharacterRouter.handle)

export default router
