import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import pick from 'lodash/pick'

const responder: APIMapping['Story'] = async ({ id }) => {
  const db = await dbGet('Story')
  const ret = db.filter((x) => x.id === id)?.[0]
  if (!ret) {
    throw Error(`Story not found: ${id}`)
  }
  return pick(ret, ['id', 'name', 'sectionName', 'advAssetId', 'description'])
}

export const handler = apiWrapper(responder)
