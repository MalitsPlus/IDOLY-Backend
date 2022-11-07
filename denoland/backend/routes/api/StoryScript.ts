import type { APIMapping } from 'hoshimi-types'
import { read } from '@hoshimei/adv'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import createErrStatus from '../../utils/createErrStatus.ts'
import { ASSETS_DOMAIN } from '../../utils/env.ts'
import { Line } from 'https://esm.sh/v96/@hoshimei/adv@0.3.0/types.d.ts'

const responder: APIMapping['StoryScript'] = async ({ id }) => {
  const dbStory = await dbGet('Story')
  const dbOcto = await dbGet('Octo')
  if (!id) {
    return createErrStatus('No id found')
  }
  const story = dbStory.find((x) => x.id === id)
  if (!story) {
    return createErrStatus(`Story not found: ${id}`, 404)
  }
  const scripts = story.advAssetIds
  const scriptNames = scripts
    .map((id) => dbOcto.resourceList.find((x) => x.name === `adv_${id}.txt`))
    // Ignore those whose script cannot be found
    .filter((x) => x !== undefined)
    .map((x) => x?.name)
  const scriptBodies = await Promise.all(
    scriptNames.map((x) =>
      fetch(`https://${ASSETS_DOMAIN}/api/adv/${x}`)
        .then((x) => {
          if (x.status !== 200) {
            if (x.headers.get('Content-Type')?.includes('application/json')) {
              return x.json().then((x) => {
                throw createErrStatus(
                  `Asset system error: $[{x.code}] ${x.message}`,
                  500
                )
              })
            }
            return x.text().then((x) => {
              throw createErrStatus(`Asset system error: ${x}`, 500)
            })
          }
          return x.text()
        })
        .then(read)
        .then((x) => {
          return x.filter((y: Line) => y._t !== 'Unknown')
        })
    )
  )
  return scriptBodies
}

export const handler = apiWrapper(responder)
