import type { APIMapping } from '@outloudvi/hoshimi-types'
import { MusicChartType } from '@outloudvi/hoshimi-types/ProtoEnum'
import { dbGet } from '../db'
import { dedup, firstMatches, UnwrapPromise } from '../utils'

const list: APIMapping['MusicChartList'] = async () => {
  const ch = await dbGet('MusicChartPattern')
  const mu = await dbGet('Music')
  const chartIds = dedup(ch.map((x) => x.id))

  const ret: UnwrapPromise<ReturnType<typeof list>> = []

  for (const i of chartIds) {
    const musicId = i.replace(/^chart-/, 'music-').replace(/-[0-9]+$/, '')
    const maybeChartListItem = firstMatches(ret, 'musicId', musicId)
    if (maybeChartListItem) {
      maybeChartListItem.chartId.push(i)
      continue
    }
    const maybeMusic = firstMatches(mu, 'id', musicId)
    if (maybeMusic === null) continue
    ret.push({
      musicId: maybeMusic.id,
      title: maybeMusic.name,
      chartId: [i],
    })
  }

  return ret
}

const pattern: APIMapping['MusicChart'] = async ({ chartId }) => {
  if (!chartId) {
    throw Error('chartId not found')
  }
  const ch = await dbGet('MusicChartPattern')
  const chartFlow = ch.filter(
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

export default {
  list,
  pattern,
}
