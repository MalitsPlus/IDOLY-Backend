import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'

const responder: APIMapping['CardParameter'] = async ({ level: _level }) => {
  const cardParam = await dbGet('CardParameter')
  const level = parseInt(_level ?? '')
  if (Number.isNaN(level)) {
    return cardParam
  }
  return cardParam.filter((x) => x.level === level)
}

export const handler = apiWrapper(responder)
