import { ADMIN_TOKEN, isDevelopEnv } from '@utils/env.ts'

export function isAdmin(req: Request): boolean {
  if (isDevelopEnv) return true
  const authLine = req.headers.get('Authorization')
  if (!authLine) return false
  const splits = authLine.split(' ')
  return splits[0].toLowerCase() === 'bearer' && splits[1] === ADMIN_TOKEN
}
