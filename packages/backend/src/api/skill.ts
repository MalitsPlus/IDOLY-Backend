import type { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'
import { parseMultiString } from '../utils'

import flattenDepth from 'lodash/flattenDepth'

const dedup = (x: any[]) => [...new Set(x)]

async function getAllSkillDetailsString(): Promise<string[]> {
  const skills = await dbGet('Skill')
  return flattenDepth(
    skills.map((x) =>
      x.levels.map((y) => y.skillDetails.map((z) => z.efficacyId)),
    ),
    3,
    // I guess TS cannot handle such type...
  ) as unknown as string[]
}

const effectTypes: APIMapping['Skill/EffectTypes'] = async () => {
  const skillDetails = await getAllSkillDetailsString()
  return dedup(skillDetails.map((x) => x.split('-')[1]))
}

const list: APIMapping['Skill'] = async ({ ids: _ids }) => {
  const ids = parseMultiString(_ids)
  const allSkills = await dbGet('Skill')
  return allSkills.filter((x) => ids.includes(x.id))
}

export default { list, effectTypes }
