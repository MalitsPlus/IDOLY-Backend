import type { APIMapping } from '@dev/hoshimi-types'
import { dbAggregate } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import { CommuXKey, CommuXSearchIndex } from '@utils/const.ts'

const responder: APIMapping['Search/Commu'] = async ({ q }) => {
  const results = await dbAggregate(CommuXKey, [
    {
      $search: {
        index: CommuXSearchIndex,
        text: {
          query: q,
          path: {
            wildcard: '*',
          },
        },
      },
    },
    {
      $limit: 30,
    },
    {
      $project: {
        _id: 0,
        name: 1,
        text: 1,
        advAssetId: 1,
        title: 1,
      },
    },
  ])

  return results
}

export const handler = apiWrapper(responder)
