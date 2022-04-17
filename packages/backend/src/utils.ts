export function tryJsonParse(s: any): any | null {
  try {
    return JSON.parse(s)
  } catch (_) {
    return null
  }
}
