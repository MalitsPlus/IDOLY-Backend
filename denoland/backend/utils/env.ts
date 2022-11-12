if (Deno.env.get('DENO_ENV') === 'development') {
  await import('https://deno.land/x/dotenv@v3.2.0/load.ts')
}

export const MONGODB_API_APPID = Deno.env.get('MONGODB_API_APPID') ?? ''
export const MONGODB_DATABASE = Deno.env.get('MONGODB_DATABASE') ?? ''
export const MONGODB_API_KEY = Deno.env.get('MONGODB_API_KEY') ?? ''
export const MONGODB_DATA_SOURCE = Deno.env.get('MONGODB_DATA_SOURCE') ?? ''
export const ADMIN_TOKEN = Deno.env.get('ADMIN_TOKEN') ?? ''
export const READONLY_TOKEN = Deno.env.get('READONLY_TOKEN') ?? ''
export const SLACK_REPORT_URL = Deno.env.get('SLACK_REPORT_URL') ?? ''
export const UMAMI_DOMAIN = Deno.env.get('UMAMI_DOMAIN') ?? ''
export const UMAMI_WEBSITE_ID = Deno.env.get('UMAMI_WEBSITE_ID') ?? ''

/**
 * Setting env `DENO_ENV=development` will bypass all authentications.
 */
export const isDevelopEnv = Deno.env.get('DENO_ENV') === 'development'

const env = {
  MONGODB_API_APPID,
  MONGODB_DATABASE,
  MONGODB_API_KEY,
  MONGODB_DATA_SOURCE,
  ADMIN_TOKEN,
  READONLY_TOKEN,
  SLACK_REPORT_URL,
  UMAMI_DOMAIN,
  UMAMI_WEBSITE_ID,
}

export default env
