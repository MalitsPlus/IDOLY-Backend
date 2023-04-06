import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import createErrStatus from '@utils/createErrStatus.ts'

const responder: APIMapping['LiveAbility'] = async ({ id }) => {
  const abilities = await dbGet('LiveAbility', {
    id: {
      $eq: id,
    },
  })
  const item = abilities[0]
  if (!item) {
    return createErrStatus(`No music found with id ${id}`, 404)
  }
  return item
}

export const handler = apiWrapper(responder)
