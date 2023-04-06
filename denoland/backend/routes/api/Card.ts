import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import filterRelease from '@utils/filterRelease.ts'
import pick from 'lodash/pick'

const responder: APIMapping['Card'] = async ({ id }) => {
  const cards = await dbGet('Card', {
    id: {
      $eq: id,
    },
  }).then(filterRelease)

  return cards.map((x) =>
    pick(x, [
      'id',
      'assetId',
      'name',
      'description',
      'type',
      'characterId',
      'initialRarity',
      'cardParameterId',
      'vocalRatioPermil',
      'danceRatioPermil',
      'visualRatioPermil',
      'staminaRatioPermil',
      'skillId1',
      'skillId2',
      'skillId3',
      'releaseDate',
      'stories',
      'liveAbilityId',
      'activityAbilityId',
    ])
  )
}

export const handler = apiWrapper(responder)
