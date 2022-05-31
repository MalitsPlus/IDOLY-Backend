import { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'

const list: APIMapping['Message'] = async ({ id }) => {
  const messages = await dbGet('Message')
  const msg = messages.filter((x) => x.id === id)?.[0]
  if (!msg) return null
  const { characterId, messageGroupId, name, type, details } = msg
  return {
    id,
    characterId,
    messageGroupId,
    name,
    type,
    details,
  }
}

const listByGroup: APIMapping['Message/Group'] = async ({ messageGroupId }) => {
  const messages = await dbGet('Message')
  return messages
    .filter((r) => r.messageGroupId === messageGroupId)
    .map(({ id, name }) => ({ id, name }))
}

const group: APIMapping['MessageGroup'] = () => dbGet('MessageGroup')

export default { list, listByGroup, group }
