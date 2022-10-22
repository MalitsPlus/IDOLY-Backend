import type { APIMapping } from 'hoshimi-types'
import { dbGetPlus } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import parseChart from '@utils/parseChart.ts'
import createErrStatus from '@utils/createErrStatus.ts'

const responder: APIMapping['MusicChart'] = async ({ chartId }) => {
  if (!chartId) {
    return createErrStatus('chartId not found')
  }
  const ch = await dbGetPlus('MusicChartPattern', {
    filter: {
      id: chartId,
    },
  })

  return parseChart(chartId, ch)
}

export const handler = apiWrapper(responder)
