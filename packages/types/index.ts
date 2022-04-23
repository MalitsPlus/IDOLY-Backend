import type {
  Card,
  CardLevel,
  CardParameter,
  CardRarity,
  Character,
  Music,
  MusicChartPattern,
  Skill,
} from './ProtoMaster'

import type { MusicChart } from './types'
import type { OnlyOutput, InputAndOutput, MultiString } from './helpers'

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
  MusicChart: InputAndOutput<
    {
      chartId: string
    },
    MusicChart
  >
  MusicChartList: OnlyOutput<
    {
      musicId: string
      title: string
      chartId: string[]
    }[]
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
  Music: Music[]
  MusicChartPattern: MusicChartPattern[]
  Skill: Skill[]
}

export type AcceptableKey = keyof ResourceMapping
