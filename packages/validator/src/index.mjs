const RULES = ['./rules/skillx-match-skill.mjs']

async function main() {
  console.log('>>> Validating data')
  const errs = []
  for (let i = 0; i < RULES.length; i++) {
    const ruleName = RULES[i]
    console.log(`>>> Validation [${i + 1}/${RULES.length}]: ${ruleName}`)
    let result
    try {
      result = await (await import(ruleName)).default()
    } catch (e) {
      console.error(`>>> Exception while working on ${ruleName}:`)
      console.error(String(e))
      result = false
    }
    if (!result) {
      console.log(`>>> Validation failed on: ${ruleName}`)
      errs.push(ruleName)
    }
  }
  if (errs.length === 0) {
    console.log('>>> ✅ All validations passed!')
  } else {
    console.log('>>> ❎ Some validations failed:')
    console.log(errs.join('\n'))
    process.exit(1)
  }
}

main()
