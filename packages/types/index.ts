import type {
  Card,
  CardLevel,
  CardParameter,
  CardRarity,
  Character,
  Skill,
} from './ProtoMaster'

type OnlyOutput<O> = () => Promise<O>
type InputAndOutput<I, O> = (i: I) => Promise<O>
export type MultiString = string[] | string

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
  Skill: InputAndOutput<
    {
      ids: MultiString
    },
    Skill[]
  >
}

export type ResourceMapping = {
  Card: Card[]
  CardLevel: CardLevel[]
  CardParameter: CardParameter[]
  CardRarity: CardRarity[]
  Character: Character[]
  Skill: Skill[]
}

export type AcceptableKey = keyof ResourceMapping
