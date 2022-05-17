import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { request } from 'undici'

const require = createRequire(import.meta.url)
const peggy = require('peggy')

const PEGJS_FILE_NAME = 'skill.pegjs'
const Here = dirname(fileURLToPath(import.meta.url))
const PegjsFilePath = join(Here, PEGJS_FILE_NAME)

const skillFixMap = {
  '-up': '_up',
}

async function main() {
  if (process.argv.length < 5) {
    console.log(
      'Usage: node ./index.js API_ENDPOINT SKILL_DB_NAME READONLY_KEY'
    )
    return
  }

  const pegjsCode = readFileSync(PegjsFilePath, 'utf-8')
  const parser = peggy.generate(pegjsCode)

  // 1. Fetch the latest skills
  // const filename = process.argv[2]
  // const skillsJson = JSON.parse(readFileSync(filename, 'utf-8')) // remove BOM
  const apiEndpoint = process.argv[2]
  const skillDbName = process.argv[3]
  const readonlyKey = process.argv[4]
  const skillsJson = await request(
    `${apiEndpoint}/manage/raw?key=${skillDbName}`,
    {
      headers: {
        authorization: `Bearer ${readonlyKey}`,
      },
    }
  )
    .then((x) => x.body)
    .then((x) => x.json())
  writeFileSync(join(Here, 'Skill.json'), JSON.stringify(skillsJson))

  // 2. Parse the skills
  const ret = {}
  for (const i of skillsJson) {
    for (const lvl of i.levels) {
      const skillItems = []
      for (const skd of lvl.skillDetails) {
        let effId = skd.efficacyId
        for (const [k, v] of Object.entries(skillFixMap)) {
          effId = effId.replaceAll(k, v)
        }
        try {
          ret[skd.efficacyId] = parser.parse(effId)
        } catch (e) {
          console.error(e)
          console.error('---------------------------------')
          console.error(`Failed to parse: ${effId}`)
          process.exit(1)
        }
      }
    }
  }
  writeFileSync(join(Here, 'Skillx.json'), JSON.stringify(ret))
  console.log('Skillx.json is generated.')
}

main()
