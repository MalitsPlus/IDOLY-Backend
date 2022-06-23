import type { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'
import { parseMultiString } from '../utils'

import flattenDepth from 'lodash/flattenDepth'
import fromPairs from 'lodash/fromPairs'

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

const all: APIMapping['Skill/All'] = async () => dbGet('Skill')

const skillx: APIMapping['Skill/X'] = async ({ ids: _ids }) => {
  const records = await dbGet('Skillx')
  if (!_ids) return records
  const ids = parseMultiString(_ids)
  return fromPairs(Object.entries(records).filter((x) => ids.includes(x[0])))
}

export default { list, effectTypes, skillx, all }
