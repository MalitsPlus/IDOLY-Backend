import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'

const responder: APIMapping['CardParameter'] = () => dbGet('CardParameter')

export const handler = apiWrapper(responder)
