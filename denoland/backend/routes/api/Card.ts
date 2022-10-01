import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import pick from 'lodash/pick'
import { MaxLevel } from '../../utils/const.ts'

const responder: APIMapping['Card'] = async ({ id }) => {
  const cards = await dbGet('Card')
  const cardParams = await dbGet('CardParameter')
  const cardRarity = await dbGet('CardRarity')

  return cards
    .filter((x) => (id ? x.id === id : true))
    .map((x) => {
      const maxRatioPermil = Math.max(
        x.vocalRatioPermil,
        x.danceRatioPermil,
        x.visualRatioPermil
      )

      const parameterInfo = cardParams.filter(
        (y) => y.id === x.cardParameterId && y.level === MaxLevel
      )[0]

      const rarityInfo = cardRarity.reduce((a, b) =>
        a.rarity > b.rarity ? a : b
      )

      // See also: frontend:components/cards/Props.tsx
      const maxValue = Math.floor(
        (Math.floor((Number(parameterInfo.value) * maxRatioPermil) / 1000) *
          rarityInfo.parameterBonusPermil) /
          1000
      )

      return {
        ...pick(x, [
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
        ]),
        maxValue: maxValue,
      }
    })
}

export const handler = apiWrapper(responder)
