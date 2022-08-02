import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'

const responder: APIMapping['Message'] = async ({ id }) => {
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

export const handler = apiWrapper(responder)
