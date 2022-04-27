import { APIMapping } from '@outloudvi/hoshimi-types'
import pick from 'lodash/pick'
import uniq from 'lodash/uniq'
import { dbGet } from '../db'

const list: APIMapping['Card'] = async () => {
  const cards = await dbGet('Card')
  return cards.map((x) =>
    pick(x, [
      'id',
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
    }[]
  > = {}
  for (const charId of charIds) {
    const characterCards = cards
      .filter((x) => x.characterId === charId)
      .sort((a, b) => a.releaseDate - b.releaseDate || (a.id < b.id ? -1 : 1))
    ret[charId] = characterCards.map((v, i) => ({
      ccid: i + 1, // starts from 1
      cardId: v.id,
    }))
  }
  return ret
}

export default {
  list,
  id,
}
