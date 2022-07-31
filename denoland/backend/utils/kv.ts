import { DETA_PROJECT_ID, DETA_BASE_NAME, DETA_PROJECT_KEY } from './env.ts'

const baseUrl = `https://database.deta.sh/v1/${DETA_PROJECT_ID}/${DETA_BASE_NAME}`

type KeyValue = { key: string; value: string }

export async function get(key: string): Promise<string | null> {
  const ret = await fetch(`${baseUrl}/items/${key}`, {
    method: 'GET',
    headers: {
      'X-API-Key': DETA_PROJECT_KEY,
      'Content-Type': 'application/json',
    },
  }).then((x) => x.json())
  return ret.value ?? null
}

export async function putMany(vs: KeyValue[]): Promise<void> {
  await fetch(`${baseUrl}/items`, {
    method: 'PUT',
    body: JSON.stringify({
      items: vs.map(({ key, value }) => ({
        key,
        value,
      })),
    }),
    headers: {
      'X-API-Key': DETA_PROJECT_KEY,
      'Content-Type': 'application/json',
    },
  })
}

export function put(key: string, value: string): Promise<void> {
  return putMany([{ key, value }])
}

export async function del(key: string): Promise<void> {
  await fetch(`${baseUrl}/items/${key}`, {
    method: 'DELETE',
    headers: {
      'X-API-Key': DETA_PROJECT_KEY,
      'Content-Type': 'application/json',
    },
  })
}

export default {
  get,
  put,
  del,
}
