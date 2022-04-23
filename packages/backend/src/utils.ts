import { MultiString } from '@outloudvi/hoshimi-types/helpers'
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

export function dedup<T>(s: T[]): T[] {
  return [...new Set(s)]
}

export function firstMatches<T>(
  arr: T[],
  key: string | number,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  value: any,
): T | null {
  for (const i of arr) {
    // @ts-expect-error should not throw
    if (i?.[key] === value) {
      return i
    }
  }
  return null
}

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : never
