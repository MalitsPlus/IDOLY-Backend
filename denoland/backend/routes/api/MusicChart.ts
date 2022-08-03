import type { APIMapping } from 'hoshimi-types'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import parseChart from '@utils/parseChart.ts'

const responder: APIMapping['MusicChart'] = async ({ chartId }) => {
  if (!chartId) {
    throw Error('chartId not found')
  }
  const ch = await dbGet('MusicChartPattern')

  return parseChart(chartId, ch)
}

export const handler = apiWrapper(responder)
