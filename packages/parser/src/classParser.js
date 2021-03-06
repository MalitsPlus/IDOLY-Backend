#!/usr/bin/env node
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const peggy = require('peggy')

const PEGJS_FILE_NAME = 'class.pegjs'
const Here = dirname(fileURLToPath(import.meta.url))
const PegjsFilePath = join(Here, PEGJS_FILE_NAME)

// https://developers.google.com/protocol-buffers/docs/proto3#other
// https://developers.google.com/protocol-buffers/docs/proto3#json
const CSharpTSTypeMapping = {
  long: 'string', // as PB int64/sint64/sfixed64
  int: 'number', // as PB int32/sint32/sfixed32
  double: 'number', // as PB double
  float: 'number', // as PB float
  string: 'string', // as PB string
  bool: 'boolean', // as PB bool
}

function parseType(typ) {
  if (typeof typ === 'string') {
    const tsTyp = CSharpTSTypeMapping[typ]
    if (!tsTyp && typ[0].toLowerCase() === typ[0]) {
      throw Error(`Unrecognized type: ${typ}`)
    }
    return tsTyp ?? typ
  }
  switch (typ.name) {
    case 'List': {
      return parseType(typ.parameter) + '[]'
    }
    default: {
      throw Error(`Unrecognized template type: ${typ.name}`)
    }
  }
}

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
      `export type ${x.name} = {${x.fields
        .map((y) => `// ProtoMember(${y.id})\n${y.name}: ${parseType(y.type)},`)
        .join('\n')}}`
  )
  console.log(`// Generated from ${filename}\n` + tstypeText.join('\n'))
}

main()
