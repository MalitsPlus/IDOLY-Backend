import { request } from 'undici'
import { env } from 'node:process'

const REPO_NAME = 'outloudvi/info-pride'
const BRANCH_NAME = 'master'
const API_ENDPOINT = 'https://idoly-backend.outv.im'
const READONLY_KEY = env['READONLY_KEY']
const PREFIX = env['PREFIX']

export function fromFrontend(filePath) {
  return request(
    `https://raw.githubusercontent.com/${REPO_NAME}/${BRANCH_NAME}/${filePath}`
  )
    .then((x) => x.body)
    .then((x) => x.text())
}

export function fromBackend(dbKey) {
  return request(String(new URL(`/api/${dbKey}`, API_ENDPOINT)))
    .then((x) => x.body)
    .then((x) => x.text())
}

export function fromBackendRaw(dbKey) {
  return request(
    String(new URL(`/manage/raw?key=${PREFIX}${dbKey}`, API_ENDPOINT)),
    {
      headers: {
        authorization: `Bearer ${READONLY_KEY}`,
      },
    }
  )
    .then((x) => x.body)
    .then((x) => x.text())
}
