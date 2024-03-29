import type { APIMapping } from 'hoshimi-types/'
import pick from 'lodash/pick'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import filterRelease from '@utils/filterRelease.ts'
import { parseMultiString } from '@utils/parse.ts'

const responder: APIMapping['Appearance/Costume'] = async ({
  characterId: _characterId,
}) => {
  const characterId = parseMultiString(_characterId)?.[0]
  const costumes = await dbGet('Costume').then(filterRelease)
  const ret = costumes
    .filter((x) => x.characterId === characterId)
    .sort((a, b) => a.order - b.order)
    .map((x) => pick(x, ['id', 'order', 'name', 'sdAssetId', 'defaultHairId']))
  return ret
}

export const handler = apiWrapper(responder)
