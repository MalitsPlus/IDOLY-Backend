import type { AcceptableDbKey, ResourceMapping } from 'hoshimi-types'
import { DB_PREFIX } from './env.ts'
import kv from './kv.ts'

export async function dbGet<T extends AcceptableDbKey>(
  s: T
): Promise<ResourceMapping[T]> {
  const jsonText = await kv.get(DB_PREFIX + '_' + s)
  if (!jsonText) {
    throw Error(`Database entry not found: ${s}`)
  }
  const json = JSON.parse(jsonText)
  return json
}
