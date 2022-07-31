import 'https://deno.land/x/dotenv@v3.2.0/load.ts'

export const DETA_PROJECT_ID = Deno.env.get('DETA_PROJECT_ID') ?? ''
export const DETA_PROJECT_KEY = Deno.env.get('DETA_PROJECT_KEY') ?? ''
export const DETA_BASE_NAME = Deno.env.get('DETA_BASE_NAME') ?? ''
export const ADMIN_TOKEN = Deno.env.get('ADMIN_TOKEN') ?? ''
export const READONLY_TOKEN = Deno.env.get('READONLY_TOKEN') ?? ''
export const DB_PREFIX = Deno.env.get('DB_PREFIX') ?? ''
export const SLACK_REPORT_URL = Deno.env.get('SLACK_REPORT_URL') ?? ''

/**
 * Setting env `DENO_ENV=development` will bypass all authentications.
 */
export const isDevelopEnv = Deno.env.get('DENO_ENV') === 'development'

const env = {
  DETA_PROJECT_ID,
  DETA_PROJECT_KEY,
  DETA_BASE_NAME,
  ADMIN_TOKEN,
  DB_PREFIX,
  READONLY_TOKEN,
  SLACK_REPORT_URL,
}

export default env
