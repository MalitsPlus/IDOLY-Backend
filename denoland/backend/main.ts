/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />
import * as Sentry from 'sentry'

import checkEnv from '@utils/checkEnv.ts'
import { start } from '$fresh/server.ts'
import manifest from './fresh.gen.ts'
import { SENTRY_DSN, isDevelopEnv } from './utils/env.ts'

checkEnv()
Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: isDevelopEnv ? 1.0 : 0.7,
})
await start(manifest)
