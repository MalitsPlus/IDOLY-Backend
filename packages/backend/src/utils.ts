import { MultiString } from '@outloudvi/hoshimi-types'
import { json } from 'itty-router-extras'
import { CorsHeaders } from './const'

export function tryJsonParse(s: any): any | null {
  try {
    return JSON.parse(s)
  } catch (_) {
    return null
  }
}

export function jsonResponse(s: any): Response {
  return json(s, {
    headers: {
      ...CorsHeaders,
    },
  })
}

export function parseMultiString(s: MultiString): string[] {
  if (!s) return []
  if (typeof s === 'string') {
    return s.split(',').map((x) => x.trim())
  }
  return s
}
