import { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'
import { parseMultiString } from '../utils'
import pick from 'lodash.pick'

const list: APIMapping['Character/List'] = async () => {
  const ch = await dbGet('Character')
  return ch.map((x) =>
    pick(x, ['id', 'order', 'characterGroupId', 'name', 'enName', 'color']),
  )
}

const select: APIMapping['Character'] = async ({ ids: _ids }) => {
  const ids = parseMultiString(_ids)
  const ch = await dbGet('Character')
  return ch
    .filter((x) => ids.includes(x.id))
    .map((x) =>
      pick(x, [
        'id',
        'characterGroupId',
        'order',
        'name',
        'enName',
        'cv',
        'age',
        'birthday',
        'height',
        'weight',
        'zodiacSign',
        'hometown',
        'favorite',
        'unfavorite',
        'profile',
        'isNpc',
        'altCharacters',
        'color',
        'isLeftHanded',
        'shortProfile',
        'threeSize',
        'catchphrase',
        'idiom',
      ]),
    )
}

export default { list, select }
