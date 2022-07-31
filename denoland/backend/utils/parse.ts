export function parseNumber(s?: string): number | null {
  return Number.isNaN(Number(s)) ? null : Number(s)
}

export function parseIntNumber(s?: string): number | null {
  const n = parseNumber(s)
  if (n === null) return null
  return Number(n.toFixed(0))
}
