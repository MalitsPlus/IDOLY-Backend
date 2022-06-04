import type {
  Card,
  CardLevel,
  CardParameter,
  CardRarity,
  Character,
  EventStory,
  EventStoryEpisode,
  Message,
  MessageGroup,
  Skill,
  Story,
} from './ProtoMaster'
import type { MusicChart } from './types'
import type { OnlyOutput, InputAndOutput, MultiString } from './helpers'
import { TheRootMapping as SkillxData } from './Skillx'
import { NoticeInfo } from './ProtoApi'

export type APIMapping = {
  Card: OnlyOutput<
    Pick<
      Card,
      | 'id'
      | 'name'
      | 'description'
      | 'characterId'
      | 'type'
      | 'initialRarity'
      | 'cardParameterId'
      | 'vocalRatioPermil'
      | 'danceRatioPermil'
      | 'visualRatioPermil'
      | 'staminaRatioPermil'
      | 'skillId1'
      | 'skillId2'
      | 'skillId3'
      | 'releaseDate'
    >[]
  >
  /**
   * CCID (Character-Card ID) is a unique ID for a card in the scope of a character.
   * It shall be as short as possible.
   */
  'Card/Id': OnlyOutput<
    Record<
      string,
      {
        ccid: number
        cardId: string
        nameJa: string
      }[]
    >
  >
  CardLevel: OnlyOutput<CardLevel[]>
  CardParameter: OnlyOutput<CardParameter[]>
  CardRarity: OnlyOutput<CardRarity[]>
  Character: InputAndOutput<
    {
      ids: MultiString
    },
    Pick<
      Character,
      | 'id'
      | 'characterGroupId'
      | 'order'
      | 'name'
      | 'enName'
      | 'cv'
      | 'age'
      | 'birthday'
      | 'height'
      | 'weight'
      | 'zodiacSign'
      | 'hometown'
      | 'favorite'
      | 'unfavorite'
      | 'profile'
      | 'isNpc'
      | 'altCharacters'
      | 'color'
      | 'isLeftHanded'
      | 'shortProfile'
      | 'threeSize'
      | 'catchphrase'
      | 'idiom'
    >[]
  >
  'Character/List': OnlyOutput<
    Pick<
      Character,
      'id' | 'order' | 'characterGroupId' | 'name' | 'enName' | 'color'
    >[]
  >
  EventStory: InputAndOutput<
    { id: string },
    | (Pick<EventStory, 'id' | 'name' | 'description' | 'order'> & {
        episodes: Pick<EventStoryEpisode, 'episode' | 'storyId'>[]
      })
    | null
  >
  'EventStory/List': OnlyOutput<
    Pick<EventStory, 'id' | 'name' | 'description' | 'order'>[]
  >
  Message: InputAndOutput<
    { id: string },
    Omit<Message, 'unlockConditionId' | 'instantType' | 'rarityType'> | null
  >
  'Message/Group': InputAndOutput<
    { messageGroupId: string },
    { id: string; name: string }[]
  >
  MessageGroup: OnlyOutput<MessageGroup[]>
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
      assetId: string
      charts: {
        id: string
        desc: string
      }[]
    }[]
  >
  Notice: InputAndOutput<
    {
      limit?: string
      offset?: string
      type: 'notices' | 'malfunctionNotices' | 'prNotices'
    },
    Pick<
      NoticeInfo,
      'id' | 'title' | 'linkDetail' | 'startTime' | 'listTitle'
    >[]
  >
  Skill: InputAndOutput<
    {
      ids: MultiString
    },
    Skill[]
  >
  'Skill/All': OnlyOutput<Skill[]>
  'Skill/EffectTypes': OnlyOutput<string[]>
  'Skill/X': OnlyOutput<SkillxData>
  Story: InputAndOutput<
    { id: string },
    Pick<Story, 'name' | 'id' | 'sectionName' | 'description'>
  >
  Version: OnlyOutput<{
    version: string
  }>
}
