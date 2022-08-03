import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import { parseMultiString } from '@utils/parse.ts'
import fromPairs from 'lodash/fromPairs'

const responder: APIMapping['Skill/X'] = async ({ ids: _ids }) => {
  const records = await dbGet('Skillx')
  if (!_ids) return records
  const ids = parseMultiString(_ids)
  return fromPairs(Object.entries(records).filter((x) => ids.includes(x[0])))
}

export const handler = apiWrapper(responder)
