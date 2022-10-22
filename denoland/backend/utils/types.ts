export type MongoQueryParameterType = 'filter' | 'projection' | 'sort'

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : never

export const FieldStatus = Symbol('Status')

export type ErrorWithStatus = {
  [FieldStatus]: number
  message: string
  ok: false
}
