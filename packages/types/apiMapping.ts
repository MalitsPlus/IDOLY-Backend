import type {
  Card,
  CardLevel,
  CardParameter,
  CardRarity,
  Character,
  Skill,
  Story,
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
      charts: {
        id: string
        desc: string
      }[]
    }[]
  >
  Skill: InputAndOutput<
    {
      ids: MultiString
    },
    Skill[]
  >
  Story: InputAndOutput<
    { id: string },
    Pick<Story, 'name' | 'id' | 'sectionName' | 'description'>
  >
}
