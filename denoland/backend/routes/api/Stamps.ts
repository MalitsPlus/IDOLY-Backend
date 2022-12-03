import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'

const responder: APIMapping['Stamps'] = async () => {
  const assets = await dbGet('Octo').then((x) => x.assetBundleList)

  return assets
    .filter((x) => x.name.startsWith('img_message_stamp_'))
    .sort((a, b) => (a?.id ?? 0) - (b?.id ?? 0))
    .map((x) => x.name.replace(/^img_message_stamp_/, ''))
}

export const handler = apiWrapper(responder)
