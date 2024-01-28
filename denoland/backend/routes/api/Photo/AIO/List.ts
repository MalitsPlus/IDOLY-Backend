import type { APIMapping } from 'hoshimi-types/'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import dedup from '@utils/dedup.ts'
import pick from 'lodash/pick'

const responder: APIMapping['Photo/AIO/List'] = async ({ name }) => {
  const photoAio = await dbGet('PhotoAllInOne')
  return photoAio
    .filter((x) => x.name === name)
    .map((x) => pick(x, ['id', 'name', 'assetId', 'rarity']))
}

export const handler = apiWrapper(responder)
