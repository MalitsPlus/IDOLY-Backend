import type { APIMapping } from './apiMapping'
import type { ResourceMapping } from './resourceMapping'

export type { ResourceMapping } from './resourceMapping'
export type { APIMapping } from './apiMapping'

export type AcceptableDbKey = keyof ResourceMapping
export type AcceptableApiPath = keyof APIMapping
