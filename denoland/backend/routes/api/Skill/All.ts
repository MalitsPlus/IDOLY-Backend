import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'

const responder: APIMapping['Skill/All'] = () => dbGet('Skill')

export const handler = apiWrapper(responder)
