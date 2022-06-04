import { APIMapping } from '@outloudvi/hoshimi-types'
import { dbGet } from '../db'
import pick from 'lodash/pick'

const list: APIMapping['EventStory/List'] = async () => {
  const ch = await dbGet('EventStory')
  return ch.map((x) => pick(x, ['id', 'order', 'name', 'description']))
}

const select: APIMapping['EventStory'] = async ({ id }) => {
  const ev = await dbGet('EventStory')
  return (
    ev
      .filter((x) => id === x.id)
      .map((x) => ({
        ...pick(x, ['id', 'name', 'description', 'order', 'assetId']),
        episodes: x.episodes.map((y) => pick(y, ['episode', 'storyId'])),
      }))?.[0] ?? null
  )
}

export default { list, select }
