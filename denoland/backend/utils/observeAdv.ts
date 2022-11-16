import { Octokit } from 'octokit'
import { GHREPO_ADV, GHTOKEN_ADV } from './env.ts'

const octokit = new Octokit({
  auth: GHTOKEN_ADV,
})

export default async function observeAdv(): Promise<void> {
  return octokit.request(
    `POST /repos/${GHREPO_ADV}/actions/workflows/observe_full.yml/dispatches`,
    {
      ref: 'master',
    }
  )
}
