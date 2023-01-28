// deno-lint-ignore-file no-explicit-any

import type { AcceptableDbKey, ResourceMapping } from 'hoshimi-types'
import { NonExpandedKeys } from './const.ts'
import kv from './kv.ts'
import { MongoQueryParameterType } from './types.ts'

/**
 * Use MongoDB-based operation API if possible.
 */
export function dbGet<T extends AcceptableDbKey>(
  s: T
): Promise<ResourceMapping[T]> {
  if (NonExpandedKeys.includes(s)) {
    return kv.getValue(s).then(JSON.parse)
  }
  return kv.get(s) as any
}

export function dbGetPlus<T extends AcceptableDbKey>(
  s: T,
  params: Partial<Record<MongoQueryParameterType, any>>
): Promise<ResourceMapping[T]> {
  if (NonExpandedKeys.includes(s)) {
    throw Error('Filter cannot be used on plain-text collections.')
  }
  return kv.get(s, params) as any
}

export function dbAggregate<T extends AcceptableDbKey>(
  s: T,
  p: Record<string, any>[]
): Promise<any[]> {
  return kv.aggregate(s, p)
}
