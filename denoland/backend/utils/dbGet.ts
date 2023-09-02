import * as Sentry from 'sentry'
import { NonExpandedKeys } from './const.ts'
import kv from './kv.ts'
import { UnArray } from './types.ts'
import { Filter } from 'mongodb'
import type { AcceptableDbKey, ResourceMapping } from 'hoshimi-types'

function isNonExpandedKey(
  key: string
): key is (typeof NonExpandedKeys)[number] {
  return NonExpandedKeys.includes(key as (typeof NonExpandedKeys)[number])
}

/**
 * Use MongoDB-based operation API if possible.
 */
export async function dbGet<T extends AcceptableDbKey>(
  s: T,
  filter: Filter<UnArray<ResourceMapping[T]>> = {}
): Promise<ResourceMapping[T]> {
  const transaction = Sentry.getCurrentHub().getScope().getTransaction()
  const startAt = performance.now()
  if (isNonExpandedKey(s)) {
    const result = await kv.getValue(s as (typeof NonExpandedKeys)[number])
    const endAt = performance.now()
    transaction?.setMeasurement('dbRequestTime', endAt - startAt, 'millisecond')
    return JSON.parse(result)
  }
  const result = await kv.get(s, filter)
  const endAt = performance.now()
  transaction?.setMeasurement('dbRequestTime', endAt - startAt, 'millisecond')
  // @ts-nocheck: TODO: recognize the correct type
  return result
}

export const dbAggregate = kv.aggregate
