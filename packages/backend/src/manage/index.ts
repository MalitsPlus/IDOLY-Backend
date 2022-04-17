import { Router } from 'itty-router'

import requireAdmin from '../middleware/requireAdmin'

import { Routes, SpecialKey } from '../const'
import { tryJsonParse } from '../utils'

const router = Router({ base: Routes.Manage })

/**
 * PUT /manage/write
 *
 * Authorization: Bearer [ADMINISTRATION TOKEN]
 * body: {key:"". value:""}
 */
router.put('/write', requireAdmin, async (request) => {
  const json: any = await request.json?.()
  if (!json.key || !json.value) {
    return new Response('No key or value found', {
      status: 400,
    })
  }
  const key = json.key
  const val = json.value
  if (typeof key !== 'string' || typeof val !== 'string') {
    return new Response('Key and value should be string', {
      status: 400,
    })
  }
  await KV.put(key, val)
  return new Response('ok')
})

/**
 * POST /manage/setVersion
 *
 * Set current data version.
 *
 * Authorization: Bearer [ADMINISTRATION TOKEN]
 * body: {"currentVersion":""}
 */
router.post('/setVersion', requireAdmin, async (request) => {
  const json: any = await request.json?.()
  if (!json.currentVersion) {
    return new Response('No currentVersion found', {
      status: 400,
    })
  }
  const currVer = json.currentVersion
  const cardKey = `${DB_PREFIX}_${currVer}_Card`
  const maybeCards = tryJsonParse(await KV.get(cardKey))
  if (maybeCards === null && !json.force) {
    return new Response(
      `${cardKey} is empty. add {force:true} if you REALLY want to update to this version.`,
      {
        status: 400,
      },
    )
  }
  await KV.put(SpecialKey.CurrentVersion, currVer)
  return new Response('ok')
})

export default router
