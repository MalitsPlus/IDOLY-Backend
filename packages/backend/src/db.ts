import type { ResourceMapping, AcceptableKey } from '@outloudvi/hoshimi-types'

export async function dbGet<T extends AcceptableKey>(
  s: T,
): Promise<ResourceMapping[T]> {
  const jsonText = await KV.get(DB_PREFIX + '_' + s)
  if (!jsonText) {
    throw Error(`Database entry not found: ${s}`)
  }
  const json = JSON.parse(jsonText)
  return json
}
