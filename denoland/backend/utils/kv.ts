import { NonExpandedKeys } from './const.ts'
import type { NaiveResourceMapping, UnArray } from './types.ts'
import { MONGODB_CONNECTION, MONGODB_DATABASE } from '@utils/env.ts'

import { DeleteResult, MongoClient, WithId } from 'mongo'
import type { Db, Filter } from 'mongo'

const IS_ONLY = { __isOnly: true }

class Client {
  #client: MongoClient
  #dbName: string
  #connected: boolean = false

  constructor(conn: string, dbName: string) {
    this.#client = new MongoClient(conn)
    this.#dbName = dbName
  }

  async getClient(): Promise<Db> {
    if (!this.#connected) {
      try {
        await this.#client.connect()
      } catch (e) {
        console.log(e)
      }
      this.#connected = true
    }
    return this.#client.db(this.#dbName)
  }
}

const client = new Client(MONGODB_CONNECTION, MONGODB_DATABASE)

export async function get<T extends keyof NaiveResourceMapping>(
  collectionName: T,
  filter: Filter<UnArray<NaiveResourceMapping[T]>> = {}
): Promise<WithId<UnArray<NaiveResourceMapping[T]>>[]> {
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
): Promise<DeleteResult> {
  const $ = await client.getClient()
  return $.collection<UnArray<NaiveResourceMapping[T]>>(
    collectionName
  ).deleteMany()
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
): Promise<WithId<UnArray<NaiveResourceMapping[T]>>[]> {
  const $ = await client.getClient()
  return $.collection<UnArray<NaiveResourceMapping[T]>>(collectionName)
    .aggregate<WithId<UnArray<NaiveResourceMapping[T]>>>(pipeline)
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
