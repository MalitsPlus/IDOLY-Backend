import { NoticeInfo } from './ProtoApi'
import type {
  ActivityAbility,
  Card,
  CardLevel,
  CardParameter,
  CardRarity,
  Character,
  Condition,
  Emblem,
  EventStory,
  Gacha,
  LiveAbility,
  Message,
  MessageGroup,
  Music,
  MusicChartPattern,
  Skill,
  Story,
  StoryPart,
} from './ProtoMaster'

import { TheRootMapping as SkillxData } from './Skillx'
import { OctoData } from './octoData'
import { CommuX, MessageX } from './types'

export type ResourceMapping = {
  ActivityAbility: ActivityAbility[]
  Card: Card[]
  CardLevel: CardLevel[]
  CardParameter: CardParameter[]
  CardRarity: CardRarity[]
  Character: Character[]
  CommuX: CommuX[]
  Condition: Condition[]
  Emblem: Emblem[]
  EventStory: EventStory[]
  Gacha: Gacha[]
  LiveAbility: LiveAbility[]
  Message: Message[]
  MessageX: MessageX[]
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
  StoryPart: StoryPart[]
}
