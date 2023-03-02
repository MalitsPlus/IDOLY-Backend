import { Handlers } from 'https://deno.land/x/fresh@1.0.1/server.ts'
import jsonResponse, { errorResponse } from '@utils/jsonResponse.ts'
import { isAdmin } from '@utils/requirePermission.ts'
import kv from '@utils/kv.ts'
import { UpdateTimeKey } from '@utils/const.ts'
import observeAdv from '@utils/observeAdv.ts'
import flattenMessages from '@utils/flattenMessage.ts'

/**
 * POST /manage/write/done
 *
 * Authorization: Bearer [ADMINISTRATION TOKEN]
 */
export const handler: Handlers = {
  async POST(req) {
    if (!isAdmin(req)) {
      return errorResponse('Unauthorized', 403)
    }
    const now = new Date()
    // A bit of privacy...
    now.setMinutes(0)
    now.setSeconds(0)
    await Promise.all([
      kv.setValue(UpdateTimeKey, String(now)),
      observeAdv(),
      flattenMessages(),
    ])

    return jsonResponse({ ok: true })
  },
}
