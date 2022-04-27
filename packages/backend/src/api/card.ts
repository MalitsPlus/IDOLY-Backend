import { APIMapping } from '@outloudvi/hoshimi-types'
import pick from 'lodash.pick'
import { dbGet } from '../db'

const responder: APIMapping['Card'] = async () => {
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

export default responder
