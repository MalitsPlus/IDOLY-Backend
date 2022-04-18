import type { TypeMapping, AcceptableKey } from '@hoshimi/types'

export async function dbGet<T extends AcceptableKey>(
  s: T,
): Promise<TypeMapping[T]> {
  const jsonText = await KV.get(DB_PREFIX + '_' + s)
  if (!jsonText) {
    throw Error(`Database entry not found: ${s}`)
  }
  const json = JSON.parse(jsonText)
  return json
}
