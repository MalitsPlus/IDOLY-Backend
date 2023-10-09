import type { APIMapping } from 'hoshimi-types'
import pick from 'lodash/pick'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import { filterReleaseTime } from '@utils/filterRelease.ts'
import { parseMultiString } from '@utils/parse.ts'

const responder: APIMapping['Appearance/Hair'] = async ({
  characterId: _characterId,
}) => {
  const characterId = parseMultiString(_characterId)?.[0]
  const hairs = await dbGet('Hair').then(filterReleaseTime)
  const ret = hairs
    .filter((x) => x.characterId === characterId)
    .sort((a, b) => a.order - b.order)
    .map((x) =>
      pick(x, [
        'id',
        'order',
        'name',
        'sdHairAssetId',
        'fittingCostumeId',
        'wearableCostumeIds',
        'notWearableCostumeIds',
      ])
    )
  return ret
}

export const handler = apiWrapper(responder)
