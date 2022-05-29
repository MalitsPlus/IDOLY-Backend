import { fromBackendRaw } from '../utils.mjs'
import lodash from 'lodash'
const { flattenDepth } = lodash

export default async () => {
  const skillX = JSON.parse(await fromBackendRaw('Skillx'))
  const skill = JSON.parse(await fromBackendRaw('Skill'))
  const collectedSkillxDescriptors = new Set(Object.keys(skillX))
  const collectSkillEffIds = flattenDepth(
    skill.map((x) =>
      x.levels.map((y) => y.skillDetails.map((z) => z.efficacyId))
    ),
    3
  )
  const nonAnalyzedSkillEffIds = collectSkillEffIds.filter(
    (effId) => !collectedSkillxDescriptors.has(effId)
  )
  if (nonAnalyzedSkillEffIds.length === 0) {
    return true
  }
  console.error('EffIds not found:', nonAnalyzedSkillEffIds.join(', '))
  return false
}
