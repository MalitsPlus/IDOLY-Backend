import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import { GachaType } from 'hoshimi-types/ProtoEnum'

const responder: APIMapping['Gacha'] = async () => {
  const [Gachas, Conditions] = await Promise.all([
    dbGet('Gacha'),
    dbGet('Condition'),
  ])
  return Gachas.filter((x) =>
    [
      GachaType.Normal,
      GachaType.Premium,
      GachaType.Stamp,
      GachaType.Continuous,
    ].includes(x.gachaType)
  )
    .map((x) => {
      const condition = Conditions.find((y) => y.id === x.viewConditionId)
      if (!condition) {
        return null
      }
      if (condition.settings.length !== 1) {
        return null
      }
      if (!condition.settings[0].term) {
        return null
      }
      const { name, gachaType } = x
      const { nowAfter, nowBefore } = condition.settings[0].term
      return {
        name,
        gachaType,
        nowAfter: Number(nowAfter),
        nowBefore: Number(nowBefore),
      }
    })
    .filter((x): x is Exclude<typeof x, null> => x !== null)
    .filter((x) => {
      const now = Number(new Date())
      return x.nowAfter < now && x.nowBefore > now
    })
}

export const handler = apiWrapper(responder)
