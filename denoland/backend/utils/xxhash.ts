import xxh from 'xxhashjs'

import { XXHashSeed } from './const.ts'

export default function xxhash(data: string): string {
  return xxh.h32(data, XXHashSeed).toString(36)
}
