import { APIMapping } from '@outloudvi/hoshimi-types'
import { UpdateTimeKey } from '../db'

const v: APIMapping['Version'] = async () => {
  const updateDate = await KV.get(UpdateTimeKey)
  const version = updateDate ?? 'latest'
  return { version }
}

export default v
