import { APIMapping } from '@outloudvi/hoshimi-types'
import pick from 'lodash/pick'
import uniq from 'lodash/uniq'
import { dbGet } from '../db'

const list: APIMapping['Card'] = async ({ id }) => {
  const cards = await dbGet('Card')
  return cards
    .filter((x) => (id ? x.id === id : true))
    .map((x) =>
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
      ]),
    )
}

const id: APIMapping['Card/Id'] = async () => {
  const cards = await dbGet('Card')
  const charIds = uniq(cards.map((x) => x.characterId))
  const ret: Record<
    string,
    {
      ccid: number
      cardId: string
      nameJa: string
    }[]
  > = {}
  for (const charId of charIds) {
    const characterCards = cards
      .filter((x) => x.characterId === charId)
      .sort(
        (a, b) =>
          Number(a.releaseDate) - Number(b.releaseDate) ||
          (a.id < b.id ? -1 : 1),
      )
    ret[charId] = characterCards.map((v, i) => ({
      ccid: i + 1, // starts from 1
      cardId: v.id,
      nameJa: v.name,
    }))
  }
  return ret
}

export default {
  list,
  id,
}
