import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import pick from 'lodash/pick'

const responder: APIMapping['Story'] = async ({ id }) => {
  const dbStory = await dbGet('Story')
  const dbStoryPart = await dbGet('StoryPart')
  const episode = dbStoryPart
    .map((x) => x.chapters)
    .reduce((a, b) => [...a, ...b])
    .map((x) => x.episodes)
    .reduce((a, b) => [...a, ...b])
    .filter((r) => r.storyId === id && r.isReleased)?.[0]
  const ret = dbStory.filter((x) => x.id === id)?.[0]
  if (!ret) {
    throw Error(`Story not found: ${id}`)
  }
  return {
    ...pick(ret, ['id', 'name', 'sectionName', 'description']),
    advAssetId: episode?.assetId ?? ret.advAssetId,
  }
}

export const handler = apiWrapper(responder)
