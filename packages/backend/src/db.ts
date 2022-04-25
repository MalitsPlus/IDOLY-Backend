import type { ResourceMapping, AcceptableDbKey } from '@outloudvi/hoshimi-types'

export const UpdateTimeKey = DB_PREFIX + '_' + 'UPDATED'

export async function dbGet<T extends AcceptableDbKey>(
  s: T,
): Promise<ResourceMapping[T]> {
  const jsonText = await KV.get(DB_PREFIX + '_' + s)
  if (!jsonText) {
    throw Error(`Database entry not found: ${s}`)
  }
  const json = JSON.parse(jsonText)
  return json
}

export async function dbGetLastUpdate(): Promise<Date | null> {
  const updatedTime = await KV.get(UpdateTimeKey)
  if (!updatedTime) return null
  const dt = new Date(updatedTime)
  if (Number.isNaN(Number(dt))) return null
  return dt
}
