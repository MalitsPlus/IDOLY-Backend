import type { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'

const responder: APIMapping['CardParameter'] = () => dbGet('CardParameter')

export default responder
