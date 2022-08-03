export type MongoQueryParameterType = 'filter' | 'projection' | 'sort'

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : never
