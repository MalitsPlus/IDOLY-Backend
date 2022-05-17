#!/usr/bin/env node
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const peggy = require('peggy')

const PEGJS_FILE_NAME = 'enum.pegjs'
const Here = dirname(fileURLToPath(import.meta.url))
const PegjsFilePath = join(Here, PEGJS_FILE_NAME)

function main() {
  if (process.argv.length < 3) {
    console.log('Usage: node ./index.js ProtoEnum.cs')
    return
  }

  const filename = process.argv[2]
  const protoEnumCode = readFileSync(filename, 'utf-8').replace(/^\uFEFF/, '') // remove BOM
  const pegjsCode = readFileSync(PegjsFilePath, 'utf-8')
  const parser = peggy.generate(pegjsCode)
  const parseResult = parser.parse(protoEnumCode, {
    startRule: 'File',
  })
  const tstypeText = parseResult.map(
    (x) =>
      `export enum ${x.name} {${x.values
        .map((y) => `${y.name} = ${y.id},`)
        .join('\n')}}`
  )
  console.log(`// Generated from ${filename}\n` + tstypeText.join('\n'))
}

main()
