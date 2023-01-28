import { Handlers } from 'https://deno.land/x/fresh@1.0.1/server.ts'
import jsonResponse, { errorResponse } from '@utils/jsonResponse.ts'
import { isAdmin } from '@utils/requirePermission.ts'
import kv from '@utils/kv.ts'
import { CommuXKey } from '@utils/const.ts'

/**
 * PUT /manage/writeCommu
 *
 * Authorization: Bearer [ADMINISTRATION TOKEN]
 * body: {
 *     title: "",
 *     lines: [{
 *        name, text
 *     }],
 * }
 */
export const handler: Handlers = {
  async PUT(req) {
    if (!isAdmin(req)) {
      return errorResponse('Unauthorized', 403)
    }
    const json: Record<string, string> = await req.json?.()
    if (!json.title || !json.advAssetId || !Array.isArray(json.lines)) {
      return new Response('Invalid title or lines found', {
        status: 400,
      })
    }
    const { title, advAssetId, lines } = json
    await kv.delWithFilter(CommuXKey, { advAssetId })
    return await kv
      .put(
        CommuXKey,
        lines.map(({ name, text }) => ({
          name,
          text,
          advAssetId,
          title,
        }))
      )
      .then(() => jsonResponse({ ok: true, lines: 1 }))
      .catch((x) => errorResponse(x, 500))
  },
}
