// Generated from ProtoMaster.cs

import type {
  AccessoryCategoryType,
  AccessoryParameterType,
  ActivityAbilityType,
  ActivityFanEventType,
  AreaType,
  AssetDownloadType,
  AttributeType,
  BacksidePanelAttributeType,
  BacksidePanelType,
  CardImageType,
  CardLevelReleaseType,
  CardType,
  CharacterPersonalityType,
  CharacterSdPersonalityType,
  DayOfWeekType,
  EventMissionType,
  FunctionLockType,
  GachaLimitType,
  GachaType,
  HelpDisplayTargetType,
  HelpType,
  HierarchyRewardType,
  HomeActionType,
  HomePlaceType,
  HomePositionType,
  ItemType,
  JoinedGuildType,
  LinkType,
  LiveAbilityType,
  LiveResultType,
  LiveSkipType,
  LiveTipType,
  LoadingDisplayTargetType,
  LoadingType,
  LoginBonusType,
  MessageInstantType,
  MessageRarityType,
  MessageType,
  MissionCategoryType,
  MissionType,
  MoodType,
  MusicChartType,
  ParameterType,
  PhotoAbilityGradeType,
  PhotoAbilityType,
  PhotoShootingActionType,
  PhotoShootingMotionType,
  PlatformType,
  PointType,
  PsylliumColerType,
  ResourceType,
  ResultRankType,
  RewardSortResourceType,
  RewardSortTargetType,
  SalaryDetailType,
  SimpleCharacterPersonalityType,
  SkillCategoryType,
  SkillEfficacyType,
  SkillTargetType,
  SkillTriggerType,
  StageType,
  StatusEffectType,
  StoryPartType,
  TitleBackgroundType,
  TutorialNavigationPositionType,
  TutorialNavigationType,
  TutorialType,
} from './ProtoEnum'

