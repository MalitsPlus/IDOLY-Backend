import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import createErrStatus from '@utils/createErrStatus.ts'
import omit from 'lodash/omit'

const responder: APIMapping['Music'] = async ({ id }) => {
  if (!id) {
    return createErrStatus('No id found')
  }

  const musics = await dbGet('Music')
  const item = musics.filter((x) => x.id === id)?.[0]
  if (!item) {
    return createErrStatus(`No music found with id ${id}`, 404)
  }

  return omit(item, ['volumePermyriads', 'vocalVolumePermyriads'])
}

export const handler = apiWrapper(responder)
