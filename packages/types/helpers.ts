export type OnlyOutput<O> = () => Promise<O>
export type InputAndOutput<I, O> = (i: I) => Promise<O>
export type MultiString = string[] | string

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : never
