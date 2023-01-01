import type { APIMapping } from '@dev/hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import pick from 'lodash/pick'
import { extractPageParams } from '../../utils/paginator.ts'

const responder: APIMapping['Emblems'] = async (params) => {
  const { lim, off } = extractPageParams(params)
  const showHidden = params.showHidden ?? false
  const emblems = await dbGet('Emblem')

  const data = emblems
    .filter((x) => (showHidden ? true : x.isViewableInInactive))
    .sort((a, b) => a.order - b.order)
    .slice(off, off + lim)
    .map((x) =>
      pick(x, ['name', 'assetId', 'isViewableInInactive', 'description'])
    )

  return {
    more: lim + off < emblems.length,
    data,
  }
}

export const handler = apiWrapper(responder)
