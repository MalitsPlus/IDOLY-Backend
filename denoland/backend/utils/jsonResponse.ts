import { CorsHeaders } from './const.ts'

type NonString<T> = T extends string ? never : T

export default function jsonResponse<T>(
  body: NonString<T>,
  extraHeaders: Record<string, string> = {},
  status = 200
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...CorsHeaders,
      ...extraHeaders,
    },
  })
}

export function errorResponse(message: string, status: number): Response {
  return jsonResponse(
    {
      ok: false,
      message,
    },
    {},
    status
  )
}
