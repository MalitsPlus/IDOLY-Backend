import { APIMapping } from '@hoshimi/types'
import { dbGet } from '../db'

const responder: APIMapping['Character'] = async ({ characterGroupId }) => {
  const result = await dbGet('Character')
  if (characterGroupId) {
    return result.filter(matches({ characterGroupId }))
  }
  return result
}

export default responder

function matches(
  filter: Record<string, any>,
): (t: Record<string, any>) => boolean {
  return (t) => {
    for (const [k, v] of Object.entries(filter)) {
      if (t[k] !== v) return false
    }
    return true
  }
}
