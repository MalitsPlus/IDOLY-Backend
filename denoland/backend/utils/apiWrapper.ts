import { Handlers } from '$fresh/server.ts'
import jsonResponse, { notModifiedResponse } from '@utils/jsonResponse.ts'
import ping from './ping.ts'
import { FieldStatus } from './types.ts'
import { ErrorWithStatus } from './types.ts'
import xxhash from './xxhash.ts'

function mergeSearchParams(sp: URLSearchParams): Record<string, string> {
  const ret: Record<string, string> = {}
  for (const [k, v] of sp.entries()) {
    ret[k] = v
  }
  return ret
}

// deno-lint-ignore no-explicit-any
export default function apiWrapper(f: (...t: any) => Promise<any>): Handlers {
  const handler: Handlers = {
    async GET(req, ctx) {
      ping(req, ctx.remoteAddr as Deno.NetAddr).catch(console.log)
      const url = new URL(req.url)
      const params = mergeSearchParams(url.searchParams)
      const result = await f(params).catch((e) =>
        typeof e === 'object' && FieldStatus in e
          ? e
          : {
              ok: false,
              message: String(e),
              [FieldStatus]: 400,
            }
      )
      let status = 200
      if (FieldStatus in (result as ErrorWithStatus)) {
        status = result[FieldStatus]
      }
      // const lastUpdate = await kv
      //   .getValue(UpdateTimeKey)
      //   .then((x) => new Date(x).toUTCString())
      //   .catch((_) => undefined)
      const eTag = `"${xxhash(JSON.stringify(result))}"`
      const commonCacheTags = {
        'Cache-Control': 'max-age=3600, stale-while-revalidate=3600',
        ETag: `W/${eTag}`,
        // ...(lastUpdate ? { 'Last-Modified': lastUpdate } : {}),
      }

      const reqETag = req.headers.get('If-None-Match')
      if (reqETag) {
        // Check ETag
        if (reqETag.replace(/^W\//, '') === eTag.replace(/^W\//, '')) {
          // ETag matches
          return notModifiedResponse(commonCacheTags)
        }
      }

      // const reqDateStr = req.headers.get('If-Modified-Since')
      // if (
      //   reqDateStr &&
      //   !Number.isNaN(new Date(reqDateStr).getDate()) &&
      //   lastUpdate
      // ) {
      //   // Check lastUpdate
      //   const reqDate = new Date(reqDateStr)
      //   if (Number(lastUpdate) <= Number(reqDate)) {
      //     // Update later
      //     return notModifiedResponse(commonCacheTags)
      //   }
      // }

      return jsonResponse(result, commonCacheTags, status)
    },
  }
  return handler
}