export type PhotoContestSection = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  theme: string
  // ProtoMember(4)
  description: string
  // ProtoMember(5)
  assetId: string
  // ProtoMember(6)
  backgroundColorCode: string
  // ProtoMember(7)
  unlockConditionId: string
}
export type Accessory = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  classification: string
  // ProtoMember(4)
  rarity: number
  // ProtoMember(5)
  name: string
  // ProtoMember(6)
  categoryType: AccessoryCategoryType
  // ProtoMember(7)
  param1Type: AccessoryParameterType
  // ProtoMember(8)
  param1Permil: number
  // ProtoMember(9)
  param1Value: number
  // ProtoMember(10)
  param2Type: AccessoryParameterType
  // ProtoMember(11)
  param2Permil: number
  // ProtoMember(12)
  param2Value: number
  // ProtoMember(13)
  salePrice: number
  // ProtoMember(14)
  limitBreakPhase: number
  // ProtoMember(15)
  limitBreakConsumptionId: string
}
export type ActivityFanEvent = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  type: ActivityFanEventType
  // ProtoMember(4)
  viewConditionId: string
  // ProtoMember(5)
  unlockConditionId: string
  // ProtoMember(6)
  order: number
  // ProtoMember(101)
  levels: ActivityFanEventLevel[]
}
export type ActivityFanEventLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(2)
  name: string
  // ProtoMember(5)
  unlockConditionId: string
}
export type ActivityPerformance = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  costumeTypeIds: string[]
  // ProtoMember(3)
  forceCostumeTypeId: string
  // ProtoMember(4)
  fieldId: string
  // ProtoMember(5)
  existBackground: boolean
  // ProtoMember(6)
  existForeground: boolean
  // ProtoMember(7)
  backgroundTopColorCode: string
  // ProtoMember(8)
  backgroundBottomColorCode: string
  // ProtoMember(9)
  fieldSpineNumber: number
  // ProtoMember(10)
  fieldSpineColorSlotId: string
  // ProtoMember(11)
  fieldSpineColorSlotNumber: number
  // ProtoMember(12)
  existProp: boolean
  // ProtoMember(13)
  assistantNpcSpineId: string
}
export type ActivityPromotion = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  viewConditionId: string
  // ProtoMember(4)
  unlockConditionId: string
  // ProtoMember(5)
  order: number
  // ProtoMember(101)
  levels: ActivityPromotionLevel[]
}
export type ActivityPromotionLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(3)
  name: string
  // ProtoMember(5)
  unlockConditionId: string
}
export type ActivityRefresh = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  viewConditionId: string
  // ProtoMember(4)
  unlockConditionId: string
  // ProtoMember(5)
  order: number
  // ProtoMember(101)
  levels: ActivityRefreshLevel[]
}
export type ActivityRefreshLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  viewConditionId: string
  // ProtoMember(5)
  unlockConditionId: string
}
export type Area = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  type: AreaType
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  description: string
  // ProtoMember(5)
  order: number
  // ProtoMember(6)
  areaGroupId: string
  // ProtoMember(7)
  viewConditionId: string
  // ProtoMember(8)
  unlockConditionId: string
  // ProtoMember(9)
  dailyLimitCount: number
  // ProtoMember(10)
  dailyTicketItemType: ItemType
  // ProtoMember(11)
  rewardAssetId: string
  // ProtoMember(12)
  assetId: string
  // ProtoMember(13)
  colorCode: string
  // ProtoMember(100)
  questIds: string[]
}
export type AreaGroup = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  order: number
  // ProtoMember(4)
  assetId: string
  // ProtoMember(100)
  areaIds: string[]
}
export type BacksidePanelGoalSetting = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  musicId: string
  // ProtoMember(4)
  musicChartPatternId: string
  // ProtoMember(5)
  backsideQuestSettingId: string
  // ProtoMember(6)
  stageId: string
}
export type BacksideQuestSetting = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  position1AttributeType: AttributeType
  // ProtoMember(3)
  position2AttributeType: AttributeType
  // ProtoMember(4)
  position3AttributeType: AttributeType
  // ProtoMember(5)
  position4AttributeType: AttributeType
  // ProtoMember(6)
  position5AttributeType: AttributeType
  // ProtoMember(7)
  activeSkillWeightPermil: number
  // ProtoMember(8)
  specialSkillWeightPermil: number
  // ProtoMember(9)
  skillStaminaWeightPermil: number
  // ProtoMember(10)
  staminaRecoveryWeightPermil: number
  // ProtoMember(11)
  beatDanceWeightPermil: number
  // ProtoMember(12)
  beatVocalWeightPermil: number
  // ProtoMember(13)
  beatVisualWeightPermil: number
  // ProtoMember(14)
  questPressureId: string
  // ProtoMember(15)
  questCharacterAdvantageId: string
  // ProtoMember(16)
  questAudienceAdvantageId: string
  // ProtoMember(17)
  moodType: MoodType
}
export type BoxGacha = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  boxGachaGroupId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  unlockConditionId: string
  // ProtoMember(5)
  requiredResourceAmount: number
  // ProtoMember(6)
  canReset: boolean
  // ProtoMember(7)
  resetLimitCount: number
}
export type Card = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  description: string
  // ProtoMember(5)
  type: CardType
  // ProtoMember(6)
  characterId: string
  // ProtoMember(7)
  initialRarity: number
  // ProtoMember(8)
  cardParameterId: string
  // ProtoMember(9)
  vocalRatioPermil: number
  // ProtoMember(10)
  danceRatioPermil: number
  // ProtoMember(11)
  visualRatioPermil: number
  // ProtoMember(12)
  staminaRatioPermil: number
  // ProtoMember(13)
  cardLevelReleaseId: string
  // ProtoMember(14)
  skillId1: string
  // ProtoMember(15)
  skillId2: string
  // ProtoMember(16)
  skillId3: string
  // ProtoMember(17)
  liveAbilityId: string
  // ProtoMember(18)
  activityAbilityId: string
  // ProtoMember(19)
  order: number
  // ProtoMember(20)
  releaseDate: string
  // ProtoMember(21)
  rewardCostumeId: string
  // ProtoMember(22)
  imageType1: CardImageType
  // ProtoMember(23)
  displayPositionX1: number
  // ProtoMember(24)
  displayPositionY1: number
  // ProtoMember(25)
  displayScale1: number
  // ProtoMember(26)
  highlightDisplayPositionX1: number
  // ProtoMember(27)
  highlightDisplayPositionY1: number
  // ProtoMember(28)
  highlightDisplayScale1: number
  // ProtoMember(29)
  imageType2: CardImageType
  // ProtoMember(30)
  displayPositionX2: number
  // ProtoMember(31)
  displayPositionY2: number
  // ProtoMember(32)
  displayScale2: number
  // ProtoMember(33)
  highlightDisplayPositionX2: number
  // ProtoMember(34)
  highlightDisplayPositionY2: number
  // ProtoMember(35)
  highlightDisplayScale2: number
  // ProtoMember(36)
  obtainMessage: string
  // ProtoMember(101)
  stories: CardStory[]
  // ProtoMember(102)
  messages: CardMessage[]
  // ProtoMember(103)
  homeTalks: CardHomeTalk[]
}
export type CardDuplicateReward = {
  // ProtoMember(1)
  initialRarity: number
  // ProtoMember(2)
  currentRarity: number
  // ProtoMember(3)
  rewardId: string
}
export type CardHomeTalk = {
  // ProtoMember(1)
  homeTalkId: string
}
export type CardMessage = {
  // ProtoMember(1)
  messageId: string
  // ProtoMember(2)
  telephoneId: string
}
export type CardStory = {
  // ProtoMember(1)
  storyId: string
}
export type CardSupportRelease = {
  // ProtoMember(1)
  count: number
  // ProtoMember(2)
  itemId: string
  // ProtoMember(3)
  itemAmount: number
  // ProtoMember(4)
  stoneAmount: number
}
export type Character = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  characterGroupId: string
  // ProtoMember(4)
  order: number
  // ProtoMember(5)
  name: string
  // ProtoMember(6)
  enName: string
  // ProtoMember(7)
  cv: string
  // ProtoMember(8)
  age: string
  // ProtoMember(9)
  birthday: string
  // ProtoMember(10)
  height: string
  // ProtoMember(11)
  weight: string
  // ProtoMember(12)
  zodiacSign: string
  // ProtoMember(13)
  hometown: string
  // ProtoMember(14)
  favorite: string
  // ProtoMember(15)
  unfavorite: string
  // ProtoMember(16)
  profile: string
  // ProtoMember(17)
  isNpc: boolean
  // ProtoMember(18)
  costumeIds: string[]
  // ProtoMember(19)
  altCharacters: CharacterDuplicate[]
  // ProtoMember(20)
  defaultCostumeId: string
  // ProtoMember(21)
  heightCorrectionPermil: number
  // ProtoMember(22)
  color: string
  // ProtoMember(23)
  activityFanEventWords: ActivityFanEventWord[]
  // ProtoMember(24)
  talkArrivalMotionAssetId: string
  // ProtoMember(25)
  talkArrivalAdditionMotionAssetId: string
  // ProtoMember(26)
  viewConditionId: string
  // ProtoMember(27)
  personalityType: CharacterPersonalityType
  // ProtoMember(28)
  simplePersonalityType: SimpleCharacterPersonalityType
  // ProtoMember(29)
  sdPersonalityType: CharacterSdPersonalityType
  // ProtoMember(30)
  costumeMotionAssetIds: string[]
  // ProtoMember(31)
  costumeAdditionMotionAssetIds: string[]
  // ProtoMember(32)
  costumeVoiceAssetIds: string[]
  // ProtoMember(33)
  isLeftHanded: boolean
  // ProtoMember(34)
  psylliumColerType: PsylliumColerType
  // ProtoMember(35)
  shortProfile: string
  // ProtoMember(36)
  threeSize: string
  // ProtoMember(37)
  catchphrase: string
  // ProtoMember(38)
  firstName: string
  // ProtoMember(39)
  idiom: string
  // ProtoMember(40)
  isMemories: boolean
  // ProtoMember(41)
  defaultLiveCostumeId: string
}
export type CharacterCostumeGroup = {
  // ProtoMember(1)
  groupId: string
  // ProtoMember(2)
  costumeId: string
}
export type CharacterDuplicate = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  priority: number
}
export type CharacterGroup = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  order: number
  // ProtoMember(4)
  name: string
  // ProtoMember(5)
  viewConditionId: string
  // ProtoMember(6)
  color: string
  // ProtoMember(7)
  mappings: CharacterGroupMapping[]
  // ProtoMember(8)
  isMemories: boolean
}
export type CharacterGroupMapping = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  description: string
  // ProtoMember(3)
  assetId: string
  // ProtoMember(4)
  order: number
}
export type ConditionAccessoryAmount = {
  // ProtoMember(1)
  accessoryId: string
  // ProtoMember(2)
  amountGte: string
}
export type ConditionActivityLevel = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  levelGte: number
  // ProtoMember(3)
  levelLte: number
}
export type ConditionCardLevel = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  levelGte: number
}
export type ConditionCardRarity = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  rarityGte: number
  // ProtoMember(3)
  rarityLte: number
}
export type ConditionCharacterPhotoAmount = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  amountGte: string
}
export type ConditionClearArea = {
  // ProtoMember(1)
  areaId: string
}
export type ConditionClearMission = {
  // ProtoMember(1)
  missionId: string
  // ProtoMember(2)
  threshold: string
}
export type ConditionClearQuest = {
  // ProtoMember(1)
  questId: string
}
export type ConditionContestQuestHighestRank = {
  // ProtoMember(1)
  questId: string
  // ProtoMember(2)
  rankLte: number
}
export type ConditionDailyAreaClear = {
  // ProtoMember(1)
  areaId: string
  // ProtoMember(2)
  countGte: number
}
export type ConditionDailyQuestClear = {
  // ProtoMember(1)
  questId: string
  // ProtoMember(2)
  countGte: number
}
export type ConditionFanAmount = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  amountGte: string
}
export type ConditionFinishedMessage = {
  // ProtoMember(1)
  messageId: string
}
export type ConditionHierarchyDetailGradeId = {
  // ProtoMember(1)
  hierarchyDetailGradeId: string
}
export type ConditionItemAmount = {
  // ProtoMember(1)
  itemId: string
  // ProtoMember(2)
  amountGte: string
}
export type ConditionLiveCharacterHighestScore = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  scoreGte: string
}
export type ConditionMaxQuestScoreRank = {
  // ProtoMember(1)
  questId: string
  // ProtoMember(2)
  rankGte: number
}
export type ConditionNotSatisfyCondition = {
  // ProtoMember(1)
  conditionId: string
}
export type ConditionObtainAccessory = {
  // ProtoMember(1)
  accessoryId: string
}
export type ConditionObtainCard = {
  // ProtoMember(1)
  cardId: string
}
export type ConditionObtainCharacter = {
  // ProtoMember(1)
  characterId: string
}
export type ConditionObtainCostume = {
  // ProtoMember(1)
  costumeId: string
}
export type ConditionObtainEmblem = {
  // ProtoMember(1)
  emblemId: string
}
export type ConditionObtainItem = {
  // ProtoMember(1)
  itemId: string
}
export type ConditionOpenGacha = {
  // ProtoMember(1)
  gachaId: string
}
export type ConditionReadStory = {
  // ProtoMember(1)
  storyId: string
}
export type ConditionReliability = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  reliabilityGte: number
}
export type ConditionSatisfyCondition = {
  // ProtoMember(1)
  conditionId: string
}
export type ConditionWearCostume = {
  // ProtoMember(1)
  costumeId: string
}
export type ConditionWearLiveCostume = {
  // ProtoMember(1)
  costumeId: string
}
export type Costume = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  hairAssetId: string
  // ProtoMember(3)
  faceAssetId: string
  // ProtoMember(4)
  bodyAssetId: string
  // ProtoMember(5)
  characterId: string
  // ProtoMember(6)
  order: number
  // ProtoMember(7)
  name: string
  // ProtoMember(8)
  releaseDate: string
  // ProtoMember(9)
  costumeTypeId: string
  // ProtoMember(10)
  sdAssetId: string
  // ProtoMember(11)
  motifAssetId: string
  // ProtoMember(12)
  isUserUnavailable: boolean
}
export type Decoration = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  assetId: string
  // ProtoMember(4)
  autoProvideConditionId: string
  // ProtoMember(5)
  order: number
  // ProtoMember(6)
  description: string
}
export type Emblem = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  assetId: string
  // ProtoMember(4)
  autoProvideConditionId: string
  // ProtoMember(5)
  isViewableInInactive: boolean
  // ProtoMember(6)
  order: number
  // ProtoMember(7)
  description: string
}
export type EventMission = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  eventMissionType: EventMissionType
  // ProtoMember(3)
  assetId: string
  // ProtoMember(4)
  name: string
  // ProtoMember(5)
  order: number
  // ProtoMember(6)
  viewConditionId: string
  // ProtoMember(7)
  unlockConditionId: string
  // ProtoMember(100)
  missionIds: string[]
}
export type EventStory = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  description: string
  // ProtoMember(5)
  order: number
  // ProtoMember(6)
  viewConditionId: string
  // ProtoMember(11)
  episodes: EventStoryEpisode[]
}
export type EventStoryEpisode = {
  // ProtoMember(1)
  episode: number
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  storyId: string
  // ProtoMember(4)
  viewConditionId: string
  // ProtoMember(5)
  unlockConditionId: string
}
export type FunctionLock = {
  // ProtoMember(1)
  type: FunctionLockType
  // ProtoMember(2)
  requiredManagerLevel: number
  // ProtoMember(3)
  unlockConditionId: string
}
export type Gacha = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  bannerAssetId: string
  // ProtoMember(4)
  appealAssetId: string
  // ProtoMember(5)
  movieAssetId: string
  // ProtoMember(6)
  screenAssetId: string
  // ProtoMember(7)
  name: string
  // ProtoMember(8)
  description: string
  // ProtoMember(9)
  precaution: string
  // ProtoMember(10)
  gachaType: GachaType
  // ProtoMember(11)
  viewConditionId: string
  // ProtoMember(12)
  unlockConditionId: string
  // ProtoMember(13)
  pickupCardIds: string[]
  // ProtoMember(14)
  exchangeResourceType: ResourceType
  // ProtoMember(15)
  exchangeResourceId: string
  // ProtoMember(16)
  exchangeBoothId: string
  // ProtoMember(17)
  order: number
  // ProtoMember(18)
  isPeriodDisplay: boolean
  // ProtoMember(19)
  appealText: string
  // ProtoMember(20)
  selectPickupAmount: number
  // ProtoMember(21)
  selectCardIds: string[]
  // ProtoMember(100)
  buttonIds: string[]
  // ProtoMember(101)
  exchangeIds: string[]
  // ProtoMember(102)
  cardRewards: GachaCardReward[]
}
export type GachaButton = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  description: string
  // ProtoMember(4)
  isAnimation: boolean
  // ProtoMember(5)
  consumptionId: string
  // ProtoMember(6)
  discountLimitType: GachaLimitType
  // ProtoMember(7)
  discountCount: number
  // ProtoMember(8)
  discountConsumptionId: string
  // ProtoMember(9)
  drawCount: number
  // ProtoMember(10)
  limitType: GachaLimitType
  // ProtoMember(11)
  limitCount: number
  // ProtoMember(12)
  bonusRewardId: string
  // ProtoMember(13)
  bonusCount: number
  // ProtoMember(14)
  order: number
  // ProtoMember(15)
  gachaId: string
}
export type GachaCardReward = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  rewardId: string
}
export type GachaExchange = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  rewardId: string
  // ProtoMember(3)
  exchangeLimit: number
  // ProtoMember(4)
  requiredResourceAmount: string
  // ProtoMember(5)
  order: number
  // ProtoMember(6)
  gachaId: string
}
export type GuildTopMovie = {
  // ProtoMember(1)
  assetId: string
  // ProtoMember(2)
  musicAssetId: string
  // ProtoMember(3)
  conditionId: string
  // ProtoMember(4)
  order: number
}
export type HierarchyDetailGrade = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  hierarchyGradeId: string
  // ProtoMember(3)
  subName: string
  // ProtoMember(4)
  requiredHierarchyPoint: string
  // ProtoMember(5)
  requiredHierarchyRank: number
  // ProtoMember(6)
  order: number
}
export type HierarchyDivisionReward = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  conditionId: string
  // ProtoMember(4)
  rewardId: string
  // ProtoMember(5)
  order: number
}
export type HierarchyReward = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  hierarchyRewardType: HierarchyRewardType
  // ProtoMember(3)
  order: number
  // ProtoMember(4)
  name: string
  // ProtoMember(5)
  conditionId: string
  // ProtoMember(6)
  rewardId: string
}
export type HomeAction = {
  // ProtoMember(1)
  homeActionId: string
  // ProtoMember(2)
  characterId: string
  // ProtoMember(3)
  motionAssetId: string
  // ProtoMember(4)
  additionMotionAssetId: string
  // ProtoMember(5)
  voiceAssetId: string
  // ProtoMember(6)
  text: string
  // ProtoMember(7)
  positionType: HomePositionType
  // ProtoMember(8)
  conditionId: string
  // ProtoMember(9)
  weight: number
  // ProtoMember(10)
  actionType: HomeActionType
}
export type HomeBackground = {
  // ProtoMember(1)
  homeBackgroundId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  placeType: HomePlaceType
  // ProtoMember(4)
  backgroundAssetId: string
  // ProtoMember(5)
  cameraAssetId: string
  // ProtoMember(6)
  conditionId: string
  // ProtoMember(7)
  priority: number
  // ProtoMember(8)
  positions: number[]
  // ProtoMember(9)
  angles: number[]
  // ProtoMember(10)
  characterCostumeGroupId: string
}
export type HomeDrama = {
  // ProtoMember(1)
  homeDramaId: string
  // ProtoMember(2)
  weight: number
  // ProtoMember(3)
  placeType: HomePlaceType
  // ProtoMember(4)
  conditionId: string
  // ProtoMember(5)
  homeDramaPositionGroupId: string
  // ProtoMember(6)
  cameraAssetIds: string[]
  // ProtoMember(7)
  details: HomeDramaDetail[]
  // ProtoMember(8)
  isBreak: boolean
  // ProtoMember(9)
  simplePersonalityType: SimpleCharacterPersonalityType
}
export type HomeDramaDetail = {
  // ProtoMember(1)
  order: number
  // ProtoMember(2)
  text: string
  // ProtoMember(3)
  timing: number
  // ProtoMember(4)
  characterId: string
  // ProtoMember(5)
  voiceAssetId: string
  // ProtoMember(6)
  homeDramaPositionId: string
  // ProtoMember(7)
  idleMotionAssetId: string
  // ProtoMember(8)
  properties: string[]
}
export type HomeDramaFree = {
  // ProtoMember(1)
  homeDramaPositionGroupId: string
  // ProtoMember(2)
  homeDramaPositionId: string
  // ProtoMember(3)
  number: number
  // ProtoMember(4)
  characterId: string
  // ProtoMember(5)
  weight: number
  // ProtoMember(6)
  motionAssetIds: string[]
  // ProtoMember(7)
  properties: string[]
  // ProtoMember(8)
  voiceAssetId: string
  // ProtoMember(9)
  playStartMillisecond: number
}
export type HomeNavigation = {
  // ProtoMember(1)
  homeNavigationId: string
  // ProtoMember(2)
  characterId: string
  // ProtoMember(3)
  navigationText: string
  // ProtoMember(4)
  detailText: string
  // ProtoMember(5)
  linkType: LinkType
  // ProtoMember(6)
  linkDetail: string
  // ProtoMember(7)
  viewConditionId: string
  // ProtoMember(8)
  order: number
}
export type HomeTalk = {
  // ProtoMember(1)
  homeTalkId: string
  // ProtoMember(2)
  characterId: string
  // ProtoMember(3)
  placeType: HomePlaceType
  // ProtoMember(4)
  conditionId: string
  // ProtoMember(5)
  firstPriority: number
  // ProtoMember(6)
  weight: number
  // ProtoMember(7)
  callPatternId: string
  // ProtoMember(8)
  choiceText: string
  // ProtoMember(9)
  managerText: string
  // ProtoMember(10)
  reliability: number
  // ProtoMember(100)
  characterTalks: CharacterTalk[]
}
export type HomeTalkCallPattern = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  patternId: string
  // ProtoMember(3)
  managerCallText: string
  // ProtoMember(4)
  characterArrivalText: string
  // ProtoMember(5)
  characterArrivalVoiceAssetId: string
}
export type LiveAbilityLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(2)
  description: string
  // ProtoMember(3)
  shortDescription: string
  // ProtoMember(4)
  type: LiveAbilityType
  // ProtoMember(5)
  requiredItemAmount: number
  // ProtoMember(6)
  requiredCardLevel: number
  // ProtoMember(7)
  value: number
  // ProtoMember(8)
  skillId: string
  // ProtoMember(9)
  moodType: MoodType
}
export type LiveBonus = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  liveAbilityId: string
  // ProtoMember(4)
  liveAbilityLevel: number
}
export type LiveBonusGroup = {
  // ProtoMember(1)
  groupId: string
  // ProtoMember(2)
  liveBonusIds: string[]
}
export type LiveResultAnimation = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  personalityType: CharacterPersonalityType
  // ProtoMember(3)
  resultType: LiveResultType
  // ProtoMember(4)
  firstMotionAssetId: string
  // ProtoMember(5)
  firstVoiceAssetId: string
  // ProtoMember(6)
  secondMotionAssetId: string
  // ProtoMember(7)
  secondVoiceAssetId: string
  // ProtoMember(8)
  ratio: number
  // ProtoMember(9)
  conditionId: string
}
export type LiveStartAnimation = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  characterAmount: number
  // ProtoMember(3)
  motionAssetIds: string[]
  // ProtoMember(4)
  voiceAssetGroupId: string
  // ProtoMember(5)
  characterIds: string[]
  // ProtoMember(6)
  npcCharacterIds: string[]
  // ProtoMember(7)
  npcMotionAssetIds: string[]
  // ProtoMember(8)
  layoutMotionAssetId: string
  // ProtoMember(9)
  cameraMotionAssetId: string
}
export type LiveStartVoiceAssetGroup = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  characterId: string
  // ProtoMember(3)
  voiceAssetId1: string
  // ProtoMember(4)
  voiceAssetId2: string
  // ProtoMember(5)
  voiceAssetId3: string
}
export type Loading = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  loadingType: LoadingType
  // ProtoMember(3)
  targets: LoadingDisplayTargetType[]
  // ProtoMember(4)
  viewConditionId: string
  // ProtoMember(5)
  title: string
  // ProtoMember(6)
  assetId: string
  // ProtoMember(7)
  text: string
  // ProtoMember(8)
  isDownloading: boolean
}
export type LoginBonus = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  description: string
  // ProtoMember(4)
  type: LoginBonusType
  // ProtoMember(5)
  assetId: string
  // ProtoMember(6)
  topColorCode: string
  // ProtoMember(7)
  bottomColorCode: string
  // ProtoMember(8)
  priority: number
  // ProtoMember(9)
  rewardIds: string[]
  // ProtoMember(10)
  openConditionId: string
  // ProtoMember(11)
  receiveConditionId: string
}
export type LoginBonusText = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  costumeId: string
  // ProtoMember(3)
  text: string
}
export type MarathonBoxGachaSetting = {
  // ProtoMember(1)
  marathonId: string
  // ProtoMember(2)
  boxGachaId: string
  // ProtoMember(3)
  order: number
  // ProtoMember(4)
  unlockRequiredPoint: number
  // ProtoMember(5)
  guageColorCode: string
  // ProtoMember(6)
  guageName: string
}
export type MarathonLiveBonus = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  liveAbilityId: string
  // ProtoMember(4)
  liveAbilityLevel: number
  // ProtoMember(5)
  powerPermil: number
}
export type MarathonLiveBonusGroup = {
  // ProtoMember(1)
  groupId: string
  // ProtoMember(2)
  liveBonusId: string
}
export type MarathonQuest = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  marathonId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  description: string
  // ProtoMember(5)
  order: number
  // ProtoMember(6)
  unlockConditionId: string
  // ProtoMember(7)
  marathonPointBonusCharacterIds: string[]
  // ProtoMember(8)
  boxGachaId: string
  // ProtoMember(9)
  stageId: string
  // ProtoMember(10)
  musicId: string
  // ProtoMember(11)
  musicChartPatternId: string
  // ProtoMember(12)
  requiredUnlockItemAmount: number
  // ProtoMember(13)
  requiredStamina: number
  // ProtoMember(14)
  position1AttributeType: AttributeType
  // ProtoMember(15)
  position2AttributeType: AttributeType
  // ProtoMember(16)
  position3AttributeType: AttributeType
  // ProtoMember(17)
  position4AttributeType: AttributeType
  // ProtoMember(18)
  position5AttributeType: AttributeType
  // ProtoMember(19)
  activeSkillWeightPermil: number
  // ProtoMember(20)
  specialSkillWeightPermil: number
  // ProtoMember(21)
  skillStaminaWeightPermil: number
  // ProtoMember(22)
  staminaRecoveryWeightPermil: number
  // ProtoMember(23)
  beatDanceWeightPermil: number
  // ProtoMember(24)
  beatVocalWeightPermil: number
  // ProtoMember(25)
  beatVisualWeightPermil: number
  // ProtoMember(26)
  questPressureId: string
  // ProtoMember(27)
  questCharacterAdvantageId: string
  // ProtoMember(28)
  questAudienceAdvantageId: string
  // ProtoMember(29)
  moodType: MoodType
  // ProtoMember(30)
  maxCapacity: number
  // ProtoMember(31)
  dailyLimitCount: number
  // ProtoMember(32)
  assetId: string
  // ProtoMember(33)
  unlockDescription: string
}
export type MarathonQuestDifficulty = {
  // ProtoMember(1)
  marathonQuestId: string
  // ProtoMember(2)
  difficultyNumber: number
  // ProtoMember(3)
  difficultyLevel: number
  // ProtoMember(4)
  marathonId: string
  // ProtoMember(5)
  mentalThreshold: number
  // ProtoMember(6)
  clearScore: string
  // ProtoMember(7)
  rewardManagerExp: number
  // ProtoMember(8)
  rewardCardExp: number
  // ProtoMember(9)
  rewardMarathonPoint: number
  // ProtoMember(10)
  clearRewardId: string
  // ProtoMember(11)
  rankAdditionalRewardId: string
  // ProtoMember(12)
  rankSRewardId: string
  // ProtoMember(13)
  rankARewardId: string
  // ProtoMember(14)
  rankBRewardId: string
  // ProtoMember(15)
  rankCRewardId: string
  // ProtoMember(16)
  unlockConditionId: string
  // ProtoMember(17)
  liveBonusGroupId: string
}
export type Message = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  messageGroupId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  type: MessageType
  // ProtoMember(5)
  characterId: string
  // ProtoMember(6)
  instantType: MessageInstantType
  // ProtoMember(7)
  rarityType: MessageRarityType
  // ProtoMember(8)
  unlockConditionId: string
  // ProtoMember(9)
  details: MessageDetail[]
}
export type MessageDetail = {
  // ProtoMember(1)
  messageDetailId: string
  // ProtoMember(2)
  characterId: string
  // ProtoMember(3)
  text: string
  // ProtoMember(4)
  stampAssetId: string
  // ProtoMember(5)
  imageAssetId: string
  // ProtoMember(6)
  telephoneId: string
  // ProtoMember(7)
  choiceText: string
  // ProtoMember(8)
  delayMinutes: number
  // ProtoMember(9)
  readMinutes: number
  // ProtoMember(10)
  nextMessageDetailIds: string[]
  // ProtoMember(11)
  reliability: number
}
export type MessageGroup = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  assetId: string
  // ProtoMember(4)
  characterIds: string[]
}
export type Mission = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  categoryType: MissionCategoryType
  // ProtoMember(3)
  missionType: MissionType
  // ProtoMember(4)
  targetIds: string[]
  // ProtoMember(5)
  name: string
  // ProtoMember(6)
  shortDescription: string
  // ProtoMember(7)
  longDescription: string
  // ProtoMember(8)
  order: number
  // ProtoMember(9)
  viewConditionId: string
  // ProtoMember(10)
  linkType: LinkType
  // ProtoMember(11)
  linkDetail: string
  // ProtoMember(12)
  progresses: MissionProgress[]
  // ProtoMember(13)
  eventMissionId: string
}
export type MissionProgress = {
  // ProtoMember(1)
  threshold: string
  // ProtoMember(2)
  rewardSetId: string
}
export type Music = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  description: string
  // ProtoMember(5)
  order: number
  // ProtoMember(6)
  lyricist: string
  // ProtoMember(7)
  composer: string
  // ProtoMember(8)
  arranger: string
  // ProtoMember(9)
  singer: string
  // ProtoMember(10)
  is3DAvailable: boolean
  // ProtoMember(11)
  comboAdvantageId: string
  // ProtoMember(12)
  volumePermyriads: number[]
  // ProtoMember(13)
  vocalVolumePermyriads: number[]
  // ProtoMember(14)
  bars: number[]
  // ProtoMember(15)
  beats: number[]
  // ProtoMember(16)
  bpms: number[]
  // ProtoMember(17)
  chartStartOffsetMillisecond: number
  // ProtoMember(21)
  displayCharacterAmount: number
  // ProtoMember(22)
  colorVariation: string
  // ProtoMember(23)
  digests: MusicDigest[]
  // ProtoMember(24)
  releaseTime: string
  // ProtoMember(25)
  originalCharacterIds: string[]
}
export type MusicMasteryReward = {
  // ProtoMember(1)
  musicId: string
  // ProtoMember(2)
  characterId: string
  // ProtoMember(3)
  musicMasteryRewardSetId: string
}
export type MusicMasteryRewardSet = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  level: number
  // ProtoMember(3)
  rewardId: string
}
export type PhotoAbility = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  description: string
  // ProtoMember(4)
  abilityType: PhotoAbilityType
  // ProtoMember(5)
  moodType: MoodType
  // ProtoMember(6)
  skillId: string
  // ProtoMember(7)
  photoAbilityLevels: PhotoAbilityLevel[]
  // ProtoMember(8)
  photoAbilityGrades: PhotoAbilityGrade[]
}
export type PhotoAbilityInfo = {
  // ProtoMember(1)
  photoAbilityId: string
  // ProtoMember(2)
  effectValue: number
  // ProtoMember(3)
  missionId: string
  // ProtoMember(4)
  grade: number
}
export type PhotoActivity = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  type: PhotoShootingActionType
  // ProtoMember(4)
  thumbAssetId: string
  // ProtoMember(5)
  stageId: string
  // ProtoMember(6)
  costumeTypeIds: string[]
  // ProtoMember(7)
  forceCostumeTypeId: string
  // ProtoMember(8)
  photoShootingMotionSetId: string
  // ProtoMember(9)
  isDeleteCharacter: boolean
  // ProtoMember(10)
  order: number
  // ProtoMember(11)
  viewConditionId: string
  // ProtoMember(12)
  unlockConditionId: string
}
export type PhotoAllInOne = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  characterIds: string[]
  // ProtoMember(4)
  name: string
  // ProtoMember(5)
  rarity: number
  // ProtoMember(6)
  placeName: string
  // ProtoMember(7)
  eventName: string
  // ProtoMember(8)
  level: number
  // ProtoMember(9)
  abilities: PhotoAbilityInfo[]
  // ProtoMember(10)
  shootingTime: string
  // ProtoMember(11)
  focusCharacterId: string
}
export type PhotoContestActivity = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  type: PhotoShootingActionType
  // ProtoMember(4)
  thumbAssetId: string
  // ProtoMember(5)
  stageId: string
  // ProtoMember(6)
  costumeTypeIds: string[]
  // ProtoMember(7)
  forceCostumeTypeId: string
  // ProtoMember(8)
  photoShootingMotionSetId: string
  // ProtoMember(9)
  isDeleteCharacter: boolean
  // ProtoMember(10)
  order: number
  // ProtoMember(11)
  viewConditionId: string
  // ProtoMember(12)
  unlockConditionId: string
}
export type PhotoContestQuestMusic = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  musicId: string
  // ProtoMember(3)
  assetId: string
  // ProtoMember(4)
  name: string
  // ProtoMember(5)
  description: string
  // ProtoMember(6)
  order: number
  // ProtoMember(7)
  lyricist: string
  // ProtoMember(8)
  composer: string
  // ProtoMember(9)
  arranger: string
  // ProtoMember(10)
  singer: string
  // ProtoMember(11)
  viewConditionId: string
  // ProtoMember(12)
  unlockConditionId: string
}
export type PhotoContestQuestStage = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  stageId: string
  // ProtoMember(3)
  assetId: string
  // ProtoMember(4)
  name: string
  // ProtoMember(5)
  description: string
  // ProtoMember(6)
  maxCapacity: number
  // ProtoMember(7)
  order: number
  // ProtoMember(8)
  viewConditionId: string
  // ProtoMember(9)
  unlockConditionId: string
}
export type PhotoContestSectionReward = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  requiredEvaluationPoint: number
  // ProtoMember(3)
  rewardId: string
}
export type PhotoQuestMusic = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  description: string
  // ProtoMember(5)
  order: number
  // ProtoMember(6)
  lyricist: string
  // ProtoMember(7)
  composer: string
  // ProtoMember(8)
  arranger: string
  // ProtoMember(9)
  singer: string
  // ProtoMember(10)
  viewConditionId: string
  // ProtoMember(11)
  unlockConditionId: string
}
export type PhotoQuestStage = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  description: string
  // ProtoMember(5)
  maxCapacity: number
  // ProtoMember(6)
  order: number
  // ProtoMember(7)
  viewConditionId: string
  // ProtoMember(8)
  unlockConditionId: string
}
export type PhotoShootingCharacterMotion = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  characterId: string
  // ProtoMember(3)
  motionAssetId: string
  // ProtoMember(4)
  propAssetIds: string[]
  // ProtoMember(5)
  characterPositions: number[]
  // ProtoMember(6)
  characterAngles: number[]
  // ProtoMember(7)
  cameraPositions: number[]
  // ProtoMember(8)
  cameraAngles: number[]
  // ProtoMember(9)
  motionDelaySec: number
  // ProtoMember(10)
  upperLimit: number
  // ProtoMember(11)
  lowerLimit: number
}
export type PhotoShootingSimplePersonalityMotion = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  personalityType: SimpleCharacterPersonalityType
  // ProtoMember(3)
  motionAssetId: string
  // ProtoMember(4)
  propAssetIds: string[]
  // ProtoMember(5)
  photoShootingCharacterMotionId: string
  // ProtoMember(6)
  characterPositions: number[]
  // ProtoMember(7)
  characterAngles: number[]
  // ProtoMember(8)
  cameraPositions: number[]
  // ProtoMember(9)
  cameraAngles: number[]
  // ProtoMember(10)
  motionDelaySec: number
  // ProtoMember(11)
  upperLimit: number
  // ProtoMember(12)
  lowerLimit: number
}
export type PhotoSituation = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  characterIds: string[]
  // ProtoMember(4)
  defaultName: string
  // ProtoMember(5)
  placeName: string
  // ProtoMember(6)
  eventName: string
  // ProtoMember(7)
  shootingTime: string
  // ProtoMember(8)
  focusCharacterId: string
}
export type Quest = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  areaId: string
  // ProtoMember(3)
  stageId: string
  // ProtoMember(4)
  musicId: string
  // ProtoMember(5)
  difficultyLevel: number
  // ProtoMember(6)
  name: string
  // ProtoMember(7)
  description: string
  // ProtoMember(8)
  order: number
  // ProtoMember(9)
  skipType: LiveSkipType
  // ProtoMember(10)
  musicChartPatternId: string
  // ProtoMember(11)
  position1AttributeType: AttributeType
  // ProtoMember(12)
  position2AttributeType: AttributeType
  // ProtoMember(13)
  position3AttributeType: AttributeType
  // ProtoMember(14)
  position4AttributeType: AttributeType
  // ProtoMember(15)
  position5AttributeType: AttributeType
  // ProtoMember(16)
  activeSkillWeightPermil: number
  // ProtoMember(17)
  specialSkillWeightPermil: number
  // ProtoMember(18)
  skillStaminaWeightPermil: number
  // ProtoMember(19)
  staminaRecoveryWeightPermil: number
  // ProtoMember(20)
  beatDanceWeightPermil: number
  // ProtoMember(21)
  beatVocalWeightPermil: number
  // ProtoMember(22)
  beatVisualWeightPermil: number
  // ProtoMember(23)
  maxCapacity: number
  // ProtoMember(24)
  mentalThreshold: number
  // ProtoMember(25)
  questPressureId: string
  // ProtoMember(26)
  questCharacterAdvantageId: string
  // ProtoMember(27)
  questAudienceAdvantageId: string
  // ProtoMember(28)
  moodType: MoodType
  // ProtoMember(29)
  clearScore: string
  // ProtoMember(30)
  rewardManagerExp: number
  // ProtoMember(31)
  rewardCardExp: number
  // ProtoMember(32)
  clearRewardId: string
  // ProtoMember(33)
  rankAdditionalRewardId: string
  // ProtoMember(34)
  rankSRewardId: string
  // ProtoMember(35)
  rankARewardId: string
  // ProtoMember(36)
  rankBRewardId: string
  // ProtoMember(37)
  rankCRewardId: string
  // ProtoMember(38)
  rankDRewardId: string
  // ProtoMember(39)
  viewConditionId: string
  // ProtoMember(40)
  unlockConditionId: string
  // ProtoMember(41)
  dailyLimitCount: number
  // ProtoMember(42)
  ticketAmount: number
  // ProtoMember(43)
  achievedRankRewards: QuestAchievedRankReward[]
  // ProtoMember(44)
  liveBonusGroupId: string
}
export type QuestAchievedRankReward = {
  // ProtoMember(1)
  highRank: number
  // ProtoMember(2)
  lowRank: number
  // ProtoMember(3)
  rewardId: string
}
export type QuestCharacterAdvantage = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  characterGroupId: string
  // ProtoMember(3)
  characterIds: string[]
  // ProtoMember(4)
  advantagePermil: number
}
export type Setting = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  deckCountMax: number
  // ProtoMember(3)
  accessoryEnhancesRequiredMaterialAmount: number
  // ProtoMember(4)
  characterSecondToRecover: number
  // ProtoMember(5)
  deckCardStaminaBarMax: number
  // ProtoMember(6)
  deckCardParameterBarMax: number
  // ProtoMember(7)
  secondsPerActivityPromotionStep: number
  // ProtoMember(8)
  overallVocalPermil: number
  // ProtoMember(9)
  overallDancePermil: number
  // ProtoMember(10)
  overallVisualPermil: number
  // ProtoMember(11)
  overallStaminaPermil: number
  // ProtoMember(12)
  overallMentalPermil: number
  // ProtoMember(13)
  overallTechniquePermil: number
  // ProtoMember(14)
  deckAdvantagePermil: number
  // ProtoMember(15)
  activityPromotionFetchStepsSize: number
  // ProtoMember(16)
  secondsPerActivityFanEventStep: number
  // ProtoMember(17)
  activityFanEventMinPointCoefficientPermil: number
  // ProtoMember(18)
  activityFanEventIntermediatePointCoefficientPermil: number
  // ProtoMember(19)
  activityFanEventReachMaxPointMilliseconds: number
  // ProtoMember(20)
  activityFanEventKeepMaxPointMilliseconds: number
  // ProtoMember(21)
  liveMaxParameterBonusPermil: number
  // ProtoMember(22)
  characterMotifAssetId: string
  // ProtoMember(23)
  cardStaminaBarMax: number
  // ProtoMember(24)
  cardParameterBarMax: number
  // ProtoMember(25)
  questRankingDisplayNum: number
  // ProtoMember(26)
  activityFanEventRankingDisplayNum: number
  // ProtoMember(27)
  activityFanEventFetchStepsSize: number
  // ProtoMember(28)
  activityFanEventSaveIntervalStepsSize: number
  // ProtoMember(29)
  secondsPerActivityFanEventBackgroundStep: number
  // ProtoMember(30)
  friendLimit: number
  // ProtoMember(31)
  friendOfferLimit: number
  // ProtoMember(32)
  friendOfferedLimit: number
  // ProtoMember(33)
  accessoryLimit: string
  // ProtoMember(34)
  photoDeleteAmountLimit: number
  // ProtoMember(35)
  firstMessageDetailId: string
  // ProtoMember(36)
  cardResetStoneAmount: number
  // ProtoMember(37)
  maxHomePromotionRewardAmount: number
  // ProtoMember(38)
  cardSupportLevelLimit: number
  // ProtoMember(40)
  functionMaintenanceTitle: string
  // ProtoMember(41)
  twitterUrl: string
  // ProtoMember(42)
  activityFanEventRequiredCheerPoint: number
  // ProtoMember(43)
  secondsPerActivityLessonStep: number
  // ProtoMember(44)
  forumMaxReplyAmount: number
  // ProtoMember(45)
  forumRestrictCreateThreadHours: number
  // ProtoMember(46)
  divisionMoveProhibitionDays: number
  // ProtoMember(47)
  cardDefaultMental: number
  // ProtoMember(48)
  cardDefaultTechnique: number
  // ProtoMember(49)
  reviewDisplayConditionId: string
  // ProtoMember(50)
  activityLessonPromoteLimitCount: number
  // ProtoMember(51)
  activityLessonPromoteRequiredStoneAmount: number
  // ProtoMember(52)
  activityLessonPromoteEffectHours: number
  // ProtoMember(53)
  activityLessonPromoteFreeLimitCount: number
  // ProtoMember(54)
  functionMaintenanceMessage: string
  // ProtoMember(55)
  pvpLiveSkipAvailable: boolean
  // ProtoMember(56)
  gvgLiveSkipAvailable: boolean
  // ProtoMember(57)
  tourLiveSkipAvailable: boolean
  // ProtoMember(58)
  gvgChallengeStoneAmount: number
  // ProtoMember(59)
  trainingCostumeIds: string[]
  // ProtoMember(60)
  tutorialActivityLessonPromoteMinutes: number
  // ProtoMember(61)
  tutorialActivityLessonRewardGoldPerMinute: number
  // ProtoMember(62)
  tutorialActivityLessonRewardManagerExpPerMinute: number
  // ProtoMember(63)
  tutorialActivityLessonRewardCardEnhanceItemPerMinute: number
  // ProtoMember(64)
  tutorialActivityPromotionRewardGold: number
  // ProtoMember(65)
  tutorialActivityPromotionRewardManagerExp: number
  // ProtoMember(66)
  tutorialActivityPromotionRewardActivityExp: number
  // ProtoMember(67)
  tutorialActivityPromotionRewardCharacterActivityExp: number
  // ProtoMember(68)
  tutorialActivityPromotionRewardCardEnhanceItem: number
  // ProtoMember(69)
  tutorialActivityPromotionRewardFanAmount: number
  // ProtoMember(70)
  tutorialActivityPromotionPerformanceId: string
  // ProtoMember(71)
  tutorialActivityPromotionCharacterIds: string[]
  // ProtoMember(72)
  giftDefaultFetchSize: number
  // ProtoMember(73)
  questRankingLiveReplayableNum: number
  // ProtoMember(74)
  tutorialPhotoShootingItemId: string
  // ProtoMember(75)
  tutorialPhotoShootingMusicId: string
  // ProtoMember(76)
  tutorialPhotoShootingStageId: string
  // ProtoMember(77)
  tutorialPhotoShootingCharacterIds: string[]
  // ProtoMember(78)
  activityFanEventCheerEffectValuePermil: number
  // ProtoMember(79)
  photoShootingItemThresholds: number[]
  // ProtoMember(80)
  tutorialShortQuestId: string
  // ProtoMember(81)
  tutorialFullQuestId: string
  // ProtoMember(82)
  tutorialMessageId: string
  // ProtoMember(83)
  tutorialActivityFanEventCharacterIds: string[]
  // ProtoMember(84)
  entrustReductionPermil: number
  // ProtoMember(85)
  forumBlockDays: number
  // ProtoMember(86)
  liveLightFanAmountWeightPermil: number
  // ProtoMember(87)
  liveMiddleFanAmountWeightPermil: number
  // ProtoMember(88)
  liveHeavyFanAmountWeightPermil: number
  // ProtoMember(89)
  tutorialAdvAssetId: string
  // ProtoMember(90)
  tutorialAdvTitle: string
  // ProtoMember(91)
  tutorialAdvSubTitle: string
  // ProtoMember(92)
  liveMinimumGuaranteedAudienceAmount: number
  // ProtoMember(93)
  messageExcludeTimeStart: string
  // ProtoMember(94)
  messageExcludeTimeEnd: string
  // ProtoMember(95)
  deckEntrustSpecialSkillPossessionCoefficientPermil: number
  // ProtoMember(96)
  deckEntrustSpecialSkillPossessionReductionCoefficientPermil: number
  // ProtoMember(97)
  deckEntrustStaminaReductionCoefficientPermil: number
  // ProtoMember(98)
  tutorialActivityFanEventCostumeIds: string[]
  // ProtoMember(99)
  goldLimit: string
  // ProtoMember(100)
  itemLimit: string
  // ProtoMember(101)
  freeStoneLimit: string
  // ProtoMember(102)
  paidStoneLimit: string
  // ProtoMember(103)
  cardSupportRemovableMinutes: number
  // ProtoMember(105)
  questDailyTicketLimitUseCount: number
  // ProtoMember(106)
  salaryRemainingDaysLte: number
  // ProtoMember(1001)
  statusEffectTypeStrengthList: StatusEffectType[]
  // ProtoMember(1002)
  statusEffectTypeWeaknessDownList: StatusEffectType[]
  // ProtoMember(1003)
  statusEffectTypeWeaknessOtherList: StatusEffectType[]
  // ProtoMember(1101)
  skillEfficacyTypeScoreList: SkillEfficacyType[]
  // ProtoMember(1102)
  skillEfficacyTypeStrengthList: SkillEfficacyType[]
  // ProtoMember(1103)
  skillEfficacyTypeSupportList: SkillEfficacyType[]
  // ProtoMember(1104)
  skillEfficacyTypeWeaknessDownList: SkillEfficacyType[]
  // ProtoMember(1105)
  skillEfficacyTypeWeaknessOtherList: SkillEfficacyType[]
  // ProtoMember(200)
  backsideRankingDisplayNum: number
  // ProtoMember(201)
  backsideLiveSkipAvailable: boolean
  // ProtoMember(300)
  photoContestRankingDisplayNum: number
}
export type SkillDetail = {
  // ProtoMember(1)
  efficacyId: string
  // ProtoMember(2)
  triggerId: string
}
export type SkillEfficacy = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  type: SkillEfficacyType
  // ProtoMember(4)
  description: string
  // ProtoMember(5)
  shortDescription: string
  // ProtoMember(6)
  grade: number
  // ProtoMember(7)
  maxGrade: number
  // ProtoMember(8)
  skillTargetId: string
}
export type SkillLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(2)
  description: string
  // ProtoMember(3)
  shortDescription: string
  // ProtoMember(4)
  requiredItemAmount: number
  // ProtoMember(5)
  requiredCardLevel: number
  // ProtoMember(6)
  stamina: number
  // ProtoMember(7)
  triggerId: string
  // ProtoMember(8)
  probabilityPermil: number
  // ProtoMember(9)
  limitCount: number
  // ProtoMember(10)
  coolTime: number
  // ProtoMember(11)
  skillDetails: SkillDetail[]
}
export type SkillTrigger = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  type: SkillTriggerType
  // ProtoMember(3)
  characterIds: string[]
}
export type StaffLevel = {
  // ProtoMember(1)
  parameterType: ParameterType
  // ProtoMember(2)
  level: number
  // ProtoMember(3)
  requiredMedalAmount: number
  // ProtoMember(4)
  advantage: number
  // ProtoMember(5)
  unlockConditionId: string
}
export type Story = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  advAssetId: string
  // ProtoMember(3)
  sectionName: string
  // ProtoMember(4)
  name: string
  // ProtoMember(5)
  description: string
  // ProtoMember(6)
  rewardId: string
}
export type StoryEpisode = {
  // ProtoMember(1)
  episode: number
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  storyId: string
  // ProtoMember(4)
  viewConditionId: string
  // ProtoMember(5)
  unlockConditionId: string
  // ProtoMember(6)
  isReleased: boolean
}
export type StoryPart = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  subTitle: string
  // ProtoMember(5)
  order: number
  // ProtoMember(6)
  type: StoryPartType
  // ProtoMember(7)
  viewConditionId: string
  // ProtoMember(8)
  unlockConditionId: string
  // ProtoMember(9)
  pointType: PointType
  // ProtoMember(10)
  storyEpisodeConsumptionId: string
  // ProtoMember(11)
  chapters: StoryChapter[]
}
export type Telephone = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  messageGroupId: string
  // ProtoMember(3)
  characterId: string
  // ProtoMember(4)
  name: string
  // ProtoMember(5)
  assetId: string
  // ProtoMember(6)
  unlockConditionId: string
}
export type TourQuestSetting = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  position1AttributeType: AttributeType
  // ProtoMember(3)
  position2AttributeType: AttributeType
  // ProtoMember(4)
  position3AttributeType: AttributeType
  // ProtoMember(5)
  position4AttributeType: AttributeType
  // ProtoMember(6)
  position5AttributeType: AttributeType
  // ProtoMember(7)
  activeSkillWeightPermil: number
  // ProtoMember(8)
  specialSkillWeightPermil: number
  // ProtoMember(9)
  skillStaminaWeightPermil: number
  // ProtoMember(10)
  staminaRecoveryWeightPermil: number
  // ProtoMember(11)
  beatDanceWeightPermil: number
  // ProtoMember(12)
  beatVocalWeightPermil: number
  // ProtoMember(13)
  beatVisualWeightPermil: number
  // ProtoMember(14)
  questPressureId: string
  // ProtoMember(15)
  questCharacterAdvantageId: string
  // ProtoMember(16)
  questAudienceAdvantageId: string
  // ProtoMember(17)
  moodType: MoodType
}
export type Tutorial = {
  // ProtoMember(1)
  type: TutorialType
  // ProtoMember(2)
  stepInfo: TutorialStep[]
  // ProtoMember(3)
  unlockConditionId: string
}
export type AccessoryEnhancement = {
  // ProtoMember(1)
  rarity: number
  // ProtoMember(2)
  requiredGold: string
}
export type ActivityAbility = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  description: string
  // ProtoMember(4)
  levels: ActivityAbilityLevel[]
}
export type AssetDownload = {
  // ProtoMember(1)
  assetId: string
  // ProtoMember(2)
  type: AssetDownloadType
}
export type BacksideAnimation = {
  // ProtoMember(1)
  panelType: BacksidePanelType
  // ProtoMember(2)
  panelAttributeType: BacksidePanelAttributeType
  // ProtoMember(3)
  panelRank: number
  // ProtoMember(4)
  backgroundAssetId: string
  // ProtoMember(5)
  cameraAssetId: string
  // ProtoMember(6)
  motionAssetId: string
  // ProtoMember(7)
  additionMotionAssetId: string
  // ProtoMember(8)
  propAssetIds: string[]
  // ProtoMember(9)
  voiceAssetId: string
}
export type BoxGachaGroup = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  requiredResourceType: ResourceType
  // ProtoMember(3)
  requiredResourceId: string
}
export type CardDuplicateExp = {
  // ProtoMember(1)
  initialRarity: number
  // ProtoMember(2)
  exp: number
}
export type CardLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(2)
  requiredExp: string
}
export type CardLevelRelease = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  level: number
  // ProtoMember(3)
  targets: CardLevelReleaseTarget[]
}
export type CardParameter = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  level: number
  // ProtoMember(3)
  value: string
  // ProtoMember(4)
  staminaValue: string
}
export type CardRarity = {
  // ProtoMember(1)
  rarity: number
  // ProtoMember(2)
  levelLimit: number
  // ProtoMember(3)
  parameterBonusPermil: number
  // ProtoMember(4)
  requiredExp: number
}
export type CharacterActivityLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(2)
  requiredExp: number
  // ProtoMember(3)
  maxStamina: number
  // ProtoMember(4)
  baseActivityPoint: number
}
export type ComboAdvantage = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  comboCount: number
  // ProtoMember(3)
  advantagePermil: number
}
export type Condition = {
  // ProtoMember(1)
  id: string
  // ProtoMember(3)
  settings: ConditionSetting[]
}
export type ConditionDescription = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  description: string
}
export type Consumption = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  resources: ConsumptionResource[]
}
export type CostumeType = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
}
export type DeckEntrustCoefficient = {
  // ProtoMember(1)
  position: number
  // ProtoMember(2)
  appealPermil: number
  // ProtoMember(3)
  technicalPermil: number
  // ProtoMember(4)
  supportPermil: number
}
export type Division = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  order: number
  // ProtoMember(3)
  name: string
}
export type Guild = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  assetId: string
  // ProtoMember(4)
  order: number
}
export type HelpCategory = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  type: HelpType
  // ProtoMember(3)
  title: string
  // ProtoMember(4)
  order: number
  // ProtoMember(5)
  targetTypes: HelpDisplayTargetType[]
  // ProtoMember(6)
  contents: HelpContent[]
}
export type HierarchyGrade = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  order: number
}
export type HomeDramaPosition = {
  // ProtoMember(1)
  homeDramaPositionId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  placeType: HomePlaceType
  // ProtoMember(4)
  positions: number[]
  // ProtoMember(5)
  angles: number[]
  // ProtoMember(6)
  simplePersonalityType: SimpleCharacterPersonalityType
}
export type HomeDramaPositionGroup = {
  // ProtoMember(1)
  homeDramaPositionGroupId: string
  // ProtoMember(2)
  homeDramaPositionId: string
}
export type Item = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  assetId: string
  // ProtoMember(4)
  description: string
  // ProtoMember(5)
  howToGet: string
  // ProtoMember(6)
  type: ItemType
  // ProtoMember(7)
  value: number
  // ProtoMember(8)
  order: number
  // ProtoMember(9)
  salePrice: number
}
export type LiveAbility = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  description: string
  // ProtoMember(4)
  levels: LiveAbilityLevel[]
}
export type LiveTip = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  type: LiveTipType
  // ProtoMember(3)
  description: string
  // ProtoMember(4)
  priority: number
}
export type ManagerLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(2)
  requiredExp: string
  // ProtoMember(3)
  maxCardLevel: number
  // ProtoMember(4)
  maxPhotoEnhanceLevel: number
  // ProtoMember(5)
  maxPhotoReportLevel: number
}
export type MusicChartPattern = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  number: number
  // ProtoMember(3)
  type: MusicChartType
  // ProtoMember(4)
  position: number
}
export type MusicMasteryLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(2)
  requiredMasteryPoint: number
}
export type PhotoRarityLevel = {
  // ProtoMember(1)
  rarity: number
  // ProtoMember(2)
  level: number
  // ProtoMember(3)
  deleteRewardItem: number
  // ProtoMember(4)
  rerollRequiredItem: number
  // ProtoMember(5)
  enhanceRequiredItem: number
}
export type PhotoShootingMotionSet = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  motionType1: PhotoShootingMotionType
  // ProtoMember(3)
  photoShootingMotionId1: string
  // ProtoMember(4)
  motionType2: PhotoShootingMotionType
  // ProtoMember(5)
  photoShootingMotionId2: string
  // ProtoMember(6)
  motionType3: PhotoShootingMotionType
  // ProtoMember(7)
  photoShootingMotionId3: string
}
export type QuestAudienceAdvantage = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  audienceAmount: number
  // ProtoMember(3)
  advantagePermil: number
}
export type QuestPressure = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  weightPermil: number
}
export type QuestStaminaConsumption = {
  // ProtoMember(1)
  remainStaminaRatioPercent: number
  // ProtoMember(2)
  skillTargetParameterWeightPermil: number
}
export type Reward = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  resources: RewardResource[]
}
export type RewardSort = {
  // ProtoMember(1)
  rewardSortTargetType: RewardSortTargetType
  // ProtoMember(2)
  rewardSortResourceType: RewardSortResourceType
  // ProtoMember(3)
  order: number
}
export type Salary = {
  // ProtoMember(1)
  type: SalaryDetailType
  // ProtoMember(2)
  threshold: string
  // ProtoMember(3)
  amount: number
}
export type Skill = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  categoryType: SkillCategoryType
  // ProtoMember(5)
  levels: SkillLevel[]
  // ProtoMember(6)
  assetId: string
}
export type SkillTarget = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  type: SkillTargetType
  // ProtoMember(101)
  isOpponent: boolean
}
export type StaffTraining = {
  // ProtoMember(1)
  parameterType: ParameterType
  // ProtoMember(2)
  name: string
}
export type Stage = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  type: StageType
  // ProtoMember(3)
  assetId: string
  // ProtoMember(4)
  thumbnailAssetId: string
  // ProtoMember(5)
  name: string
  // ProtoMember(6)
  description: string
  // ProtoMember(7)
  order: number
  // ProtoMember(8)
  timeDifference: string
}
export type StoreProduct = {
  // ProtoMember(1)
  productId: string
  // ProtoMember(2)
  platformType: PlatformType
  // ProtoMember(3)
  price: number
  // ProtoMember(4)
  stoneAmount: number
}
export type StoryEpisodeConsumption = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  releaseCount: number
  // ProtoMember(3)
  requiredStoryPoint: number
}
export type TitleBackground = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  type: TitleBackgroundType
  // ProtoMember(4)
  voiceAssetIds: string[]
  // ProtoMember(5)
  bgmAssetId: string
  // ProtoMember(6)
  startTime: string
  // ProtoMember(7)
  endTime: string
  // ProtoMember(8)
  priority: number
}
export type TotalStaffEnhanceAdvantage = {
  // ProtoMember(1)
  enhanceCount: number
  // ProtoMember(2)
  advantagePermil: number
}
export type Wording = {
  // ProtoMember(1)
  key: string
  // ProtoMember(2)
  word: string
}
export type ActivityAbilityLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(2)
  description: string
  // ProtoMember(3)
  shortDescription: string
  // ProtoMember(4)
  type: ActivityAbilityType
  // ProtoMember(5)
  requiredItemAmount: number
  // ProtoMember(6)
  requiredCardLevel: number
  // ProtoMember(7)
  targetId: string
  // ProtoMember(8)
  value: number
}
export type CardLevelReleaseTarget = {
  // ProtoMember(1)
  type: CardLevelReleaseType
  // ProtoMember(2)
  number: number
}
export type ActivityFanEventWord = {
  // ProtoMember(1)
  word: string
  // ProtoMember(2)
  voiceAssetId: string
}
export type ConditionSetting = {
  // ProtoMember(1)
  satisfyCondition: ConditionSatisfyCondition
  // ProtoMember(2)
  notSatisfyCondition: ConditionNotSatisfyCondition
  // ProtoMember(3)
  startHours: ConditionStartHours
  // ProtoMember(4)
  notLoginDays: ConditionNotLoginDays
  // ProtoMember(5)
  accumulationLoginDays: ConditionAccumulationLoginDays
  // ProtoMember(6)
  managerLevel: ConditionManagerLevel
  // ProtoMember(7)
  deckMaxOverallValue: ConditionDeckMaxOverallValue
  // ProtoMember(8)
  clearQuest: ConditionClearQuest
  // ProtoMember(9)
  maxQuestScoreRank: ConditionMaxQuestScoreRank
  // ProtoMember(10)
  dailyQuestClear: ConditionDailyQuestClear
  // ProtoMember(11)
  dailyAreaClear: ConditionDailyAreaClear
  // ProtoMember(12)
  animeStoryPoint: ConditionAnimeStoryPoint
  // ProtoMember(13)
  gameStoryPoint: ConditionGameStoryPoint
  // ProtoMember(14)
  groupStoryPoint: ConditionGroupStoryPoint
  // ProtoMember(15)
  readStory: ConditionReadStory
  // ProtoMember(16)
  clearMission: ConditionClearMission
  // ProtoMember(17)
  obtainCharacter: ConditionObtainCharacter
  // ProtoMember(18)
  obtainCard: ConditionObtainCard
  // ProtoMember(19)
  obtainCostume: ConditionObtainCostume
  // ProtoMember(20)
  wearCostume: ConditionWearCostume
  // ProtoMember(21)
  cardLevel: ConditionCardLevel
  // ProtoMember(22)
  cardRarity: ConditionCardRarity
  // ProtoMember(23)
  photoReportPityTimer: ConditionPhotoReportPityTimer
  // ProtoMember(24)
  activityLevel: ConditionActivityLevel
  // ProtoMember(25)
  exchangeCount: ConditionExchangeCount
  // ProtoMember(26)
  term: ConditionTerm
  // ProtoMember(27)
  dayOfWeek: ConditionDayOfWeek
  // ProtoMember(28)
  time: ConditionTime
  // ProtoMember(29)
  obtainItem: ConditionObtainItem
  // ProtoMember(30)
  itemAmount: ConditionItemAmount
  // ProtoMember(31)
  gold: ConditionGold
  // ProtoMember(32)
  stone: ConditionStone
  // ProtoMember(33)
  obtainEmblem: ConditionObtainEmblem
  // ProtoMember(34)
  openGacha: ConditionOpenGacha
  // ProtoMember(35)
  drawGacha: ConditionDrawGacha
  // ProtoMember(36)
  purchaseShop: ConditionPurchaseShop
  // ProtoMember(37)
  platformType: ConditionPlatformType
  // ProtoMember(38)
  division: ConditionDivision
  // ProtoMember(39)
  joinedGuild: ConditionJoinedGuild
  // ProtoMember(40)
  activityFanEventLevel: ConditionActivityFanEventLevel
  // ProtoMember(41)
  activityPromotionLevel: ConditionActivityPromotionLevel
  // ProtoMember(42)
  activityRefreshLevel: ConditionActivityRefreshLevel
  // ProtoMember(43)
  contestQuestTotalScore: ConditionContestQuestTotalScore
  // ProtoMember(45)
  clearArea: ConditionClearArea
  // ProtoMember(46)
  reliability: ConditionReliability
  // ProtoMember(47)
  hierarchyDetailGradeId: ConditionHierarchyDetailGradeId
  // ProtoMember(48)
  hierarchyPointGte: ConditionHierarchyPointGte
  // ProtoMember(49)
  diary: ConditionDiary
  // ProtoMember(50)
  staffTrainTotalCount: ConditionStaffTrainTotalCount
  // ProtoMember(51)
  photoShootTotalCount: ConditionPhotoShootTotalCount
  // ProtoMember(52)
  tourAreaProgress: ConditionTourAreaProgress
  // ProtoMember(53)
  activityFanEventBestScoreRank: ConditionActivityFanEventBestScoreRank
  // ProtoMember(54)
  activityFanEventTotalCount: ConditionActivityFanEventTotalCount
  // ProtoMember(55)
  activityPromotionTotalHours: ConditionActivityPromotionTotalHours
  // ProtoMember(56)
  activityRefreshTotalCount: ConditionActivityRefreshTotalCount
  // ProtoMember(57)
  liveCharacterHighestScore: ConditionLiveCharacterHighestScore
  // ProtoMember(58)
  fanAmount: ConditionFanAmount
  // ProtoMember(59)
  highestSalary: ConditionHighestSalary
  // ProtoMember(60)
  characterPhotoAmount: ConditionCharacterPhotoAmount
  // ProtoMember(61)
  tutorialStep: ConditionTutorialStep
  // ProtoMember(62)
  forumCreateReplyCount: ConditionForumCreateReplyCount
  // ProtoMember(63)
  birthday: ConditionBirthDay
  // ProtoMember(64)
  finishedMessage: ConditionFinishedMessage
  // ProtoMember(65)
  pvpOpen: ConditionPvpOpen
  // ProtoMember(66)
  obtainAccessory: ConditionObtainAccessory
  // ProtoMember(67)
  accessoryAmount: ConditionAccessoryAmount
  // ProtoMember(68)
  wearLiveCostume: ConditionWearLiveCostume
  // ProtoMember(69)
  contestQuestHighestRank: ConditionContestQuestHighestRank
}
export type ConditionStartHours = {
  // ProtoMember(1)
  hoursLte: number
}
export type ConditionNotLoginDays = {
  // ProtoMember(1)
  daysGte: number
}
export type ConditionAccumulationLoginDays = {
  // ProtoMember(1)
  daysGte: number
}
export type ConditionManagerLevel = {
  // ProtoMember(1)
  levelLte: number
  // ProtoMember(2)
  levelGte: number
}
export type ConditionDeckMaxOverallValue = {
  // ProtoMember(1)
  valueLte: number
  // ProtoMember(2)
  valueGte: number
}
export type ConditionAnimeStoryPoint = {
  // ProtoMember(1)
  pointGte: string
}
export type ConditionGameStoryPoint = {
  // ProtoMember(1)
  pointGte: string
}
export type ConditionGroupStoryPoint = {
  // ProtoMember(1)
  pointGte: string
}
export type ConditionPhotoReportPityTimer = {
  // ProtoMember(1)
  thresholdGte: number
}
export type ConditionExchangeCount = {
  // ProtoMember(1)
  exchangeId: string
  // ProtoMember(2)
  countGte: number
  // ProtoMember(3)
  countLte: number
}
export type ConditionTerm = {
  // ProtoMember(1)
  nowAfter: string
  // ProtoMember(2)
  nowBefore: string
}
export type ConditionDayOfWeek = {
  // ProtoMember(1)
  dayOfWeekType: DayOfWeekType
}
export type ConditionTime = {
  // ProtoMember(1)
  nowAfter: string
  // ProtoMember(2)
  nowBefore: string
}
export type ConditionGold = {
  // ProtoMember(1)
  goldGte: string
}
export type ConditionStone = {
  // ProtoMember(1)
  stoneGte: string
}
export type ConditionDrawGacha = {
  // ProtoMember(1)
  gachaButtonIds: string[]
}
export type ConditionPurchaseShop = {
  // ProtoMember(1)
  shopItemId: string
}
export type ConditionPlatformType = {
  // ProtoMember(1)
  platformType: PlatformType
}
export type ConditionDivision = {
  // ProtoMember(1)
  divisionOrderGte: number
  // ProtoMember(2)
  divisionOrderLte: number
}
export type ConditionJoinedGuild = {
  // ProtoMember(1)
  joinedGuildType: JoinedGuildType
}
export type ConditionActivityFanEventLevel = {
  // ProtoMember(1)
  fanEventId: string
  // ProtoMember(2)
  levelGte: number
}
export type ConditionActivityPromotionLevel = {
  // ProtoMember(1)
  promotionId: string
  // ProtoMember(2)
  levelGte: number
}
export type ConditionActivityRefreshLevel = {
  // ProtoMember(1)
  refreshId: string
  // ProtoMember(2)
  levelGte: number
}
export type ConditionContestQuestTotalScore = {
  // ProtoMember(1)
  scoreGte: string
}
export type ConditionHierarchyPointGte = {
  // ProtoMember(1)
  hierarchyPointGte: string
}
export type ConditionDiary = {
  // ProtoMember(1)
  isReadAllDiary: boolean
  // ProtoMember(2)
  isReadLastDiary: boolean
}
export type ConditionStaffTrainTotalCount = {
  // ProtoMember(1)
  countGte: number
}
export type ConditionPhotoShootTotalCount = {
  // ProtoMember(1)
  countGte: number
}
export type ConditionTourAreaProgress = {
  // ProtoMember(1)
  tourId: string
  // ProtoMember(2)
  areaGte: number
}
export type ConditionActivityFanEventBestScoreRank = {
  // ProtoMember(1)
  rankType: ResultRankType
  // ProtoMember(2)
  plus: number
}
export type ConditionActivityFanEventTotalCount = {
  // ProtoMember(1)
  countGte: number
}
export type ConditionActivityPromotionTotalHours = {
  // ProtoMember(1)
  hoursGte: number
}
export type ConditionActivityRefreshTotalCount = {
  // ProtoMember(1)
  countGte: number
}
export type ConditionHighestSalary = {
  // ProtoMember(1)
  highestSalaryGte: string
}
export type ConditionTutorialStep = {
  // ProtoMember(1)
  tutorialType: TutorialType
  // ProtoMember(2)
  stepGte: number
  // ProtoMember(3)
  stepLte: number
}
export type ConditionForumCreateReplyCount = {
  // ProtoMember(1)
  createReplyCount: string
}
export type ConditionBirthDay = {
  // ProtoMember(1)
  isBirthDay: boolean
}
export type ConditionPvpOpen = {
  // ProtoMember(1)
  isPvpOpen: boolean
}
export type ConsumptionResource = {
  // ProtoMember(1)
  resourceType: ResourceType
  // ProtoMember(2)
  resourceIds: string[]
  // ProtoMember(3)
  subResourceIds: string[]
  // ProtoMember(4)
  amount: number
}
export type HelpContent = {
  // ProtoMember(1)
  helpContentId: string
  // ProtoMember(2)
  title: string
  // ProtoMember(3)
  text: string
  // ProtoMember(4)
  order: number
  // ProtoMember(5)
  targetTypes: HelpDisplayTargetType[]
  // ProtoMember(6)
  assetIds: string[]
}
export type CharacterTalk = {
  // ProtoMember(1)
  text: string
  // ProtoMember(2)
  voiceAssetId: string
  // ProtoMember(3)
  motionAssetId: string
  // ProtoMember(4)
  additionMotionAssetId: string
}
export type MusicDigest = {
  // ProtoMember(1)
  startMillisecond: number
  // ProtoMember(2)
  endMillisecond: number
  // ProtoMember(3)
  loop: boolean
}
export type PhotoAbilityLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(2)
  value: number
}
export type PhotoAbilityGrade = {
  // ProtoMember(1)
  grade: number
  // ProtoMember(2)
  bonusPermil: number
  // ProtoMember(3)
  bonusValue: number
  // ProtoMember(4)
  type: PhotoAbilityGradeType
}
export type RewardResource = {
  // ProtoMember(1)
  resourceType: ResourceType
  // ProtoMember(2)
  resourceId: string
  // ProtoMember(3)
  amount: number
}
export type StoryChapter = {
  // ProtoMember(1)
  chapter: number
  // ProtoMember(2)
  route: number
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  episodes: StoryEpisode[]
}
export type TutorialStep = {
  // ProtoMember(1)
  step: number
  // ProtoMember(2)
  subStep: number
  // ProtoMember(3)
  navigationType: TutorialNavigationType
  // ProtoMember(4)
  navigationPositionType: TutorialNavigationPositionType
  // ProtoMember(5)
  texts: string[]
  // ProtoMember(6)
  assetIds: string[]
}
