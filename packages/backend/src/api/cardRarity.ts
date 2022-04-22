import type { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'

const responder: APIMapping['CardRarity'] = () => dbGet('CardRarity')

export default responder
