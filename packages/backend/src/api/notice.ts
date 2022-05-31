import type { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'
import { parseIntNumber } from '../utils'

const responder: APIMapping['Notice'] = async ({
  limit: _limit,
  offset: _offset,
  type,
}) => {
  const limit = parseIntNumber(_limit) ?? 5
  const offset = parseIntNumber(_offset) ?? 0
  const allNotices = await dbGet('Notice')
  return allNotices[type].slice(offset, offset + limit)
}

export default responder
