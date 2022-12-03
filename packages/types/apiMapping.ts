import type {
  Card,
  CardLevel,
  CardParameter,
  CardRarity,
  Character,
  Condition,
  ConditionTerm,
  EventStory,
  EventStoryEpisode,
  Gacha,
  Message,
  MessageGroup,
  Music,
  Skill,
  Story,
} from './ProtoMaster'
import type { MusicChart } from './types'
import type { OnlyOutput, InputAndOutput, MultiString } from './helpers'
import { TheRootMapping as SkillxData } from './Skillx'
import { NoticeInfo } from './ProtoApi'

export type APIMapping = {
  Card: InputAndOutput<
    { id?: string },
    Pick<
      Card,
      | 'id'
      | 'assetId'
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
      | 'stories'
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
  'Card/List': InputAndOutput<
    {
      rarity: string
      level: string
    },
    (Pick<
      Card,
      | 'id'
      | 'assetId'
      | 'name'
      | 'characterId'
      | 'type'
      | 'initialRarity'
      | 'releaseDate'
    > & {
      vocalPt: number
      dancePt: number
      visualPt: number
      staminaPt: number
    })[]
  >
  CardLevel: OnlyOutput<CardLevel[]>
  CardParameter: InputAndOutput<
    {
      level?: string
      id?: string
    },
    CardParameter[]
  >
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
    | (Pick<EventStory, 'id' | 'name' | 'description' | 'order' | 'assetId'> & {
        episodes: Pick<EventStoryEpisode, 'episode' | 'storyId'>[]
      })
    | null
  >
  'EventStory/List': OnlyOutput<
    Pick<EventStory, 'id' | 'name' | 'description' | 'order'>[]
  >
  Gacha: OnlyOutput<
    (Pick<Gacha, 'name' | 'gachaType'> & {
      nowAfter: number
      nowBefore: number
    })[]
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
  Music: InputAndOutput<
    {
      id: string
    },
    Omit<Music, 'volumePermyriads' | 'vocalVolumePermyriads'>
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
  'Skill/X': InputAndOutput<{ ids?: MultiString }, SkillxData>
  Stamps: OnlyOutput<string[]>
  Story: InputAndOutput<
    { id: string },
    Pick<Story, 'name' | 'id' | 'sectionName' | 'description' | 'advAssetIds'>
  >
  Version: OnlyOutput<{
    version: string
  }>
}
