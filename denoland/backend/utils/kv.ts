import { NonExpandedKeys } from './const.ts'
import type { NaiveResourceMapping, UnArray } from './types.ts'
import { MONGODB_CONNECTION } from '@utils/env.ts'

import { Database, MongoClient } from 'mongodb'
import type { Filter } from 'mongodb'

const IS_ONLY = { __isOnly: true }

class Client {
  #client: MongoClient
  #db: Database | null = null
  #conn: string

  constructor(conn: string) {
    this.#client = new MongoClient()
    this.#conn = conn
  }

  async getClient(): Promise<Database> {
    if (this.#db !== null) {
      return this.#db
    }

    this.#db = await this.#client.connect(this.#conn)
    return this.#db
  }
}

const client = new Client(MONGODB_CONNECTION)

export async function get<T extends keyof NaiveResourceMapping>(
  collectionName: T,
  filter: Filter<UnArray<NaiveResourceMapping[T]>> = {}
): Promise<UnArray<NaiveResourceMapping[T]>[]> {
  const $ = await client.getClient()
  return $.collection<UnArray<NaiveResourceMapping[T]>>(collectionName)
    .find(filter)
    .toArray()
}

export async function put<T extends keyof NaiveResourceMapping>(
  collectionName: T,
  filter: UnArray<NaiveResourceMapping[T]>[]
): Promise<number> {
  await del(collectionName)
  if (filter.length === 0) {
    return 0
  }
  const $ = await client.getClient()
  return (await $.collection(collectionName).insertMany(filter)).insertedCount
}

export async function del<T extends keyof NaiveResourceMapping>(
  collectionName: T
): Promise<void> {
  const $ = await client.getClient()
  await $.collection<UnArray<NaiveResourceMapping[T]>>(
    collectionName
  ).deleteMany({})
}

export async function delWithFilter<T extends keyof NaiveResourceMapping>(
  collectionName: T,
  filter: Filter<UnArray<NaiveResourceMapping[T]>>
): Promise<void> {
  const $ = await client.getClient()
  await $.collection<UnArray<NaiveResourceMapping[T]>>(
    collectionName
  ).deleteMany(filter)
}

export async function setValue<T extends typeof NonExpandedKeys[number]>(
  key: T,
  value: string
): Promise<void> {
  const $ = await client.getClient()
  await $.collection(key).updateOne(
    IS_ONLY,
    { $set: { value } },
    { upsert: true }
  )
}

export async function getValue<T extends typeof NonExpandedKeys[number]>(
  key: T
): Promise<string> {
  const $ = await client.getClient()
  return $.collection(key)
    .findOne(IS_ONLY)
    .then((x) => x?.value ?? '')
}

export async function aggregate<T extends keyof NaiveResourceMapping>(
  collectionName: T,
  pipeline: NaiveResourceMapping[T]
): Promise<UnArray<NaiveResourceMapping[T]>[]> {
  const $ = await client.getClient()
  return $.collection<UnArray<NaiveResourceMapping[T]>>(collectionName)
    .aggregate<UnArray<NaiveResourceMapping[T]>>(pipeline)
    .toArray()
}

export default {
  get,
  put,
  del,
  delWithFilter,
  setValue,
  getValue,
  aggregate,
}
