import { NonExpandedKeys } from './const.ts'
import kv from './kv.ts'
import { UnArray } from './types.ts'
import { Filter } from 'mongodb'
import type { AcceptableDbKey, ResourceMapping } from 'hoshimi-types'

/**
 * Use MongoDB-based operation API if possible.
 */
export function dbGet<T extends AcceptableDbKey>(
  s: T,
  filter: Filter<UnArray<ResourceMapping[T]>> = {}
): Promise<ResourceMapping[T]> {
  if (NonExpandedKeys.includes(s as typeof NonExpandedKeys[number])) {
    return kv.getValue(s as typeof NonExpandedKeys[number]).then(JSON.parse)
  }
  return kv.get(s as any, filter) as any
}

export const dbAggregate = kv.aggregate
