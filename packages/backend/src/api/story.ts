import { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'

const responder: APIMapping['Story'] = async ({ id }) => {
  const db = await dbGet('Story')
  const ret = db.filter((x) => x.id === id)?.[0]
  if (!ret) {
    throw Error(`Story not found: ${id}`)
  }
  const { name, sectionName, description } = ret
  return { name, id, sectionName, description }
}

export default responder
