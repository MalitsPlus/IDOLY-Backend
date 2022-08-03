import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import { parseMultiString } from '@utils/parse.ts'

const responder: APIMapping['Skill'] = async ({ ids: _ids }) => {
  const ids = parseMultiString(_ids)
  const allSkills = await dbGet('Skill')
  return allSkills.filter((x) => ids.includes(x.id))
}

export const handler = apiWrapper(responder)
