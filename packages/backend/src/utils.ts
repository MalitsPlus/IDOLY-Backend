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

export function jsonResponse(
  s: any,
  extraHeaders: Record<string, string> = {},
): Response {
  return json(s, {
    headers: {
      ...CorsHeaders,
      ...extraHeaders,
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

export function fnv1aString(s: string): number {
  // https://github.com/fastify/fastify-etag/blob/fc4cb37dbcd1c4e4ef1fb959329f8c2a518a11a4/fnv1a.js
  /** MIT License
   *
   * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
   *
   * Permission is hereby granted, free of charge, to any person obtaining a
   * copy of this software and associated documentation files (the "Software"),
   * to deal in the Software without restriction, including without limitation
   * the rights to use, copy, modify, merge, publish, distribute, sublicense,
   * and/or sell copies of the Software, and to permit persons to whom the Software
   * is furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
   * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
   * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  let hash = 2166136261

  for (let i = 0; i < s.length; i++) {
    hash ^= s.charCodeAt(i)

    // 32-bit FNV prime: 2**24 + 2**8 + 0x93 = 16777619
    // Using bitshift for accuracy and performance. Numbers in JS suck.
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24)
  }

  return hash >>> 0
}
