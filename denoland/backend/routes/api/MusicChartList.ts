import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import parseChart from '@utils/parseChart.ts'
import { UnwrapPromise } from '@utils/types.ts'
import dedup from '@utils/dedup.ts'
import firstMatches from '@utils/firstMatches.ts'

const responder: APIMapping['MusicChartList'] = async () => {
  const ch = await dbGet('MusicChartPattern')
  const mu = await dbGet('Music')
  const chartIds = dedup(ch.map((x) => x.id))

  const ret: UnwrapPromise<ReturnType<typeof responder>> = []

  for (const i of chartIds) {
    const musicId = i.replace(/^chart-/, 'music-').replace(/-[0-9]+$/, '')
    const maybeChartListItem = firstMatches(ret, 'musicId', musicId)
    if (maybeChartListItem) {
      maybeChartListItem.charts.push({
        id: i,
        desc: parseChart(i, ch).desc,
      })
      continue
    }
    const maybeMusic = firstMatches(mu, 'id', musicId)
    if (maybeMusic === null) continue
    ret.push({
      musicId: maybeMusic.id,
      title: maybeMusic.name,
      assetId: maybeMusic.assetId,
      charts: [
        {
          id: i,
          desc: parseChart(i, ch).desc,
        },
      ],
    })
  }

  return ret
}

export const handler = apiWrapper(responder)
