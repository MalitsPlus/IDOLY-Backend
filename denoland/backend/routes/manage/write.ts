import { Handlers } from 'https://deno.land/x/fresh@1.0.1/server.ts'
import jsonResponse, { errorResponse } from '@utils/jsonResponse.ts'
import { isAdmin } from '@utils/requirePermission.ts'
import kv from '@utils/kv.ts'

/**
 * PUT /manage/write
 *
 * Authorization: Bearer [ADMINISTRATION TOKEN]
 * body: {key:"". value:""}
 */
export const handler: Handlers = {
  async PUT(req) {
    if (!isAdmin(req)) {
      return errorResponse('Unauthorized', 403)
    }
    const json: Record<string, unknown> = await req.json?.()
    if (!json.key || !json.value) {
      return new Response('No key or value found', {
        status: 400,
      })
    }
    const key = json.key
    const value = json.value
    if (typeof key !== 'string' || typeof value !== 'string') {
      return new Response('Key and value should be string', {
        status: 400,
      })
    }
    await kv.put(key, value)
    return jsonResponse({ ok: true })
  },
}
