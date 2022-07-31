import env from './env.ts'

export default function checkEnv() {
  console.info('Checking environment variables...')
  for (const [key, val] of Object.entries(env)) {
    if (val === '') {
      throw Error(`Environment variable "${key} not found!"`)
    }
  }
  console.info(`Cool! The Deta database ID is ${env.DETA_PROJECT_ID}`)
}
