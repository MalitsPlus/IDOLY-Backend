import { NonExpandedKeys } from './const.ts'
import kv from './kv.ts'
import { NaiveResourceMapping, UnArray } from './types.ts'
import { Filter } from 'mongodb'
import type { AcceptableDbKey, ResourceMapping } from 'hoshimi-types'

/**
 * Use MongoDB-based operation API if possible.
 */
export function dbGet<T extends AcceptableDbKey>(
  s: T
): Promise<ResourceMapping[T]> {
  if (NonExpandedKeys.includes(s as typeof NonExpandedKeys[number])) {
    return kv.getValue(s as typeof NonExpandedKeys[number]).then(JSON.parse)
  }
  return kv.get(s as any) as any
}

export function dbGetPlus<T extends keyof NaiveResourceMapping>(
  s: T,
  params: Filter<UnArray<ResourceMapping[T]>>
): Promise<ResourceMapping[T]> {
  if (NonExpandedKeys.includes(s as any)) {
    throw Error('Filter cannot be used on plain-text collections.')
  }
  return kv.get(s, params) as any
}

export const dbAggregate = kv.aggregate
