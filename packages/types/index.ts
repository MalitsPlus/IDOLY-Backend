import type { Card, CardLevel, Character } from './ProtoMaster'

type OnlyOutput<O> = () => Promise<O>
type InputAndOutput<I, O> = (i: I) => Promise<O>

export type APIMapping = {
  CardLevel: OnlyOutput<CardLevel[]>
  Card: OnlyOutput<Card[]>
  Character: InputAndOutput<
    {
      characterGroupId?: string
    },
    Character[]
  >
}

export type ResourceMapping = {
  CardLevel: CardLevel[]
  Card: Card[]
  Character: Character[]
}

export type AcceptableKey = keyof ResourceMapping
