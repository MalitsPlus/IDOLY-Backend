// These routes should be ABSOLUTE routes.
export const Routes = {
  Manage: '/manage',
  Api: '/api',
} as const

export const CorsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST',
} as const

export const XXHashSeed = 0xe2d09373
