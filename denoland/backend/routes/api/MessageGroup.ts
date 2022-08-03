import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'

const responder: APIMapping['MessageGroup'] = () => dbGet('MessageGroup')

export const handler = apiWrapper(responder)
