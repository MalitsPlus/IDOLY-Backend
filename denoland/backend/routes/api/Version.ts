import type { APIMapping } from 'hoshimi-types'
import apiWrapper from '@utils/apiWrapper.ts'
import kv from '@utils/kv.ts'
import { UpdateTimeKey } from '@utils/const.ts'

const responder: APIMapping['Version'] = async () => {
  const updateDate = await kv.getValue(UpdateTimeKey)
  const version = updateDate ?? 'latest'
  return { version }
}

export const handler = apiWrapper(responder)
