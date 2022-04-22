import { APIMapping } from '@hoshimi/types'
import { dbGet } from '../db'

const responder: APIMapping['Card'] = () => dbGet('Card')

export default responder
