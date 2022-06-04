import { Router } from '@ovv/itty-router'

import requireAdmin from '../middleware/requireAdmin'
import requireReadonly from '../middleware/requireReadonly'

import { Routes } from '../const'
import { dbGet, UpdateTimeKey } from '../db'

const router = Router({ base: Routes.Manage })

/**
 * GET /manage/raw?key=name
 *
 * Authorization: Bearer [ADMINISTRATION/READONLY TOKEN]
 */
router.get('/raw', requireReadonly, async (request) => {
  const url = new URL(request.url)
  const key = url.searchParams.get('key')
  if (!key) {
    return new Response('Key should be string', {
      status: 400,
    })
  }
  const val = await KV.get(key)
  return new Response(val, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
})

/**
 * GET /manage/octo/asset?name=
 *
 * Authorization: Bearer [ADMINISTRATION/READONLY TOKEN]
 */
router.get('/octo/asset', requireReadonly, async (request) => {
  const url = new URL(request.url)
  const name = url.searchParams.get('name')
  if (!name) {
    return new Response('ID should be string', {
      status: 400,
    })
  }
  const octoDb = await dbGet('Octo')
  const item = octoDb.assetBundleList.filter((x) => x.name === name)?.[0]
  if (!item) {
    return new Response(`Asset not found: ${name}`, {
      status: 404,
    })
  }
  return new Response(JSON.stringify(item), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
})

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
 * POST /manage/write/done
 *
 * Authorization: Bearer [ADMINISTRATION TOKEN]
 */
router.post('/write/done', requireAdmin, async () => {
  const now = new Date()
  // A bit of privacy...
  now.setMinutes(0)
  now.setSeconds(0)
  await KV.put(UpdateTimeKey, String(now))
  return new Response('ok')
})

export default router
