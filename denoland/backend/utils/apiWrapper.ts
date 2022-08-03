import { Handlers } from '$fresh/server.ts'
import jsonResponse, { errorResponse } from '@utils/jsonResponse.ts'

function mergeSearchParams(sp: URLSearchParams): Record<string, string> {
  const ret: Record<string, string> = {}
  for (const [k, v] of sp.entries()) {
    ret[k] = v
  }
  return ret
}

export default function apiWrapper(f: (...t: any) => Promise<any>): Handlers {
  const handler: Handlers = {
    async GET(req) {
      const url = new URL(req.url)
      const params = mergeSearchParams(url.searchParams)
      const result = await f(params).catch((e) => ({
        ok: false,
        message: String(e),
      }))
      return jsonResponse(result)
    },
  }
  return handler
}
