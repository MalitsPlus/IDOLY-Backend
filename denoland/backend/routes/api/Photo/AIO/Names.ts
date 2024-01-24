import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import dedup from '@utils/dedup.ts'

const responder: APIMapping['Photo/AIO/Names'] = async () => {
  const photoAio = await dbGet('PhotoAllInOne')
  return dedup(photoAio.map((x) => x.name))
}

export const handler = apiWrapper(responder)
