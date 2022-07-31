import { CorsHeaders } from './const.ts'

export default function jsonResponse(
  body: Record<string, unknown>,
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
