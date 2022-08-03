import easyPost from './easyPost.ts'
import {
  MONGODB_API_APPID,
  MONGODB_API_KEY,
  MONGODB_DATABASE,
  MONGODB_DATA_SOURCE,
} from './env.ts'
import omit from 'lodash/omit'
import { MongoQueryParameterType } from './types.ts'

const baseUrl = `https://data.mongodb-api.com/app/${MONGODB_API_APPID}/endpoint/data/v1/action`

const IS_ONLY = { __isOnly: true }

export function get(
  key: string,
  params: Partial<Record<MongoQueryParameterType, any>> | undefined = undefined
): Promise<any[]> {
  return easyPost(`${baseUrl}/find`, {
    method: 'POST',
    headers: {
      'api-key': MONGODB_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...params,
      collection: key,
      database: MONGODB_DATABASE,
      dataSource: MONGODB_DATA_SOURCE,
    }),
  }).then((x) =>
    x.documents.map((x: Record<string, unknown>) => omit(x, ['_id']))
  )
}

export async function put(key: string, values: any[]): Promise<string[]> {
  await del(key)
  if (values.length === 0) {
    return []
  }
  return await easyPost(`${baseUrl}/insertMany`, {
    method: 'POST',
    headers: {
      'api-key': MONGODB_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      collection: key,
      database: MONGODB_DATABASE,
      dataSource: MONGODB_DATA_SOURCE,
      documents: values,
    }),
  }).then((x) => {
    return x.insertedIds
  })
}

export async function del(key: string): Promise<void> {
  await easyPost(`${baseUrl}/deleteMany`, {
    method: 'POST',
    headers: {
      'api-key': MONGODB_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      collection: key,
      database: MONGODB_DATABASE,
      dataSource: MONGODB_DATA_SOURCE,
      filter: {},
    }),
  })
}

export async function setValue(key: string, value: string): Promise<string> {
  return await easyPost(`${baseUrl}/updateOne`, {
    method: 'POST',
    headers: {
      'api-key': MONGODB_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      collection: key,
      database: MONGODB_DATABASE,
      dataSource: MONGODB_DATA_SOURCE,
      upsert: true,
      filter: IS_ONLY,
      update: {
        value,
        ...IS_ONLY,
      },
    }),
  }).then((x) => x.insertedId)
}

export async function getValue(key: string): Promise<string> {
  return await easyPost(`${baseUrl}/findOne`, {
    method: 'POST',
    headers: {
      'api-key': MONGODB_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      collection: key,
      database: MONGODB_DATABASE,
      dataSource: MONGODB_DATA_SOURCE,
      filter: IS_ONLY,
    }),
  }).then((x) => x.document.value)
}

export function aggregate(
  key: string,
  pipeline: Record<string, any>[]
): Promise<any[]> {
  return easyPost(`${baseUrl}/aggregate`, {
    method: 'POST',
    headers: {
      'api-key': MONGODB_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      collection: key,
      database: MONGODB_DATABASE,
      dataSource: MONGODB_DATA_SOURCE,
      pipeline,
    }),
  }).then((x) => x.documents)
}

export default {
  get,
  put,
  del,
  setValue,
  getValue,
  aggregate,
}
