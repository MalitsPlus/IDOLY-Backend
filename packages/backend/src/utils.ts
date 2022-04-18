export function tryJsonParse(s: any): any | null {
  try {
    return JSON.parse(s)
  } catch (_) {
    return null
  }
}

export function jsonResponse(s: any): Response {
  return new Response(typeof s === 'object' ? JSON.stringify(s) : s, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
