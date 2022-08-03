import type { AcceptableDbKey, ResourceMapping } from 'hoshimi-types'
import { NonExpandedKeys } from './const.ts'
import kv from './kv.ts'

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
