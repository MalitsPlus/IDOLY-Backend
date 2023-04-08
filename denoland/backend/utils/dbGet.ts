import * as Sentry from 'sentry'
import { NonExpandedKeys } from './const.ts'
import kv from './kv.ts'
import { UnArray } from './types.ts'
import { Filter } from 'mongodb'
import type { AcceptableDbKey, ResourceMapping } from 'hoshimi-types'

/**
 * Use MongoDB-based operation API if possible.
 */
export async function dbGet<T extends AcceptableDbKey>(
  s: T,
  filter: Filter<UnArray<ResourceMapping[T]>> = {}
): Promise<ResourceMapping[T]> {
  const transaction = Sentry.getCurrentHub().getScope().getTransaction()
  const startAt = performance.now()
  if (NonExpandedKeys.includes(s as typeof NonExpandedKeys[number])) {
    const result = await kv.getValue(s as typeof NonExpandedKeys[number])
    const endAt = performance.now()
    transaction?.setMeasurement('dbRequestTime', endAt - startAt, 'millisecond')
    return JSON.parse(result)
  }
  const result = await kv.get(s as any, filter)
  const endAt = performance.now()
  transaction?.setMeasurement('dbRequestTime', endAt - startAt, 'millisecond')
  return result as any
}

export const dbAggregate = kv.aggregate
