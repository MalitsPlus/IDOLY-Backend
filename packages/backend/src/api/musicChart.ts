import type { APIMapping } from '@outloudvi/hoshimi-types'
import { MusicChartType } from '@outloudvi/hoshimi-types/ProtoEnum'
import { MusicChartPattern } from '@outloudvi/hoshimi-types/ProtoMaster'
import { MusicChart } from '@outloudvi/hoshimi-types/types'
import { dbGet } from '../db'
import { dedup, firstMatches, UnwrapPromise } from '../utils'

function parseChart(
  chartId: string,
  chartData: MusicChartPattern[],
): MusicChart {
  const chartFlow = chartData.filter(
    (x) => x.id === chartId && x.type !== MusicChartType.Unknown,
  )

  const ret: UnwrapPromise<ReturnType<typeof pattern>> = {
    id: chartId,
    desc: '',
    beats: chartFlow.length,
    chart: { 1: [], 2: [], 3: [], 4: [], 5: [] },
  }
  let currBeat = 0
  let spCount = 0
  let aCount = 0
  for (const i of chartFlow.sort((a, b) => a.number - b.number)) {
    currBeat++
    switch (i.type) {
      case MusicChartType.ActiveSkill: {
        ret.chart[i.position as 1 | 2 | 3 | 4 | 5].push(currBeat)
        aCount++
        break
      }
      case MusicChartType.SpecialSkill: {
        ret.chart[i.position as 1 | 2 | 3 | 4 | 5].push(currBeat * -1)
        spCount++
        break
      }
    }
  }
  ret.desc = `${spCount}SP${aCount}A`
  return ret
}

const list: APIMapping['MusicChartList'] = async () => {
  const ch = await dbGet('MusicChartPattern')
  const mu = await dbGet('Music')
  const chartIds = dedup(ch.map((x) => x.id))

  const ret: UnwrapPromise<ReturnType<typeof list>> = []

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

const pattern: APIMapping['MusicChart'] = async ({ chartId }) => {
  if (!chartId) {
    throw Error('chartId not found')
  }
  const ch = await dbGet('MusicChartPattern')

  return parseChart(chartId, ch)
}

export default {
  list,
  pattern,
}
