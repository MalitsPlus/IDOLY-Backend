import type { APIMapping } from '@hoshimi/types'
import { dbGet } from '../db'

const responder: APIMapping['CardLevel'] = () => dbGet('CardLevel')

export default responder
