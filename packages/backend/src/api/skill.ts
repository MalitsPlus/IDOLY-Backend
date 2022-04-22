import type { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'
import { parseMultiString } from '../utils'

const responder: APIMapping['Skill'] = async ({ ids: _ids }) => {
  const ids = parseMultiString(_ids)
  const allSkills = await dbGet('Skill')
  return allSkills.filter((x) => ids.includes(x.id))
}

export default responder
