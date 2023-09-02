// deno-lint-ignore-file no-explicit-any

import { Handlers } from '$fresh/server.ts'
import jsonResponse, { errorResponse } from '@utils/jsonResponse.ts'
import { isAdmin } from '@utils/requirePermission.ts'
import kv from '@utils/kv.ts'
import tryJsonParse from '@utils/tryJsonParse.ts'
import { NonExpandedKeys } from '@utils/const.ts'

/**
 * PUT /manage/write
 *
 * Authorization: Bearer [ADMINISTRATION TOKEN]
 * body: {
 *     key: "".
 *     value:"",
 *     type: array (default) | value
 * }
 */
export const handler: Handlers = {
  async PUT(req) {
    if (!isAdmin(req)) {
      return errorResponse('Unauthorized', 403)
    }
    const json: Record<string, string> = await req.json?.()
    if (!json.key || !json.value) {
      return new Response('No key or value found', {
        status: 400,
      })
    }
    const key = json.key
    const typ =
      json.type === 'value' || NonExpandedKeys.includes(key as any)
        ? 'value'
        : 'array'
    const value = tryJsonParse(json.value)
    if (value === undefined) {
      return errorResponse('Invalid JSON', 400)
    }
    if (typeof key !== 'string') {
      return errorResponse('Key should be string', 400)
    }
    if (Array.isArray(value) && typ === 'array') {
      await kv.del(key as any)
      return await kv
        .put(key as any, value)
        .then((x) => jsonResponse({ ok: true, lines: x }))
        .catch((x) => errorResponse(x, 500))
    }
    if (typ === 'value') {
      return await kv
        .setValue(key as any, JSON.stringify(value))
        .then(() => jsonResponse({ ok: true, lines: 1 }))
        .catch((x) => errorResponse(x, 500))
    }
    return errorResponse("Value should be an JSON'd array or an value", 400)
  },
}
