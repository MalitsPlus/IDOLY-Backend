import { Handlers } from 'https://deno.land/x/fresh@1.0.1/server.ts'
import { errorResponse } from '@utils/jsonResponse.ts'
import { isReadonly } from '@utils/requirePermission.ts'
import { dbGet } from '@utils/dbGet.ts'

/**
 * GET /manage/octo/asset?name=
 *
 * Authorization: Bearer [ADMINISTRATION/READONLY TOKEN]
 */
export const handler: Handlers = {
  async GET(req) {
    if (!isReadonly(req)) {
      return errorResponse('Unauthorized', 403)
    }
    const url = new URL(req.url)
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
  },
}
