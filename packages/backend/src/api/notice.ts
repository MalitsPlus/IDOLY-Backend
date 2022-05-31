import type { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'
import { parseIntNumber } from '../utils'

const responder: APIMapping['Notice'] = async ({
  limit: _limit,
  offset: _offset,
}) => {
  const limit = parseIntNumber(_limit) ?? 5
  const offset = parseIntNumber(_offset) ?? 0
  const allNotices = (await dbGet('Notice')).notices
  return allNotices.slice(offset, offset + limit)
}

export default responder
