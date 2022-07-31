import { DB_PREFIX } from './env.ts'

export const CorsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST',
} as const

export const UpdateTimeKey = DB_PREFIX + '_' + 'UPDATED'
