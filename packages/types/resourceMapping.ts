import { NoticeInfo } from './ProtoApi'
import type {
  Card,
  CardLevel,
  CardParameter,
  CardRarity,
  Character,
  EventStory,
  Message,
  MessageGroup,
  Music,
  MusicChartPattern,
  Skill,
  Story,
} from './ProtoMaster'

import { TheRootMapping as SkillxData } from './Skillx'
import { OctoData } from './octoData'

export type ResourceMapping = {
  Card: Card[]
  CardLevel: CardLevel[]
  CardParameter: CardParameter[]
  CardRarity: CardRarity[]
  Character: Character[]
  EventStory: EventStory[]
  Message: Message[]
  MessageGroup: MessageGroup[]
  Music: Music[]
  MusicChartPattern: MusicChartPattern[]
  Notice: {
    notices: NoticeInfo[]
    malfunctionNotices: NoticeInfo[]
    prNotices: NoticeInfo[]
  }
  Octo: OctoData
  Skill: Skill[]
  Skillx: SkillxData
  Story: Story[]
}
