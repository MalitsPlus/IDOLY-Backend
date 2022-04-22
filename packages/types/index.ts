import type {
  Card,
  CardLevel,
  CardParameter,
  CardRarity,
  Character,
} from './ProtoMaster'

type OnlyOutput<O> = () => Promise<O>
type InputAndOutput<I, O> = (i: I) => Promise<O>

export type APIMapping = {
  Card: OnlyOutput<Card[]>
  CardLevel: OnlyOutput<CardLevel[]>
  CardParameter: OnlyOutput<CardParameter[]>
  CardRarity: OnlyOutput<CardRarity[]>
  Character: InputAndOutput<
    {
      characterGroupId?: string
    },
    Character[]
  >
}

export type ResourceMapping = {
  Card: Card[]
  CardLevel: CardLevel[]
  CardParameter: CardParameter[]
  CardRarity: CardRarity[]
  Character: Character[]
}

export type AcceptableKey = keyof ResourceMapping
