// Generated from ProtoApi.cs

import type {
  AccessoryCategoryType,
  ActivityCampaignEffectType,
  ActivityFanEventHappeningType,
  ActivityFanEventType,
  AttributeType,
  BacksideAreaType,
  BacksideDifficultyType,
  BacksidePanelAttributeType,
  BacksidePanelType,
  BacksidePracticeRankType,
  BacksideStageType,
  BacksideType,
  BoxGachaItemType,
  DeckEditType,
  DivisionCannotMoveReasonType,
  DokanType,
  ErrorCode,
  ForumListReplyRequestType,
  FunctionMaintenanceType,
  GachaAnimationEmbeddedType,
  GachaRewardPatternType,
  GachaType,
  GiftFilterType,
  GiftSortType,
  GraphicType,
  GvgMatchResultType,
  HomePositionType,
  ItemType,
  LinkType,
  MoodType,
  MusicChartType,
  ParameterType,
  PhotoImageRequestType,
  PhotoImageType,
  PhotoShootingActionType,
  ProfileBackgroundType,
  ProfileLayoutType,
  ProviderType,
  ResetTimingType,
  ResourceType,
  ResultRankType,
  ShopConditionRewardStatusType,
  ShopType,
  SkillEfficacyType,
  SkillFailureType,
  SkillPossessionType,
  StatusEffectType,
  TourAreaType,
  TourEnemyType,
  TourStepType,
  TourType,
  TutorialType,
} from './ProtoEnum'
import type { Accessory, HelpCategory } from './ProtoMaster'
import type {
  ConsumptionResult,
  MasterTag,
  Payslip,
  Reward,
  RewardResult,
  User,
  UserAccessory,
  UserArea,
  UserBalance,
  UserCard,
  UserCardSupport,
  UserCharacter,
  UserCharacterMusic,
  UserCostume,
  UserDeck,
  UserDecoration,
  UserEmblem,
  UserGachaButton,
  UserGift,
  UserGiftHistory,
  UserHierarchy,
  UserHomePosition,
  UserHomeTalk,
  UserItem,
  UserLoginBonus,
  UserMessage,
  UserMessageSchedule,
  UserMission,
  UserMusic,
  UserNotification,
  UserPhoto,
  UserPhotoReport,
  UserPoint,
  UserProfile,
  UserPublic,
  UserQuest,
  UserStaff,
  UserStory,
  UserTelephone,
  UserTotalCount,
  UserTutorial,
} from './ProtoTransaction'

export type ActiveFanEvent = {
  // ProtoMember(1)
  characterIds: string[]
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  subName: string
  // ProtoMember(4)
  level: number
  // ProtoMember(5)
  finishTime: string
  // ProtoMember(6)
  currentCheerPoint: number
}
export type ActivePromotion = {
  // ProtoMember(1)
  characterIds: string[]
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  subName: string
  // ProtoMember(4)
  level: number
  // ProtoMember(5)
  finishTime: string
  // ProtoMember(6)
  campaignEffects: ActivityCampaignEffect[]
}
export type ActiveRefresh = {
  // ProtoMember(1)
  characterIds: string[]
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  subName: string
  // ProtoMember(4)
  finishTime: string
}
export type ActivityCharacterInfo = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  costumeId: string
}
export type ActivityLessonProgress = {
  // ProtoMember(1)
  stepRewardGold: number
  // ProtoMember(2)
  stepRewardManagerExp: number
  // ProtoMember(3)
  stepRewardCardEnhanceItem: number
  // ProtoMember(4)
  rewardGoldAmount: number
  // ProtoMember(5)
  rewardManagerExpAmount: number
  // ProtoMember(6)
  rewardCardEnhanceItemAmount: number
  // ProtoMember(7)
  lastReceiveTime: string
  // ProtoMember(8)
  maxRewardTime: string
  // ProtoMember(9)
  dailyPromoteCount: number
  // ProtoMember(10)
  currentAreaId: string
}
export type BacksideCardLiveAbilityInfo = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  level: number
  // ProtoMember(3)
  rarity: number
  // ProtoMember(4)
  liveAbilityLevel: string
  // ProtoMember(5)
  liveAbilityId: string
}
export type BacksideDeckCardDetailInfo = {
  // ProtoMember(1)
  position: number
  // ProtoMember(2)
  cardId: string
  // ProtoMember(3)
  displayCharacterId: string
  // ProtoMember(4)
  displayCostumeId: string
  // ProtoMember(5)
  level: number
  // ProtoMember(6)
  rarity: number
  // ProtoMember(7)
  vocal: string
  // ProtoMember(8)
  dance: string
  // ProtoMember(9)
  visual: string
  // ProtoMember(10)
  stamina: string
  // ProtoMember(11)
  mental: string
  // ProtoMember(12)
  technique: string
  // ProtoMember(13)
  skillLevel1: number
  // ProtoMember(14)
  skillLevel2: number
  // ProtoMember(15)
  skillLevel3: number
  // ProtoMember(16)
  liveAbilityLevel: number
  // ProtoMember(17)
  part1Accessory: Accessory
  // ProtoMember(18)
  part2Accessory: Accessory
  // ProtoMember(19)
  photos: UserPhoto[]
  // ProtoMember(20)
  staminaPermil: number
  // ProtoMember(21)
  supported: boolean
}
export type BacksideDeckCardInfo = {
  // ProtoMember(1)
  position: number
  // ProtoMember(2)
  cardId: string
  // ProtoMember(3)
  level: number
  // ProtoMember(4)
  rarity: number
}
export type BacksideDeckCardStaminaInfo = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  currentMaxStamina: string
  // ProtoMember(3)
  currentRemainingStamina: string
}
export type BacksideDifficultyInfo = {
  // ProtoMember(1)
  backsideDifficultyNumber: number
  // ProtoMember(2)
  managerLevel: number
  // ProtoMember(3)
  cleared: boolean
  // ProtoMember(4)
  unlockConditionId: string
  // ProtoMember(5)
  unlocked: boolean
  // ProtoMember(6)
  stageTotalResultInfo: BacksidePracticeStageTotalResultInfo
  // ProtoMember(7)
  practiceStageInfos: BacksidePracticeStageInfo[]
  // ProtoMember(8)
  finalStageInfo: BacksideFinalStageInfo
}
export type BacksideFinalStageInfo = {
  // ProtoMember(1)
  number: number
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  maxActionCount: number
  // ProtoMember(4)
  backsidePanelGoalSettingId: string
  // ProtoMember(5)
  stageResultInfo: BacksideFinalStageResultInfo
  // ProtoMember(6)
  stageHalfwayInfo: BacksideFinalStageHalfwayInfo
  // ProtoMember(7)
  pickupCharacterIDs: string[]
}
export type BacksideLiveBonus = {
  // ProtoMember(1)
  liveBonusId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  liveAbilityId: string
  // ProtoMember(4)
  liveAbilityLevel: number
  // ProtoMember(5)
  powerPermil: number
}
export type BacksidePanelGoalInfo = {
  // ProtoMember(1)
  musicId: string
  // ProtoMember(2)
  musicChartPatternId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  clearScore: number
  // ProtoMember(5)
  maxCapacity: number
  // ProtoMember(6)
  stageId: string
  // ProtoMember(7)
  backsideQuestSettingId: string
  // ProtoMember(8)
  mentalThreshold: number
}
export type BacksidePanelLiveInfo = {
  // ProtoMember(1)
  musicId: string
  // ProtoMember(2)
  musicChartPatternId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  clearScore: number
  // ProtoMember(5)
  maxCapacity: number
  // ProtoMember(6)
  stageId: string
  // ProtoMember(7)
  backsideQuestSettingId: string
  // ProtoMember(8)
  mentalThreshold: number
}
export type BacksidePanelPvpInfo = {
  // ProtoMember(1)
  musicId: string
  // ProtoMember(2)
  musicChartPatternId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  clearScore: number
  // ProtoMember(5)
  maxCapacity: number
  // ProtoMember(6)
  stageId: string
  // ProtoMember(7)
  opponentInfo: BacksideOpponentInfo
  // ProtoMember(8)
  backsideQuestSettingId: string
  // ProtoMember(9)
  mentalThreshold: number
}
export type BacksidePracticeStageInfo = {
  // ProtoMember(1)
  number: number
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  maxActionCount: number
  // ProtoMember(4)
  backsidePanelGoalSettingId: string
  // ProtoMember(5)
  stageResultInfo: BacksidePracticeStageResultInfo
  // ProtoMember(6)
  stageHalfwayInfo: BacksidePracticeStageHalfwayInfo
  // ProtoMember(7)
  pickupCharacterIDs: string[]
}
export type BacksideRankingInfo = {
  // ProtoMember(1)
  userId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  managerLevel: number
  // ProtoMember(4)
  totalPracticeScore: string
  // ProtoMember(5)
  finalScore: string
  // ProtoMember(6)
  rank: number
  // ProtoMember(7)
  emblemId: string
  // ProtoMember(8)
  deckCardInfos: BacksideDeckCardInfo[]
}
export type BacksideRankingRewardInfo = {
  // ProtoMember(1)
  rankFrom: number
  // ProtoMember(2)
  rewardId: string
}
export type Banner = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  text: string
  // ProtoMember(4)
  linkType: LinkType
  // ProtoMember(5)
  linkDetail: string
  // ProtoMember(6)
  order: number
  // ProtoMember(7)
  viewConditionId: string
}
export type BoxGachaItem = {
  // ProtoMember(1)
  order: number
  // ProtoMember(2)
  itemType: BoxGachaItemType
  // ProtoMember(3)
  rewardId: string
  // ProtoMember(4)
  liveBonusGroupId: string
  // ProtoMember(5)
  initialStock: number
  // ProtoMember(6)
  stock: number
  // ProtoMember(7)
  isLimited: boolean
  // ProtoMember(8)
  assetId: string
  // ProtoMember(9)
  description: string
}
export type DivisionInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  levelAvg: number
}
export type EventMissionInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  unlocked: boolean
  // ProtoMember(8)
  userMissions: UserMission[]
}
export type EventStoryInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  episodes: EventStoryEpisodeInfo[]
}
export type ExchangeBooth = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  bannerAssetId: string
  // ProtoMember(4)
  requiredResourceType: ResourceType
  // ProtoMember(5)
  requiredResourceId: string
  // ProtoMember(6)
  resetTimingType: ResetTimingType
  // ProtoMember(7)
  nextResetTime: string
  // ProtoMember(8)
  unlocked: boolean
  // ProtoMember(9)
  endTime: string
  // ProtoMember(10)
  linkType: LinkType
  // ProtoMember(11)
  linkDetail: string
  // ProtoMember(12)
  order: number
  // ProtoMember(13)
  limited: boolean
  // ProtoMember(14)
  colorCode: string
  // ProtoMember(15)
  backgroundColorCode: string
  // ProtoMember(16)
  exchanges: ExchangeItem[]
  // ProtoMember(17)
  costumeId: string
  // ProtoMember(18)
  iconAssetId: string
  // ProtoMember(19)
  viewConditionId: string
  // ProtoMember(20)
  unlockConditionId: string
}
export type ExchangeItem = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  rewardId: string
  // ProtoMember(4)
  resetTimingType: ResetTimingType
  // ProtoMember(5)
  nextResetTime: string
  // ProtoMember(6)
  unlocked: boolean
  // ProtoMember(7)
  name: string
  // ProtoMember(8)
  description: string
  // ProtoMember(9)
  exchangeLimit: number
  // ProtoMember(10)
  leftCount: number
  // ProtoMember(11)
  requiredResourceAmount: string
  // ProtoMember(12)
  order: number
  // ProtoMember(13)
  viewConditionId: string
  // ProtoMember(14)
  unlockConditionId: string
}
export type FanEvent = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  subName: string
  // ProtoMember(4)
  type: ActivityFanEventType
  // ProtoMember(5)
  unlockConditionId: string
  // ProtoMember(6)
  isUnlocked: boolean
  // ProtoMember(7)
  activityPerformanceId: string
  // ProtoMember(8)
  level: number
  // ProtoMember(9)
  exp: number
  // ProtoMember(10)
  nextLevelRequiredExp: number
  // ProtoMember(11)
  requiredStamina: number
  // ProtoMember(12)
  nextLevelUnlockConditionId: string
  // ProtoMember(13)
  isNextLevelUnlocked: boolean
  // ProtoMember(14)
  stepConsumptionStamina: number
  // ProtoMember(15)
  fixedRewardId: string
  // ProtoMember(16)
  additionalRewardId: string
  // ProtoMember(17)
  rankSRewardId: string
  // ProtoMember(18)
  rankARewardId: string
  // ProtoMember(19)
  rankBRewardId: string
  // ProtoMember(20)
  rankCRewardId: string
  // ProtoMember(21)
  rankDRewardId: string
  // ProtoMember(22)
  viewConditionId: string
  // ProtoMember(23)
  campaignDropRewardIds: string[]
}
export type FanEventCharacterInfo = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  costumeId: string
  // ProtoMember(3)
  activityStamina: number
  // ProtoMember(4)
  completedStep: number
  // ProtoMember(5)
  finishTime: string
  // ProtoMember(6)
  activityPoint: number
  // ProtoMember(7)
  maxStep: number
  // ProtoMember(8)
  lastSavedActivityPoint: number
}
export type FanEventProgress = {
  // ProtoMember(1)
  activityFanEventId: string
  // ProtoMember(2)
  activityFanEventName: string
  // ProtoMember(3)
  activityFanEventSubName: string
  // ProtoMember(4)
  activityFanEventType: ActivityFanEventType
  // ProtoMember(5)
  activityFanEventLevel: number
  // ProtoMember(6)
  characters: FanEventCharacterInfo[]
  // ProtoMember(7)
  startTime: string
  // ProtoMember(8)
  stepConsumptionStamina: number
  // ProtoMember(9)
  stepActivityPointCoefficientPermil: number
  // ProtoMember(10)
  rankPatterns: FanEventRankPattern[]
  // ProtoMember(11)
  usedSuperModeItem: boolean
  // ProtoMember(12)
  activityPerformanceId: string
  // ProtoMember(13)
  maleNpcSpineId: string
  // ProtoMember(14)
  femaleNpcSpineId: string
  // ProtoMember(15)
  specialFanCheerPoint: number
  // ProtoMember(16)
  currentCheerPoint: number
  // ProtoMember(17)
  newSpecialFansCount: number
  // ProtoMember(18)
  speedRate: number
}
export type FanEventRankingInfo = {
  // ProtoMember(1)
  rank: string
  // ProtoMember(2)
  score: string
  // ProtoMember(3)
  userId: string
  // ProtoMember(4)
  name: string
  // ProtoMember(5)
  managerLevel: number
  // ProtoMember(6)
  characterIds: string[]
  // ProtoMember(7)
  emblemId: string
}
export type FavoriteCardInfo = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  rarity: number
}
export type GachaButtonInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  todayCount: number
  // ProtoMember(3)
  totalCount: number
  // ProtoMember(4)
  drawTime: string
}
export type GachaExchangeInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  exchangedCount: number
  // ProtoMember(3)
  exchangedTime: string
}
export type GachaHistory = {
  // ProtoMember(1)
  gachaType: GachaType
  // ProtoMember(2)
  drawTime: string
  // ProtoMember(3)
  gachaId: string
  // ProtoMember(4)
  resourceType: ResourceType
  // ProtoMember(5)
  resourceId: string
  // ProtoMember(6)
  amount: number
}
export type GachaInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  unlocked: boolean
  // ProtoMember(3)
  buttons: GachaButtonInfo[]
  // ProtoMember(4)
  exchanges: GachaExchangeInfo[]
  // ProtoMember(5)
  itemGachaRewards: Reward[]
  // ProtoMember(6)
  noticeInfo: NoticeInfo
  // ProtoMember(7)
  selectedCardIds: string[]
}
export type GuildGvgMatchRankInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  managerLevel: number
  // ProtoMember(3)
  point: string
  // ProtoMember(4)
  rank: number
  // ProtoMember(5)
  emblemId: string
}
export type GuildGvgSeasonMatchResult = {
  // ProtoMember(1)
  matchNumber: number
  // ProtoMember(2)
  opponentGuildId: string
  // ProtoMember(3)
  point: string
  // ProtoMember(4)
  opponentPoint: string
  // ProtoMember(5)
  resultType: GvgMatchResultType
  // ProtoMember(6)
  mvpInfo: GuildGvgMatchRankInfo
}
export type GuildParam = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  weaknessRank: number
  // ProtoMember(3)
  memberAmountRank: number
  // ProtoMember(4)
  prevSeasonResult: GuildGvgSeasonResult
}
export type GvgCurrentSeasonMatchInfo = {
  // ProtoMember(1)
  matchNumber: number
  // ProtoMember(2)
  endTime: string
  // ProtoMember(3)
  opponentGuildId: string
  // ProtoMember(4)
  opponentRank: number
  // ProtoMember(5)
  opponentPoint: string
  // ProtoMember(6)
  opponentWinCount: number
  // ProtoMember(7)
  opponentLoseCount: number
  // ProtoMember(8)
  opponentDrawCount: number
}
export type GvgGuildRankingRewardInfo = {
  // ProtoMember(1)
  rankFrom: number
  // ProtoMember(2)
  rewardId: string
}
export type GvgRankingRewardInfo = {
  // ProtoMember(1)
  order: number
  // ProtoMember(2)
  rankRateFromPercent: number
  // ProtoMember(3)
  rankFrom: number
  // ProtoMember(4)
  rewardId: string
}
export type GvgSeasonInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  startTime: string
  // ProtoMember(4)
  aggregateEndTime: string
  // ProtoMember(5)
  challengeRewardId: string
}
export type GvgSeasonMatchInfo = {
  // ProtoMember(1)
  matchNumber: number
  // ProtoMember(2)
  opponentGuildId: string
  // ProtoMember(3)
  point: string
  // ProtoMember(4)
  opponentPoint: string
  // ProtoMember(5)
  resultType: GvgMatchResultType
  // ProtoMember(6)
  memberAmountWeightPermil: number
  // ProtoMember(7)
  opponentMemberAmountWeightPermil: number
}
export type HierarchyChangeInfo = {
  // ProtoMember(1)
  addHierarchyPoint: string
  // ProtoMember(2)
  oldDetailGradeId: string
  // ProtoMember(3)
  newDetailGradeId: string
  // ProtoMember(4)
  currentRank: number
}
export type HierarchyDivisionRewardInfo = {
  // ProtoMember(1)
  hierarchyDivisionRewardId: string
  // ProtoMember(2)
  canReceive: boolean
  // ProtoMember(3)
  haveReceived: boolean
  // ProtoMember(4)
  firstUserInfo: ProfileInfo
}
export type HierarchyNotiInfo = {
  // ProtoMember(1)
  rewardIds: string[]
  // ProtoMember(2)
  divisionRewardIds: string[]
  // ProtoMember(3)
  currentDetailGradeId: string
  // ProtoMember(4)
  currentRank: number
}
export type HierarchyProfileInfo = {
  // ProtoMember(1)
  detailGradeId: string
  // ProtoMember(2)
  rank: number
}
export type HierarchyRankUserInfo = {
  // ProtoMember(1)
  userId: string
  // ProtoMember(2)
  currentRank: number
  // ProtoMember(3)
  managerName: string
  // ProtoMember(4)
  managerLevel: number
  // ProtoMember(5)
  currentDetailGradeId: string
  // ProtoMember(6)
  currentPoint: string
  // ProtoMember(7)
  emblemId: string
  // ProtoMember(8)
  deckName: string
  // ProtoMember(9)
  cardInfos: LastCardInfo[]
}
export type HierarchyRewardInfo = {
  // ProtoMember(1)
  hierarchyRewardId: string
  // ProtoMember(2)
  canReceive: boolean
  // ProtoMember(3)
  haveReceived: boolean
}
export type HomeBacksideInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  startTime: string
  // ProtoMember(4)
  endTime: string
  // ProtoMember(5)
  aggregateEndTime: string
  // ProtoMember(6)
  exchangeEndTime: string
  // ProtoMember(7)
  assetId: string
  // ProtoMember(8)
  bannerAssetId: string
  // ProtoMember(9)
  order: number
  // ProtoMember(10)
  unlockConditionId: string
  // ProtoMember(11)
  isUnlocked: boolean
  // ProtoMember(12)
  eventMissionId: string
}
export type HomeEnterResponse = {
  // ProtoMember(1)
  gachaInfos: GachaInfo[]
  // ProtoMember(2)
  fanEventInfo: FanEventInfo
  // ProtoMember(3)
  promotionInfo: PromotionInfo
  // ProtoMember(4)
  refreshInfo: RefreshInfo
  // ProtoMember(5)
  lessonProgress: ActivityLessonProgress
  // ProtoMember(6)
  functionMaintenanceInfos: FunctionMaintenanceInfo[]
  // ProtoMember(7)
  bannerInfo: BannerInfo
  // ProtoMember(8)
  lastFriendApprovedTime: string
  // ProtoMember(9)
  gvgInfo: CurrentGvgInfo
  // ProtoMember(10)
  shopIds: string[]
  // ProtoMember(11)
  exchangeBoothIds: string[]
  // ProtoMember(12)
  isRemainingDiary: boolean
  // ProtoMember(13)
  notiStoneShopItem: NotiShopItem
  // ProtoMember(14)
  notiNormalShopItem: NotiShopItem
  // ProtoMember(15)
  payslip: Payslip
  // ProtoMember(16)
  currentMainAreaId: string
  // ProtoMember(17)
  eventInfo: HomeEventInfo
  // ProtoMember(18)
  pvpInfo: HomePvpInfo
  // ProtoMember(19)
  hierarchyNotiInfo: HierarchyNotiInfo
  // ProtoMember(20)
  isDailyQuestPlayable: boolean
  // ProtoMember(21)
  currentTowerQuestId: string
  // ProtoMember(22)
  hasUnplayedContest: boolean
  // ProtoMember(23)
  eventStoryInfos: EventStoryInfo[]
  // ProtoMember(24)
  photoActivities: PhotoActivity[]
  // ProtoMember(25)
  photoMusics: PhotoMusic[]
  // ProtoMember(26)
  photoStages: PhotoStage[]
  // ProtoMember(27)
  friendAppliedCount: number
  // ProtoMember(28)
  purchasedConditionRewardShopInfo: PurchasedConditionRewardShopInfo[]
  // ProtoMember(100)
  pvpRewardResultInfo: PvpRewardResultInfo
  // ProtoMember(101)
  gvgRewardResultInfo: GvgRewardResultInfo
  // ProtoMember(102)
  tourRewardResultInfos: TourRewardResultInfo[]
  // ProtoMember(103)
  backsideRewardResultInfos: BacksideRewardResultInfo[]
  // ProtoMember(104)
  photoContestRewardResultInfos: PhotoContestRewardResultInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type HomeEventMissionInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  unlocked: boolean
}
export type HomeMarathonInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  startTime: string
  // ProtoMember(4)
  endTime: string
  // ProtoMember(5)
  exchangeEndTime: string
  // ProtoMember(6)
  assetId: string
  // ProtoMember(7)
  bannerAssetId: string
  // ProtoMember(8)
  order: number
  // ProtoMember(9)
  unlockConditionId: string
  // ProtoMember(10)
  isUnlocked: boolean
  // ProtoMember(11)
  eventMissionId: string
}
export type HomePhotoContestInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  startTime: string
  // ProtoMember(4)
  endTime: string
  // ProtoMember(5)
  aggregateEndTime: string
  // ProtoMember(6)
  exchangeEndTime: string
  // ProtoMember(7)
  assetId: string
  // ProtoMember(8)
  bannerAssetId: string
  // ProtoMember(9)
  order: number
  // ProtoMember(10)
  unlockConditionId: string
  // ProtoMember(11)
  isUnlocked: boolean
}
export type HomeTourInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  startTime: string
  // ProtoMember(4)
  endTime: string
  // ProtoMember(5)
  aggregateEndTime: string
  // ProtoMember(6)
  exchangeEndTime: string
  // ProtoMember(7)
  assetId: string
  // ProtoMember(8)
  bannerAssetId: string
  // ProtoMember(9)
  order: number
  // ProtoMember(10)
  unlockConditionId: string
  // ProtoMember(11)
  isUnlocked: boolean
  // ProtoMember(12)
  eventMissionId: string
}
export type LastCardInfo = {
  // ProtoMember(1)
  position: number
  // ProtoMember(2)
  cardId: string
  // ProtoMember(3)
  level: number
  // ProtoMember(4)
  rarity: number
}
export type LiveBattleCardInfo = {
  // ProtoMember(1)
  position: number
  // ProtoMember(2)
  cardId: string
  // ProtoMember(3)
  level: number
  // ProtoMember(4)
  rarity: number
  // ProtoMember(5)
  lightFanAmount: number
  // ProtoMember(6)
  middleFanAmount: number
  // ProtoMember(7)
  heavyFanAmount: number
}
export type LiveBattleQuestInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  stageId: string
  // ProtoMember(3)
  musicId: string
  // ProtoMember(4)
  musicChartPatternId: string
  // ProtoMember(5)
  position1AttributeType: AttributeType
  // ProtoMember(6)
  position2AttributeType: AttributeType
  // ProtoMember(7)
  position3AttributeType: AttributeType
  // ProtoMember(8)
  position4AttributeType: AttributeType
  // ProtoMember(9)
  position5AttributeType: AttributeType
  // ProtoMember(10)
  activeSkillWeightPermil: number
  // ProtoMember(11)
  specialSkillWeightPermil: number
  // ProtoMember(12)
  skillStaminaWeightPermil: number
  // ProtoMember(13)
  staminaRecoveryWeightPermil: number
  // ProtoMember(14)
  beatDanceWeightPermil: number
  // ProtoMember(15)
  beatVocalWeightPermil: number
  // ProtoMember(16)
  beatVisualWeightPermil: number
  // ProtoMember(17)
  maxCapacity: number
  // ProtoMember(18)
  mentalThreshold: number
  // ProtoMember(19)
  questPressureId: string
  // ProtoMember(20)
  questCharacterAdvantageId: string
  // ProtoMember(21)
  questAudienceAdvantageId: string
  // ProtoMember(22)
  moodType: MoodType
  // ProtoMember(23)
  liveBonusGroupId: string
}
export type LiveCardInfo = {
  // ProtoMember(1)
  position: number
  // ProtoMember(2)
  cardId: string
  // ProtoMember(3)
  level: number
  // ProtoMember(4)
  rarity: number
}
export type LiveCardResult = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(5)
  totalScore: string
}
export type LiveCharacterAssetInfo = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  costumeId: string
}
export type LiveDeckCard = {
  // ProtoMember(1)
  index: number
  // ProtoMember(2)
  cardId: string
  // ProtoMember(3)
  displayCharacterId: string
  // ProtoMember(4)
  displayCostumeId: string
  // ProtoMember(5)
  level: number
  // ProtoMember(6)
  rarity: number
  // ProtoMember(7)
  vocal: string
  // ProtoMember(8)
  dance: string
  // ProtoMember(9)
  visual: string
  // ProtoMember(10)
  stamina: string
  // ProtoMember(11)
  startStamina: string
  // ProtoMember(12)
  mental: string
  // ProtoMember(13)
  technique: string
  // ProtoMember(14)
  skillLevel1: number
  // ProtoMember(15)
  skillLevel2: number
  // ProtoMember(16)
  skillLevel3: number
  // ProtoMember(17)
  audienceAmount: number
  // ProtoMember(18)
  skills: LiveDeckCardSkill[]
}
export type LiveDeckCardSkill = {
  // ProtoMember(1)
  index: number
  // ProtoMember(2)
  skillId: string
  // ProtoMember(3)
  skillLevel: number
  // ProtoMember(4)
  possessionType: SkillPossessionType
}
export type LiveRankingInfo = {
  // ProtoMember(1)
  userId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  managerLevel: number
  // ProtoMember(4)
  point: string
  // ProtoMember(5)
  rank: number
  // ProtoMember(6)
  cardInfos: LiveCardInfo[]
  // ProtoMember(7)
  emblemId: string
  // ProtoMember(8)
  deckName: string
}
export type LiveUserInfo = {
  // ProtoMember(1)
  index: number
  // ProtoMember(2)
  userId: string
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  emblemId: string
  // ProtoMember(5)
  userDeck: LiveUserDeck
  // ProtoMember(6)
  userResult: LiveUserResult
  // ProtoMember(7)
  isNpc: boolean
}
export type MarathonAccessoryInfo = {
  // ProtoMember(1)
  accessoryId: string
  // ProtoMember(2)
  categoryType: AccessoryCategoryType
  // ProtoMember(3)
  param1Permil: number
  // ProtoMember(4)
  param1Value: number
  // ProtoMember(5)
  param2Permil: number
  // ProtoMember(6)
  param2Value: number
}
export type MarathonBoxGachaInfo = {
  // ProtoMember(1)
  boxGachaId: string
  // ProtoMember(2)
  boxGachaItems: BoxGachaItem[]
  // ProtoMember(3)
  isFull: boolean
  // ProtoMember(4)
  currentMarathonPoint: number
  // ProtoMember(5)
  unlocked: boolean
  // ProtoMember(6)
  remainResetCount: number
}
export type MarathonInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  startTime: string
  // ProtoMember(4)
  endTime: string
  // ProtoMember(5)
  exchangeEndTime: string
  // ProtoMember(6)
  initialStamina: number
  // ProtoMember(7)
  staminaRecoveryMinutes: number
  // ProtoMember(8)
  assetId: string
  // ProtoMember(9)
  boxGachaGroupId: string
  // ProtoMember(10)
  eventStoryInfo: EventStoryInfo
  // ProtoMember(11)
  eventMissionInfo: EventMissionInfo
  // ProtoMember(12)
  noticeInfo: NoticeInfo
  // ProtoMember(13)
  staminaRecoveryItemId: string
  // ProtoMember(14)
  questUnlockItemId: string
}
export type MarathonLiveBonusInfo = {
  // ProtoMember(1)
  liveBonusId: string
  // ProtoMember(2)
  amount: number
}
export type MarathonPhotoAbilityInfo = {
  // ProtoMember(1)
  photoAbilityId: string
  // ProtoMember(2)
  effectValue: string
}
export type MarathonQuestInfo = {
  // ProtoMember(1)
  marathonQuestId: string
  // ProtoMember(2)
  unlocked: boolean
  // ProtoMember(3)
  difficultyLevelInfos: MarathonQuestDifficultyLevelInfo[]
  // ProtoMember(4)
  lastChallengeDifficultyNumber: number
  // ProtoMember(5)
  isUnlockable: boolean
  // ProtoMember(6)
  isPlayable: boolean
  // ProtoMember(7)
  playableCount: number
}
export type MarathonQuestStartResponse = {
  // ProtoMember(1)
  marathonId: string
  // ProtoMember(2)
  marathonQuestId: string
  // ProtoMember(3)
  marathonQuestDifficultyNumber: number
  // ProtoMember(4)
  result: LiveResult
  // ProtoMember(5)
  reward: QuestReward
  // ProtoMember(6)
  rankType: ResultRankType
  // ProtoMember(7)
  rankPlus: number
  // ProtoMember(8)
  rankPatterns: QuestRankPattern[]
  // ProtoMember(9)
  highestClearRankType: ResultRankType
  // ProtoMember(10)
  highestScore: string
  // ProtoMember(11)
  addMarathonPoint: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MarketItem = {
  // ProtoMember(1)
  number: number
  // ProtoMember(2)
  consumptionResourceType: ResourceType
  // ProtoMember(3)
  baseAmount: number
  // ProtoMember(4)
  discountAmount: number
  // ProtoMember(5)
  rewardId: string
  // ProtoMember(6)
  discountRatePermil: number
  // ProtoMember(7)
  soldOut: boolean
  // ProtoMember(8)
  unlockConditionId: string
}
export type MessageGroupInfo = {
  // ProtoMember(1)
  messageGroupId: string
  // ProtoMember(2)
  latestTimelineInfo: TimelineInfo
}
export type PhotoActivity = {
  // ProtoMember(1)
  photoActivityId: string
  // ProtoMember(2)
  isUnlocked: boolean
}
export type PhotoContestActivity = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  isUnlocked: boolean
}
export type PhotoContestInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  startTime: string
  // ProtoMember(4)
  endTime: string
  // ProtoMember(5)
  aggregateEndTime: string
  // ProtoMember(6)
  exchangeEndTime: string
  // ProtoMember(7)
  assetId: string
  // ProtoMember(8)
  eventStoryInfo: EventStoryInfo
  // ProtoMember(9)
  eventExchangeBoothInfo: EventExchangeBoothInfo
  // ProtoMember(10)
  noticeInfo: NoticeInfo
  // ProtoMember(11)
  totalBestShootEvaluationPoint: string
  // ProtoMember(12)
  totalBestShootEvaluationPointTime: string
  // ProtoMember(13)
  rank: string
  // ProtoMember(14)
  rankingRewardInfos: PhotoContestRankingRewardInfo[]
  // ProtoMember(15)
  sectionInfos: PhotoContestSectionInfo[]
  // ProtoMember(16)
  activities: PhotoContestActivity[]
  // ProtoMember(17)
  musics: PhotoContestQuestMusic[]
  // ProtoMember(18)
  stages: PhotoContestQuestStage[]
  // ProtoMember(19)
  dailyRewardResults: RewardResult[]
  // ProtoMember(20)
  onceShootingSubmitLimitCount: number
  // ProtoMember(21)
  currentPhotoAmount: string
  // ProtoMember(22)
  submittingItemId: string
}
export type PhotoContestQuestMusic = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  isUnlocked: boolean
}
export type PhotoContestQuestStage = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  isUnlocked: boolean
}
export type PhotoContestRankingInfo = {
  // ProtoMember(1)
  userId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  managerLevel: number
  // ProtoMember(4)
  totalBestShootEvaluationPoint: string
  // ProtoMember(5)
  rank: number
  // ProtoMember(6)
  emblemId: string
  // ProtoMember(7)
  bestPhotoInfos: PhotoContestPhotoInfo[]
}
export type PhotoContestRankingRewardInfo = {
  // ProtoMember(1)
  rankFrom: number
  // ProtoMember(2)
  rewardId: string
}
export type PhotoContestSectionInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  sectionRewardInfos: PhotoContestSectionRewardInfo[]
  // ProtoMember(3)
  bestShootAssetId: string
  // ProtoMember(4)
  bestShootEvaluationPoint: string
  // ProtoMember(5)
  totalSectionEvaluationPoint: string
  // ProtoMember(6)
  isUnlocked: boolean
}
export type PhotoContestSectionRewardInfo = {
  // ProtoMember(1)
  sectionRewardId: string
  // ProtoMember(2)
  canReceive: boolean
  // ProtoMember(3)
  haveReceived: boolean
}
export type PhotoContestSubmitShootingResponse = {
  // ProtoMember(1)
  evaluationPoint: string
  // ProtoMember(2)
  isBest: boolean
  // ProtoMember(3)
  totalSectionEvaluationPoint: string
  // ProtoMember(4)
  totalBestShotEvaluationPoint: string
  // ProtoMember(5)
  nextPhotoImageId: string
  // ProtoMember(6)
  tipDescription: string
  // ProtoMember(7)
  newCanReceiveSectionRewardIds: string[]
  // ProtoMember(8)
  rank: string
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoMusic = {
  // ProtoMember(1)
  musicId: string
  // ProtoMember(2)
  isUnlocked: boolean
}
export type PhotoStage = {
  // ProtoMember(1)
  stageId: string
  // ProtoMember(2)
  isUnlocked: boolean
}
export type ProfileFindUserResponse = {
  // ProtoMember(1)
  userId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  managerExp: string
  // ProtoMember(4)
  managerLevel: number
  // ProtoMember(5)
  divisionId: string
  // ProtoMember(6)
  guildId: string
  // ProtoMember(7)
  emblemId: string
  // ProtoMember(8)
  favoriteCard: FavoriteCardInfo
  // ProtoMember(9)
  favoritePhoto: FavoritePhotoInfo
  // ProtoMember(10)
  favoriteCharacterIds: string[]
  // ProtoMember(11)
  message: string
  // ProtoMember(12)
  birthMonth: number
  // ProtoMember(13)
  birthDay: number
  // ProtoMember(14)
  backgroundType: ProfileBackgroundType
  // ProtoMember(15)
  layoutType: ProfileLayoutType
  // ProtoMember(16)
  hierarchyCurrentDetailGradeId: string
  // ProtoMember(17)
  hierarchyCurrentRank: number
  // ProtoMember(18)
  decorationId: string
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ProfileInfo = {
  // ProtoMember(1)
  userId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  managerExp: string
  // ProtoMember(4)
  managerLevel: number
  // ProtoMember(5)
  emblemId: string
  // ProtoMember(6)
  favoriteCard: FavoriteCardInfo
  // ProtoMember(7)
  favoritePhoto: FavoritePhotoInfo
  // ProtoMember(8)
  favoriteCharacterIds: string[]
  // ProtoMember(9)
  backgroundType: ProfileBackgroundType
  // ProtoMember(10)
  layoutType: ProfileLayoutType
  // ProtoMember(11)
  lastLoginTime: string
  // ProtoMember(12)
  decorationId: string
}
export type ProfileTopResponse = {
  // ProtoMember(1)
  hierarchyCurrentDetailGradeId: string
  // ProtoMember(2)
  hierarchyCurrentRank: number
  // ProtoMember(3)
  friendProfiles: ProfileInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type Promotion = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  subName: string
  // ProtoMember(5)
  unlockConditionId: string
  // ProtoMember(6)
  isUnlocked: boolean
  // ProtoMember(7)
  activityPerformanceId: string
  // ProtoMember(8)
  level: number
  // ProtoMember(9)
  exp: number
  // ProtoMember(10)
  nextLevelRequiredExp: number
  // ProtoMember(11)
  requiredStamina: number
  // ProtoMember(12)
  nextLevelUnlockConditionId: string
  // ProtoMember(13)
  isNextLevelUnlocked: boolean
  // ProtoMember(14)
  stepConsumptionStamina: number
  // ProtoMember(15)
  stepRewardGold: number
  // ProtoMember(16)
  stepRewardCardEnhanceItem: number
  // ProtoMember(17)
  stepAdditionalRewardId: string
  // ProtoMember(18)
  multiStepRewardId: string
  // ProtoMember(19)
  maxFanAmount: number
  // ProtoMember(20)
  viewConditionId: string
  // ProtoMember(21)
  subGenre: string
  // ProtoMember(22)
  multiStepCampaignDropRewardIds: string[]
}
export type PromotionProgress = {
  // ProtoMember(1)
  activityPromotionId: string
  // ProtoMember(2)
  activityPromotionName: string
  // ProtoMember(3)
  activityPromotionSubName: string
  // ProtoMember(5)
  activityPromotionLevel: number
  // ProtoMember(6)
  characters: ActivityCharacterInfo[]
  // ProtoMember(7)
  startTime: string
  // ProtoMember(8)
  finishTime: string
  // ProtoMember(9)
  stepConsumptionStamina: number
  // ProtoMember(10)
  completedStep: number
  // ProtoMember(11)
  stepRewardGold: number
  // ProtoMember(12)
  stepRewardManagerExp: number
  // ProtoMember(13)
  stepRewardActivityExp: number
  // ProtoMember(14)
  stepRewardCharacterActivityExp: number
  // ProtoMember(15)
  stepAdditionalRewardId: string
  // ProtoMember(16)
  multiStepRewardId: string
  // ProtoMember(17)
  stepRewardCardEnhanceItem: number
  // ProtoMember(18)
  rewardGoldAmount: number
  // ProtoMember(19)
  rewardCardEnhanceItemAmount: number
  // ProtoMember(20)
  rewards: ActivityPromotionReward[]
  // ProtoMember(21)
  nextActivityLevelUpTime: string
  // ProtoMember(22)
  campaignEffects: ActivityCampaignEffect[]
  // ProtoMember(23)
  activityPerformanceId: string
  // ProtoMember(24)
  subGenre: string
  // ProtoMember(25)
  multiStepCampaignDropRewardIds: string[]
}
export type PvpRewardInfo = {
  // ProtoMember(1)
  rankFrom: string
  // ProtoMember(2)
  rankingRewardId: string
  // ProtoMember(3)
  challengeRewardId: string
}
export type QuestAreaGroupInfo = {
  // ProtoMember(1)
  areaGroupId: string
  // ProtoMember(2)
  areas: QuestAreaInfo[]
}
export type QuestAreaInfo = {
  // ProtoMember(1)
  areaId: string
  // ProtoMember(2)
  unlocked: boolean
  // ProtoMember(3)
  quests: QuestInfo[]
}
export type QuestClearInfo = {
  // ProtoMember(1)
  score: string
  // ProtoMember(2)
  userName: string
  // ProtoMember(3)
  deckName: string
  // ProtoMember(4)
  cards: LiveCardInfo[]
  // ProtoMember(5)
  emblemId: string
  // ProtoMember(6)
  userId: string
  // ProtoMember(7)
  rankType: ResultRankType
  // ProtoMember(8)
  plus: number
}
export type QuestContestRankInfo = {
  // ProtoMember(1)
  rank: number
  // ProtoMember(2)
  isNPC: boolean
  // ProtoMember(3)
  score: string
  // ProtoMember(4)
  userName: string
  // ProtoMember(5)
  deckName: string
  // ProtoMember(6)
  cards: LiveCardInfo[]
  // ProtoMember(7)
  emblemId: string
  // ProtoMember(8)
  userId: string
}
export type QuestInfo = {
  // ProtoMember(1)
  questId: string
  // ProtoMember(2)
  cleared: boolean
  // ProtoMember(3)
  highestScore: string
  // ProtoMember(4)
  rankType: ResultRankType
  // ProtoMember(5)
  plus: number
  // ProtoMember(6)
  highestRank: number
  // ProtoMember(7)
  isPlayable: boolean
  // ProtoMember(8)
  playableCount: number
  // ProtoMember(9)
  opponentInfo: QuestOpponentInfo
}
export type QuestListTowerRankingResponse = {
  // ProtoMember(1)
  selfHighestRank: number
  // ProtoMember(2)
  selfQuestId: string
  // ProtoMember(3)
  ranks: QuestTowerRankInfo[]
  // ProtoMember(4)
  totalQuestNum: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestRewardCard = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  funAmount: string
  // ProtoMember(3)
  exp: number
  // ProtoMember(4)
  isExpTruncated: boolean
}
export type QuestStartResponse = {
  // ProtoMember(1)
  questId: string
  // ProtoMember(2)
  result: LiveResult
  // ProtoMember(3)
  reward: QuestReward
  // ProtoMember(4)
  rankType: ResultRankType
  // ProtoMember(5)
  rankPlus: number
  // ProtoMember(6)
  rankPatterns: QuestRankPattern[]
  // ProtoMember(7)
  highestRank: number
  // ProtoMember(8)
  highestScore: string
  // ProtoMember(9)
  hierarchyChangeInfo: HierarchyChangeInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestTopResponse = {
  // ProtoMember(1)
  mainAreaGroups: QuestAreaGroupInfo[]
  // ProtoMember(2)
  contestTotalScore: string
  // ProtoMember(3)
  hasUnplayedContest: boolean
  // ProtoMember(4)
  pvpInfo: QuestTopPvpInfo
  // ProtoMember(5)
  currentTowerQuestId: string
  // ProtoMember(6)
  isDailyPlayable: boolean
  // ProtoMember(7)
  gvgInfo: CurrentGvgInfo
  // ProtoMember(8)
  hierarchyNotiInfo: HierarchyNotiInfo
  // ProtoMember(9)
  dailyAreas: QuestAreaInfo[]
  // ProtoMember(10)
  towerArea: QuestAreaInfo
  // ProtoMember(11)
  contestArea: QuestAreaInfo
  // ProtoMember(12)
  isTowerTopUnlocked: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestTowerAreaInfo = {
  // ProtoMember(1)
  area: QuestAreaInfo
  // ProtoMember(2)
  currentTowerQuestId: string
}
export type QuestTowerRankInfo = {
  // ProtoMember(1)
  rank: number
  // ProtoMember(2)
  questId: string
  // ProtoMember(3)
  userName: string
  // ProtoMember(4)
  deckName: string
  // ProtoMember(5)
  cards: LiveCardInfo[]
  // ProtoMember(6)
  emblemId: string
  // ProtoMember(7)
  userId: string
}
export type Refresh = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  requiredMinutes: number
  // ProtoMember(4)
  unlockConditionId: string
  // ProtoMember(5)
  isUnlocked: boolean
  // ProtoMember(6)
  level: number
  // ProtoMember(7)
  exp: number
  // ProtoMember(8)
  nextLevelRequiredExp: number
  // ProtoMember(9)
  levels: RefreshLevel[]
  // ProtoMember(10)
  viewConditionId: string
}
export type RefreshLevel = {
  // ProtoMember(1)
  level: number
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  requiredGold: number
  // ProtoMember(5)
  unlockConditionId: string
  // ProtoMember(6)
  isUnlocked: boolean
  // ProtoMember(7)
  activityPerformanceId: string
  // ProtoMember(8)
  recoveryAmount: number
  // ProtoMember(9)
  viewConditionId: string
  // ProtoMember(10)
  subGenre: string
}
export type RefreshProgress = {
  // ProtoMember(1)
  activityRefreshId: string
  // ProtoMember(2)
  activityRefreshName: string
  // ProtoMember(3)
  activityRefreshSubName: string
  // ProtoMember(4)
  activityRefreshLevel: number
  // ProtoMember(6)
  characters: ActivityCharacterInfo[]
  // ProtoMember(7)
  startTime: string
  // ProtoMember(8)
  finishTime: string
  // ProtoMember(9)
  requiredMinutes: number
  // ProtoMember(10)
  recoveryAmount: number
  // ProtoMember(11)
  activityPerformanceId: string
  // ProtoMember(12)
  subGenre: string
}
export type ShopConditionReward = {
  // ProtoMember(1)
  number: number
  // ProtoMember(2)
  conditionId: string
  // ProtoMember(3)
  rewardId: string
  // ProtoMember(4)
  statusType: ShopConditionRewardStatusType
}
export type ShopInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  type: ShopType
  // ProtoMember(4)
  order: number
  // ProtoMember(5)
  colorCode: string
  // ProtoMember(6)
  backgroundColorCode: string
  // ProtoMember(7)
  noticeInfo: NoticeInfo
  // ProtoMember(8)
  viewConditionId: string
  // ProtoMember(9)
  thumbnailAssetId: string
  // ProtoMember(10)
  costumeId: string
  // ProtoMember(11)
  resetTimingType: ResetTimingType
  // ProtoMember(12)
  nextResetTime: string
  // ProtoMember(101)
  isPurchased: boolean
  // ProtoMember(102)
  progress: number
  // ProtoMember(103)
  maxProgress: number
  // ProtoMember(104)
  bannerAssetId: string
}
export type ShopItem = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  description: string
  // ProtoMember(4)
  productId: string
  // ProtoMember(5)
  consumptionId: string
  // ProtoMember(6)
  rewardId: string
  // ProtoMember(7)
  thumbnailAssetId: string
  // ProtoMember(8)
  purchaseLimit: number
  // ProtoMember(9)
  leftCount: number
  // ProtoMember(10)
  order: number
  // ProtoMember(11)
  viewConditionId: string
  // ProtoMember(12)
  pushSegment: string
  // ProtoMember(13)
  resetTimingType: ResetTimingType
  // ProtoMember(14)
  nextResetTime: string
  // ProtoMember(15)
  unlockConditionId: string
  // ProtoMember(16)
  unlocked: boolean
  // ProtoMember(100)
  colorCode: string
  // ProtoMember(101)
  backgroundColorCode: string
}
export type ShopLoginBonus = {
  // ProtoMember(1)
  day: number
  // ProtoMember(2)
  rewardId: string
  // ProtoMember(3)
  isReceived: boolean
}
export type TimelineInfo = {
  // ProtoMember(1)
  messageGroupId: string
  // ProtoMember(2)
  timelineId: string
  // ProtoMember(3)
  messageId: string
  // ProtoMember(4)
  arrivedTime: string
  // ProtoMember(5)
  selectMessageDetailIds: string[]
  // ProtoMember(6)
  lastMessageDetailId: string
  // ProtoMember(7)
  lastMessageDetailTime: string
  // ProtoMember(8)
  finished: boolean
}
export type TourDifficultyInfo = {
  // ProtoMember(1)
  tourDifficultyId: string
  // ProtoMember(2)
  tourDifficultyNumber: number
  // ProtoMember(3)
  managerLevel: number
  // ProtoMember(4)
  unlockConditionId: string
  // ProtoMember(5)
  unlocked: boolean
}
export type TourEffectActivity = {
  // ProtoMember(1)
  itemId: string
  // ProtoMember(2)
  amount: number
  // ProtoMember(3)
  activityPerformanceId: string
  // ProtoMember(5)
  activityPromotionSubGenre: string
}
export type TourEffectLive = {
  // ProtoMember(1)
  musicId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  stageId: string
  // ProtoMember(4)
  musicChartPatternId: string
  // ProtoMember(5)
  maxCapacity: number
  // ProtoMember(6)
  mentalThreshold: number
  // ProtoMember(7)
  clearScore: string
  // ProtoMember(8)
  rewardId: string
  // ProtoMember(9)
  difficultyLevel: number
  // ProtoMember(10)
  tourQuestSettingId: string
}
export type TourEffectPvp = {
  // ProtoMember(1)
  musicId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  stageId: string
  // ProtoMember(4)
  musicChartPatternId: string
  // ProtoMember(5)
  maxCapacity: number
  // ProtoMember(6)
  mentalThreshold: number
  // ProtoMember(7)
  clearScore: string
  // ProtoMember(8)
  opponentInfo: TourOpponentInfo
  // ProtoMember(9)
  scoutInfo: TourScoutInfo
  // ProtoMember(10)
  rewardId: string
  // ProtoMember(11)
  tourQuestSettingId: string
}
export type TourEffectRefresh = {
  // ProtoMember(1)
  amountPermil: number
  // ProtoMember(2)
  activityPerformanceId: string
  // ProtoMember(4)
  activityRefreshSubGenre: string
}
export type TourRankingInfo = {
  // ProtoMember(1)
  userId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  managerLevel: number
  // ProtoMember(4)
  point: string
  // ProtoMember(5)
  rank: number
  // ProtoMember(6)
  emblemId: string
}
export type TourRankingRewardInfo = {
  // ProtoMember(1)
  rankFrom: number
  // ProtoMember(2)
  rewardId: string
}
export type UserHierarchyInfo = {
  // ProtoMember(1)
  currentDetailGradeId: string
  // ProtoMember(2)
  currentRank: number
  // ProtoMember(3)
  currentPoint: string
}
export type AccessoryEnhanceRequest = {
  // ProtoMember(1)
  accessoryId: string
  // ProtoMember(2)
  count: number
}
export type AccessoryEnhanceResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type AccessoryLimitBreakRequest = {
  // ProtoMember(1)
  accessoryId: string
  // ProtoMember(2)
  isInUse: boolean
}
export type AccessoryLimitBreakResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type AccessorySellRequest = {
  // ProtoMember(1)
  accessoryId: string
  // ProtoMember(2)
  count: number
}
export type AccessorySellResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityStartFanEventRequest = {
  // ProtoMember(1)
  activityFanEventId: string
  // ProtoMember(2)
  characterIds: string[]
  // ProtoMember(3)
  costumeIds: string[]
  // ProtoMember(4)
  itemIds: string[]
}
export type ActivityStartFanEventResponse = {
  // ProtoMember(1)
  progress: FanEventProgress
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityLoadFanEventResponse = {
  // ProtoMember(1)
  progress: FanEventProgress
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityFetchFanEventStepsRequest = {
  // ProtoMember(1)
  steps: number[]
}
export type ActivityFetchFanEventStepsResponse = {
  // ProtoMember(1)
  characterSteps: FanEventCharacterSteps[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivitySaveFanEventRequest = {
  // ProtoMember(1)
  characterResults: FanEventCharacterResult[]
  // ProtoMember(2)
  useItemId: string
  // ProtoMember(3)
  execCheer: boolean
}
export type ActivitySaveFanEventResponse = {
  // ProtoMember(1)
  characterSteps: FanEventCharacterSteps[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityFinishFanEventResponse = {
  // ProtoMember(1)
  activityPoint: number
  // ProtoMember(2)
  rankType: ResultRankType
  // ProtoMember(3)
  plus: number
  // ProtoMember(4)
  rewards: Reward[]
  // ProtoMember(5)
  rankPatterns: FanEventRankPattern[]
  // ProtoMember(6)
  activityLevelProgress: ActivityLevelProgress
  // ProtoMember(7)
  characters: ActivityCharacterInfo[]
  // ProtoMember(8)
  campaignEffects: ActivityCampaignEffect[]
  // ProtoMember(9)
  campaignDropRewards: Reward[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityGetFanEventRankingRequest = {
  // ProtoMember(1)
  activityFanEventId: string
}
export type ActivityGetFanEventRankingResponse = {
  // ProtoMember(1)
  selfRank: string
  // ProtoMember(2)
  selfScore: string
  // ProtoMember(3)
  rankInfos: FanEventRankingInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityStartPromotionRequest = {
  // ProtoMember(1)
  activityPromotionId: string
  // ProtoMember(2)
  characterIds: string[]
  // ProtoMember(3)
  costumeIds: string[]
}
export type ActivityStartPromotionResponse = {
  // ProtoMember(1)
  progress: PromotionProgress
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityLoadPromotionResponse = {
  // ProtoMember(1)
  progress: PromotionProgress
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityUsePromotionItemRequest = {
  // ProtoMember(1)
  itemId: string
  // ProtoMember(2)
  amount: number
}
export type ActivityUsePromotionItemResponse = {
  // ProtoMember(1)
  progress: PromotionProgress
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityReceivePromotionRewardResponse = {
  // ProtoMember(1)
  rewards: Reward[]
  // ProtoMember(2)
  bonusRewards: Reward[]
  // ProtoMember(3)
  completedStep: number
  // ProtoMember(4)
  progress: PromotionProgress
  // ProtoMember(5)
  activityLevelProgress: ActivityLevelProgress
  // ProtoMember(6)
  campaignEffects: ActivityCampaignEffect[]
  // ProtoMember(7)
  campaignDropRewards: Reward[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityFetchPromotionStepsRequest = {
  // ProtoMember(1)
  step: number
}
export type ActivityFetchPromotionStepsResponse = {
  // ProtoMember(1)
  steps: PromotionStep[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityFinishPromotionResponse = {
  // ProtoMember(1)
  rewards: Reward[]
  // ProtoMember(2)
  bonusRewards: Reward[]
  // ProtoMember(3)
  activityLevelProgress: ActivityLevelProgress
  // ProtoMember(4)
  totalSteps: number
  // ProtoMember(5)
  characters: ActivityCharacterInfo[]
  // ProtoMember(6)
  campaignEffects: ActivityCampaignEffect[]
  // ProtoMember(7)
  campaignDropRewards: Reward[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityStartRefreshRequest = {
  // ProtoMember(1)
  activityRefreshId: string
  // ProtoMember(2)
  activityRefreshLevel: number
  // ProtoMember(3)
  characterIds: string[]
  // ProtoMember(4)
  costumeIds: string[]
}
export type ActivityStartRefreshResponse = {
  // ProtoMember(1)
  progress: RefreshProgress
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityLoadRefreshResponse = {
  // ProtoMember(1)
  progress: RefreshProgress
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityUseRefreshItemRequest = {
  // ProtoMember(1)
  itemId: string
  // ProtoMember(2)
  amount: number
}
export type ActivityUseRefreshItemResponse = {
  // ProtoMember(1)
  progress: RefreshProgress
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityFinishRefreshResponse = {
  // ProtoMember(1)
  activityLevelProgress: ActivityLevelProgress
  // ProtoMember(2)
  characters: ActivityCharacterInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityReceiveLessonRewardResponse = {
  // ProtoMember(1)
  rewards: Reward[]
  // ProtoMember(2)
  progress: ActivityLessonProgress
  // ProtoMember(3)
  campaignEffects: ActivityCampaignEffect[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ActivityPromoteLessonRequest = {
  // ProtoMember(1)
  isFree: boolean
}
export type ActivityPromoteLessonResponse = {
  // ProtoMember(1)
  rewards: Reward[]
  // ProtoMember(2)
  progress: ActivityLessonProgress
  // ProtoMember(3)
  campaignEffects: ActivityCampaignEffect[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type FanEventCharacterSteps = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  steps: FanEventStep[]
}
export type FanEventStep = {
  // ProtoMember(1)
  step: number
  // ProtoMember(2)
  happenings: FanEventHappening[]
  // ProtoMember(3)
  itemEffects: FanEventItemEffect[]
}
export type FanEventHappening = {
  // ProtoMember(1)
  type: ActivityFanEventHappeningType
  // ProtoMember(2)
  characterId: string
}
export type FanEventItemEffect = {
  // ProtoMember(1)
  type: ItemType
  // ProtoMember(2)
  value: number
}
export type FanEventCharacterResult = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  stepResults: FanEventStepResult[]
}
export type FanEventStepResult = {
  // ProtoMember(1)
  step: number
  // ProtoMember(2)
  reductionMilliSeconds: string
  // ProtoMember(3)
  activityPoint: number
}
export type PromotionStep = {
  // ProtoMember(1)
  step: number
  // ProtoMember(2)
  rewards: ActivityPromotionReward[]
}
export type AuthCreateRequest = {
  // ProtoMember(1)
  firebaseUID: string
}
export type AuthCreateResponse = {
  // ProtoMember(1)
  firebaseCustomToken: string
}
export type AuthLoginRequest = {
  // ProtoMember(1)
  firebaseIDToken: string
}
export type AuthLoginResponse = {
  // ProtoMember(1)
  gameAuthToken: string
  // ProtoMember(2)
  userPublic: UserPublic
  // ProtoMember(3)
  requiredFirebaseReauthenticate: boolean
}
export type BacksideTopRequest = {
  // ProtoMember(1)
  backsideId: string
}
export type BacksideTopResponse = {
  // ProtoMember(1)
  backsideInfo: BacksideInfo
  // ProtoMember(2)
  dokanInfos: DokanInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type BacksideRankingRequest = {
  // ProtoMember(1)
  backsideId: string
}
export type BacksideRankingResponse = {
  // ProtoMember(1)
  rankingInfos: BacksideRankingInfo[]
  // ProtoMember(2)
  selfFinalScore: string
  // ProtoMember(3)
  selfRank: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type BacksideStageStartRequest = {
  // ProtoMember(1)
  backsideId: string
  // ProtoMember(2)
  number: number
  // ProtoMember(3)
  deckNumber: string
  // ProtoMember(4)
  difficultyNumber: number
}
export type BacksideStageStartResponse = {
  // ProtoMember(1)
  stageInfo: BacksideStageInfo
  // ProtoMember(2)
  execPanelLocationInfo: BacksideExecPanelLocationInfo
  // ProtoMember(3)
  halfwayLiveBonusChoices: BacksideLiveBonus[]
  // ProtoMember(4)
  halfwaySurpriseInfo: BacksideSurpriseInfo
  // ProtoMember(5)
  halfwayPracticeClearInfo: BacksidePracticeStageClearInfo
  // ProtoMember(6)
  isForceRetired: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type BacksideStageActionRequest = {
  // ProtoMember(1)
  backsideId: string
  // ProtoMember(2)
  pieceNumber: number
  // ProtoMember(3)
  radiusNumber: number
  // ProtoMember(4)
  panelNumber: number
  // ProtoMember(5)
  isSkip: boolean
}
export type BacksideStageActionResponse = {
  // ProtoMember(1)
  stageProgressInfo: BacksideStageProgressInfo
  // ProtoMember(2)
  liveBonusChoices: BacksideLiveBonus[]
  // ProtoMember(3)
  isScheduled: boolean
  // ProtoMember(4)
  liveInfo: BacksideLiveInfo
  // ProtoMember(5)
  practiceClearInfo: BacksidePracticeStageClearInfo
  // ProtoMember(6)
  finalClearInfo: BacksideFinalStageClearInfo
  // ProtoMember(7)
  surpriseInfo: BacksideSurpriseInfo
  // ProtoMember(8)
  isForceRetired: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type BacksideStageLiveBonusRequest = {
  // ProtoMember(1)
  backsideId: string
  // ProtoMember(2)
  liveBonusId: string
}
export type BacksideStageLiveBonusResponse = {
  // ProtoMember(1)
  stageProgressInfo: BacksideStageProgressInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type BacksideStagePracticeUpdateRequest = {
  // ProtoMember(1)
  backsideId: string
  // ProtoMember(2)
  isUpdate: boolean
}
export type BacksideStagePracticeUpdateResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type BacksideStageResetRequest = {
  // ProtoMember(1)
  backsideId: string
  // ProtoMember(2)
  isInGame: boolean
}
export type BacksideStageResetResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type BacksideStageSurpriseFinishRequest = {
  // ProtoMember(1)
  backsideId: string
}
export type BacksideStageSurpriseFinishResponse = {
  // ProtoMember(1)
  stageProgressInfo: BacksideStageProgressInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type BacksideStageDeckPositionChangeRequest = {
  // ProtoMember(1)
  backsideId: string
  // ProtoMember(2)
  deckPositionInfos: BacksideDeckPositionInfo[]
}
export type BacksideStageDeckPositionChangeResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type BacksideInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  type: BacksideType
  // ProtoMember(4)
  startTime: string
  // ProtoMember(5)
  endTime: string
  // ProtoMember(6)
  aggregateEndTime: string
  // ProtoMember(7)
  exchangeEndTime: string
  // ProtoMember(8)
  assetId: string
  // ProtoMember(9)
  eventStoryInfo: EventStoryInfo
  // ProtoMember(10)
  eventMissionInfo: EventMissionInfo
  // ProtoMember(11)
  eventExchangeBoothInfo: EventExchangeBoothInfo
  // ProtoMember(12)
  noticeInfo: NoticeInfo
  // ProtoMember(13)
  areaInfo: BacksideAreaInfo
  // ProtoMember(14)
  rankingRewardInfos: BacksideRankingRewardInfo[]
  // ProtoMember(15)
  realScore: string
  // ProtoMember(16)
  realScoreTime: string
  // ProtoMember(17)
  rank: string
  // ProtoMember(18)
  stageStamina: string
  // ProtoMember(19)
  stageStaminaUpdatedTime: string
  // ProtoMember(20)
  stageStaminaRecoveryMinutes: number
}
export type BacksideAreaInfo = {
  // ProtoMember(1)
  areaId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  type: BacksideAreaType
  // ProtoMember(4)
  assetId: string
  // ProtoMember(10)
  backsideDifficultyInfos: BacksideDifficultyInfo[]
  // ProtoMember(11)
  currentDifficultyNumber: number
  // ProtoMember(12)
  lastChallengeDifficultyNumber: number
  // ProtoMember(13)
  difficultyType: BacksideDifficultyType
}
export type BacksidePracticeStageTotalResultInfo = {
  // ProtoMember(1)
  practiceRankType: BacksidePracticeRankType
  // ProtoMember(2)
  practiceRankPlus: number
  // ProtoMember(3)
  practiceScore: string
  // ProtoMember(4)
  practiceLiveBonusInfos: BacksideLiveBonusInfo[]
}
export type BacksidePracticeStageResultInfo = {
  // ProtoMember(1)
  practiceRankType: BacksidePracticeRankType
  // ProtoMember(2)
  practiceRankPlus: number
  // ProtoMember(3)
  practiceScore: string
  // ProtoMember(4)
  deckCardInfos: BacksideDeckCardInfo[]
  // ProtoMember(5)
  liveBonuses: BacksideLiveBonus[]
}
export type BacksideFinalStageResultInfo = {
  // ProtoMember(1)
  totalPracticeRankType: BacksidePracticeRankType
  // ProtoMember(2)
  totalPracticeRankPlus: number
  // ProtoMember(3)
  totalPracticeScore: string
  // ProtoMember(4)
  finalRankType: ResultRankType
  // ProtoMember(5)
  finalRankPlus: number
  // ProtoMember(6)
  finalScore: string
  // ProtoMember(7)
  deckCardInfos: BacksideDeckCardInfo[]
  // ProtoMember(8)
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  // ProtoMember(9)
  practiceScore: string
}
export type BacksidePracticeStageHalfwayInfo = {
  // ProtoMember(1)
  passedActionCount: number
  // ProtoMember(2)
  practiceScore: string
  // ProtoMember(3)
  deckCardInfos: BacksideDeckCardInfo[]
  // ProtoMember(4)
  liveBonuses: BacksideLiveBonus[]
}
export type BacksideFinalStageHalfwayInfo = {
  // ProtoMember(1)
  passedActionCount: number
  // ProtoMember(2)
  deckCardInfos: BacksideDeckCardInfo[]
  // ProtoMember(3)
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  // ProtoMember(4)
  practiceScore: string
  // ProtoMember(5)
  totalPracticeScore: string
}
export type BacksideLiveBonusInfo = {
  // ProtoMember(1)
  stageNumber: number
  // ProtoMember(2)
  stageType: BacksideStageType
  // ProtoMember(3)
  stageName: string
  // ProtoMember(4)
  liveBonuses: BacksideLiveBonus[]
}
export type BacksideStageInfo = {
  // ProtoMember(1)
  panelInfos: BacksidePanelInfo[]
  // ProtoMember(2)
  scheduleInfos: BacksideScheduleInfo[]
  // ProtoMember(3)
  nextActionCount: string
  // ProtoMember(4)
  practiceScore: string
  // ProtoMember(5)
  deckCardDetailInfos: BacksideDeckCardDetailInfo[]
  // ProtoMember(6)
  deckCardStaminaInfos: BacksideDeckCardStaminaInfo[]
  // ProtoMember(7)
  liveBonuses: BacksideLiveBonus[]
  // ProtoMember(8)
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  // ProtoMember(9)
  cardLiveAbilityInfos: BacksideCardLiveAbilityInfo[]
  // ProtoMember(10)
  totalPracticeScore: string
  // ProtoMember(11)
  deckUserCharacters: UserCharacter[]
  // ProtoMember(12)
  baseDeckOverallValue: string
}
export type BacksideStageProgressInfo = {
  // ProtoMember(1)
  panelInfos: BacksidePanelInfo[]
  // ProtoMember(2)
  nextActionCount: string
  // ProtoMember(3)
  practiceScore: string
  // ProtoMember(4)
  deckCardStaminaInfos: BacksideDeckCardStaminaInfo[]
  // ProtoMember(5)
  liveBonuses: BacksideLiveBonus[]
  // ProtoMember(6)
  execPanelLocationInfo: BacksideExecPanelLocationInfo
  // ProtoMember(7)
  totalPracticeScore: string
  // ProtoMember(8)
  deckCardDetailInfos: BacksideDeckCardDetailInfo[]
}
export type BacksidePanelInfo = {
  // ProtoMember(1)
  pieceNumber: number
  // ProtoMember(2)
  radiusNumber: number
  // ProtoMember(3)
  panelNumber: number
  // ProtoMember(4)
  panelType: BacksidePanelType
  // ProtoMember(5)
  panelAttributeType: BacksidePanelAttributeType
  // ProtoMember(6)
  panelRank: number
  // ProtoMember(7)
  panelGoalInfo: BacksidePanelGoalInfo
  // ProtoMember(8)
  panelLiveInfo: BacksidePanelLiveInfo
  // ProtoMember(9)
  panelPvpInfo: BacksidePanelPvpInfo
  // ProtoMember(10)
  panelStaminaInfo: BacksidePanelStaminaInfo
  // ProtoMember(11)
  haveExecuted: boolean
  // ProtoMember(12)
  canAction: boolean
}
export type BacksideOpponentInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  managerLevel: number
  // ProtoMember(3)
  cardInfos: LiveBattleCardInfo[]
}
export type BacksidePanelStaminaInfo = {
  // ProtoMember(1)
  staminaConsumptionAmount: number
  // ProtoMember(2)
  staminaRecoveryAmount: number
}
export type BacksideScheduleInfo = {
  // ProtoMember(1)
  actionCount: number
  // ProtoMember(2)
  panelType: BacksidePanelType
}
export type BacksideLiveInfo = {
  // ProtoMember(1)
  result: LiveResult
  // ProtoMember(2)
  rankType: ResultRankType
  // ProtoMember(3)
  rankPlus: number
  // ProtoMember(4)
  rankPatterns: QuestRankPattern[]
}
export type BacksidePracticeStageClearInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  practiceRankType: BacksidePracticeRankType
  // ProtoMember(3)
  practiceRankPlus: number
  // ProtoMember(4)
  practiceScore: string
  // ProtoMember(5)
  liveBonuses: BacksideLiveBonus[]
  // ProtoMember(6)
  lastPracticeRankType: BacksidePracticeRankType
  // ProtoMember(7)
  lastPracticeRankPlus: number
  // ProtoMember(8)
  lastPracticeScore: string
  // ProtoMember(9)
  lastLiveBonuses: BacksideLiveBonus[]
  // ProtoMember(10)
  firstClearRewardResults: RewardResult[]
  // ProtoMember(11)
  firstPracticeRankRewardResults: RewardResult[]
  // ProtoMember(12)
  loopPracticeRankRewardResults: RewardResult[]
}
export type BacksideFinalStageClearInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  finalRankType: ResultRankType
  // ProtoMember(3)
  finalRankPlus: number
  // ProtoMember(4)
  finalScore: string
  // ProtoMember(5)
  firstClearRewardResults: RewardResult[]
  // ProtoMember(6)
  firstFinalRankRewardResults: RewardResult[]
  // ProtoMember(7)
  isBest: boolean
  // ProtoMember(8)
  newRank: string
  // ProtoMember(9)
  practiceScore: string
  // ProtoMember(10)
  totalPracticeScore: string
  // ProtoMember(11)
  loopFinalRankRewardResults: RewardResult[]
  // ProtoMember(12)
  difficultyAreaRewardResults: RewardResult[]
}
export type BacksideSurpriseInfo = {
  // ProtoMember(1)
  advAssetId: string
  // ProtoMember(2)
  liveBonus: BacksideLiveBonus
}
export type BacksideExecPanelLocationInfo = {
  // ProtoMember(1)
  pieceNumber: number
  // ProtoMember(2)
  radiusNumber: number
  // ProtoMember(3)
  panelNumber: number
}
export type BacksideDeckPositionInfo = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  newPosition: number
}
export type CardEnhanceRequest = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  level: number
}
export type CardEnhanceResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CardLimitBreakRequest = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  rarity: number
}
export type CardLimitBreakResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CardSkillEnhanceRequest = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  skillId: string
}
export type CardSkillEnhanceResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CardLiveAbilityEnhanceRequest = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  abilityId: string
}
export type CardLiveAbilityEnhanceResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CardActivityAbilityEnhanceRequest = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  abilityId: string
}
export type CardActivityAbilityEnhanceResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CardResetRequest = {
  // ProtoMember(1)
  cardId: string
}
export type CardResetResponse = {
  // ProtoMember(1)
  rewards: Reward[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CardSetSupportRequest = {
  // ProtoMember(1)
  number: number
  // ProtoMember(2)
  cardId: string
}
export type CardSetSupportResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CardRemoveSupportRequest = {
  // ProtoMember(1)
  number: number
}
export type CardRemoveSupportResponse = {
  // ProtoMember(1)
  rewards: Reward[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CardReleaseSupportRequest = {
  // ProtoMember(1)
  useStone: boolean
}
export type CardReleaseSupportResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type LoginBonusPackageItem = {
  // ProtoMember(1)
  shopItem: ShopItem
  // ProtoMember(2)
  loginBonuses: ShopLoginBonus[]
  // ProtoMember(3)
  isPurchased: boolean
}
export type ConditionRewardPackageItem = {
  // ProtoMember(1)
  shopItem: ShopItem
  // ProtoMember(2)
  conditionRewards: ShopConditionReward[]
  // ProtoMember(3)
  isPurchased: boolean
}
export type LiveResult = {
  // ProtoMember(1)
  userInfos: LiveUserInfo[]
  // ProtoMember(2)
  activatedPassiveSkills: LiveSkill[]
  // ProtoMember(3)
  charts: LiveChart[]
  // ProtoMember(4)
  totalAudienceAmount: number
  // ProtoMember(5)
  cleared: boolean
}
export type LiveUserDeck = {
  // ProtoMember(1)
  deckName: string
  // ProtoMember(2)
  cards: LiveDeckCard[]
  // ProtoMember(3)
  bonusSkills: LiveDeckCardSkill[]
}
export type LiveChart = {
  // ProtoMember(1)
  number: number
  // ProtoMember(2)
  chartType: MusicChartType
  // ProtoMember(3)
  attributeType: AttributeType
  // ProtoMember(4)
  beats: LiveBeat[]
  // ProtoMember(5)
  activatedSkill: LiveSkill
  // ProtoMember(6)
  activatedPassiveSkills: LiveSkill[]
  // ProtoMember(7)
  userStatuses: LiveUserStatus[]
  // ProtoMember(8)
  cardStatuses: LiveCardStatus[]
}
export type LiveBeat = {
  // ProtoMember(1)
  order: number
  // ProtoMember(2)
  cardIndex: number
  // ProtoMember(3)
  score: string
  // ProtoMember(4)
  isCritical: boolean
}
export type LiveSkill = {
  // ProtoMember(1)
  order: number
  // ProtoMember(2)
  cardIndex: number
  // ProtoMember(3)
  skillIndex: number
  // ProtoMember(4)
  activated: boolean
  // ProtoMember(5)
  stamina: string
  // ProtoMember(6)
  score: string
  // ProtoMember(7)
  isCritical: boolean
  // ProtoMember(8)
  details: LiveSkillDetail[]
  // ProtoMember(9)
  failures: LiveSkillFailure[]
  // ProtoMember(10)
  isComboBreak: boolean
  // ProtoMember(1001)
  descriptions: LiveLogDescription[]
}
export type LiveSkillFailure = {
  // ProtoMember(1)
  cardIndex: number
  // ProtoMember(2)
  type: SkillFailureType
  // ProtoMember(3)
  eachFailureTypes: SkillFailureType[]
}
export type LiveSkillDetail = {
  // ProtoMember(1)
  efficacyIndex: number
  // ProtoMember(2)
  value: string
  // ProtoMember(3)
  statusType: StatusEffectType
  // ProtoMember(4)
  targetCardIndexes: number[]
}
export type LiveLogDescription = {
  // ProtoMember(1)
  message: string
}
export type LiveUserStatus = {
  // ProtoMember(1)
  userIndex: number
  // ProtoMember(2)
  currentComboCount: number
  // ProtoMember(3)
  totalScore: string
}
export type LiveCardStatus = {
  // ProtoMember(1)
  cardIndex: number
  // ProtoMember(2)
  stamina: string
  // ProtoMember(3)
  dance: string
  // ProtoMember(4)
  vocal: string
  // ProtoMember(5)
  visual: string
  // ProtoMember(6)
  effects: LiveCardStatusEffect[]
  // ProtoMember(7)
  skillStatuses: LiveSkillStatus[]
}
export type LiveCardStatusEffect = {
  // ProtoMember(1)
  statusType: StatusEffectType
  // ProtoMember(2)
  skillEfficacyType: SkillEfficacyType
  // ProtoMember(3)
  value: string
  // ProtoMember(4)
  grade: number
  // ProtoMember(5)
  remainEffectedChartCount: number
  // ProtoMember(6)
  maxGrade: number
  // ProtoMember(7)
  value2: string
}
export type LiveSkillStatus = {
  // ProtoMember(1)
  skillIndex: number
  // ProtoMember(2)
  remainCount: number
  // ProtoMember(3)
  coolTime: number
}
export type LiveUserResult = {
  // ProtoMember(1)
  score: string
  // ProtoMember(2)
  criticalCount: number
  // ProtoMember(3)
  hitCount: number
  // ProtoMember(4)
  missCount: number
  // ProtoMember(5)
  maxComboCount: number
  // ProtoMember(6)
  cardResults: LiveCardResult[]
}
export type PvpOpponentInfo = {
  // ProtoMember(1)
  opponentId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  managerLevel: number
  // ProtoMember(4)
  point: string
  // ProtoMember(5)
  rank: number
  // ProtoMember(6)
  cardInfos: LiveBattleCardInfo[]
}
export type GvgOpponentInfo = {
  // ProtoMember(1)
  opponentId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  managerLevel: number
  // ProtoMember(4)
  cardInfos: LiveBattleCardInfo[]
}
export type QuestRankPattern = {
  // ProtoMember(1)
  rankType: ResultRankType
  // ProtoMember(2)
  plus: number
  // ProtoMember(3)
  thresholdScore: string
}
export type ActivityPromotionReward = {
  // ProtoMember(1)
  resourceType: ResourceType
  // ProtoMember(2)
  resourceId: string
  // ProtoMember(3)
  amount: string
  // ProtoMember(4)
  isRare: boolean
}
export type AllProfileInfo = {
  // ProtoMember(1)
  profile: ProfileInfo
  // ProtoMember(2)
  hierarchy: HierarchyProfileInfo
}
export type FavoritePhotoInfo = {
  // ProtoMember(1)
  photoId: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  imageType: PhotoImageType
}
export type NoticeInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  title: string
  // ProtoMember(3)
  bannerAssetId: string
  // ProtoMember(4)
  linkType: LinkType
  // ProtoMember(5)
  linkDetail: string
  // ProtoMember(6)
  displayNotification: boolean
  // ProtoMember(7)
  startTime: string
  // ProtoMember(8)
  listTitle: string
}
export type PaidJpy = {
  // ProtoMember(1)
  amount: number
}
export type FanEventRankPattern = {
  // ProtoMember(1)
  rankType: ResultRankType
  // ProtoMember(2)
  plus: number
  // ProtoMember(3)
  thresholdPoint: number
}
export type ActivityLevelProgress = {
  // ProtoMember(1)
  maxActivityLevel: number
  // ProtoMember(2)
  before: ActivityLevelInfo
  // ProtoMember(3)
  after: ActivityLevelInfo
}
export type ActivityLevelInfo = {
  // ProtoMember(1)
  exp: number
  // ProtoMember(2)
  level: number
  // ProtoMember(3)
  nextLevelLocked: boolean
}
export type ActivityCampaignEffect = {
  // ProtoMember(1)
  type: ActivityCampaignEffectType
  // ProtoMember(2)
  value: number
  // ProtoMember(3)
  endTime: string
}
export type EventStoryEpisodeInfo = {
  // ProtoMember(1)
  episode: number
  // ProtoMember(2)
  unlocked: boolean
}
export type EventExchangeBoothInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  bannerAssetId: string
  // ProtoMember(4)
  requiredResourceType: ResourceType
  // ProtoMember(5)
  requiredResourceId: string
}
export type PvpSeasonInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  startTime: string
  // ProtoMember(4)
  endTime: string
  // ProtoMember(5)
  aggregateEndTime: string
  // ProtoMember(6)
  challengeCount: number
}
export type CurrentGvgInfo = {
  // ProtoMember(1)
  gvgSeason: GvgSeasonInfo
  // ProtoMember(2)
  isRemainingChallenge: boolean
}
export type HomeEventInfo = {
  // ProtoMember(1)
  eventMissionInfos: HomeEventMissionInfo[]
  // ProtoMember(2)
  tourInfos: HomeTourInfo[]
  // ProtoMember(3)
  backsideInfos: HomeBacksideInfo[]
  // ProtoMember(4)
  marathonInfos: HomeMarathonInfo[]
  // ProtoMember(5)
  photoContestInfos: HomePhotoContestInfo[]
}
export type QuestReward = {
  // ProtoMember(1)
  clearRewards: RewardResult[]
  // ProtoMember(2)
  scoreRankRewards: RewardResult[]
  // ProtoMember(3)
  scoreRankAdditionalRewards: RewardResult[]
  // ProtoMember(4)
  musicMasteryRewards: Reward[]
  // ProtoMember(5)
  achievedRankRewards: Reward[]
  // ProtoMember(6)
  rewardCards: QuestRewardCard[]
  // ProtoMember(7)
  campaignDropRewards: RewardResult[]
}
export type QuestOpponentInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  managerLevel: number
  // ProtoMember(3)
  cardInfos: LiveBattleCardInfo[]
}
export type BoxGachaDrawResult = {
  // ProtoMember(1)
  itemType: BoxGachaItemType
  // ProtoMember(2)
  rewards: Reward[]
  // ProtoMember(3)
  liveBonusId: string
}
export type DokanInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  type: DokanType
  // ProtoMember(3)
  advAssetId: string
  // ProtoMember(4)
  noticeInfo: NoticeInfo
  // ProtoMember(5)
  shopItem: ShopItem
  // ProtoMember(6)
  assetId: string
  // ProtoMember(7)
  description: string
  // ProtoMember(8)
  name: string
  // ProtoMember(9)
  shopType: ShopType
}
export type UserDeckPosition = {
  // ProtoMember(2)
  position: number
  // ProtoMember(3)
  cardId: string
  // ProtoMember(4)
  part1AccessoryId: string
  // ProtoMember(5)
  part2AccessoryId: string
  // ProtoMember(6)
  photoIds: string[]
  // ProtoMember(7)
  costumeId: string
}
export type CommonResponse = {
  // ProtoMember(1)
  updatedData: UpdatedData
  // ProtoMember(2)
  deletedData: DeletedData
}
export type UpdatedData = {
  // ProtoMember(1)
  user: User
  // ProtoMember(2)
  items: UserItem[]
  // ProtoMember(3)
  cards: UserCard[]
  // ProtoMember(4)
  characters: UserCharacter[]
  // ProtoMember(5)
  costumes: UserCostume[]
  // ProtoMember(6)
  accessories: UserAccessory[]
  // ProtoMember(7)
  photos: UserPhoto[]
  // ProtoMember(8)
  decks: UserDeck[]
  // ProtoMember(9)
  deckPositions: UserDeckPosition[]
  // ProtoMember(10)
  stories: UserStory[]
  // ProtoMember(11)
  points: UserPoint[]
  // ProtoMember(12)
  staffs: UserStaff[]
  // ProtoMember(13)
  messages: UserMessage[]
  // ProtoMember(14)
  telephones: UserTelephone[]
  // ProtoMember(15)
  missions: UserMission[]
  // ProtoMember(16)
  profile: UserProfile
  // ProtoMember(17)
  emblems: UserEmblem[]
  // ProtoMember(18)
  characterMusics: UserCharacterMusic[]
  // ProtoMember(19)
  balance: UserBalance
  // ProtoMember(20)
  totalCount: UserTotalCount
  // ProtoMember(21)
  areas: UserArea[]
  // ProtoMember(22)
  quests: UserQuest[]
  // ProtoMember(23)
  gachaButtons: UserGachaButton[]
  // ProtoMember(24)
  homeTalks: UserHomeTalk[]
  // ProtoMember(25)
  photoReport: UserPhotoReport
  // ProtoMember(26)
  cardSupports: UserCardSupport[]
  // ProtoMember(27)
  messageSchedules: UserMessageSchedule[]
  // ProtoMember(28)
  notifications: UserNotification[]
  // ProtoMember(29)
  hierarchy: UserHierarchy
  // ProtoMember(30)
  tutorials: UserTutorial[]
  // ProtoMember(31)
  homePositions: UserHomePosition[]
  // ProtoMember(32)
  musics: UserMusic[]
  // ProtoMember(33)
  decorations: UserDecoration[]
}
export type DeletedData = {
  // ProtoMember(1)
  items: UserItem[]
  // ProtoMember(2)
  accessories: UserAccessory[]
  // ProtoMember(3)
  photos: UserPhoto[]
  // ProtoMember(4)
  decks: UserDeck[]
  // ProtoMember(5)
  deckPositions: UserDeckPosition[]
  // ProtoMember(6)
  points: UserPoint[]
  // ProtoMember(7)
  messageSchedules: UserMessageSchedule[]
  // ProtoMember(9)
  stories: UserStory[]
}
export type CostumeSetRequest = {
  // ProtoMember(1)
  costumeId: string
}
export type CostumeSetResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CostumeLiveSetRequest = {
  // ProtoMember(1)
  costumeId: string
}
export type CostumeLiveSetResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CostumeCheckRequest = {
  // ProtoMember(1)
  costumeId: string
}
export type CostumeCheckResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type DeckSaveRequest = {
  // ProtoMember(1)
  number: number
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  userDeckPositions: UserDeckPosition[]
  // ProtoMember(4)
  deckEditType: DeckEditType
  // ProtoMember(5)
  questId: string
}
export type DeckSaveResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type DeckDeleteRequest = {
  // ProtoMember(1)
  number: number
}
export type DeckDeleteResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type DiaryGetInfosResponse = {
  // ProtoMember(1)
  infos: DiaryInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type DiaryReadRequest = {
  // ProtoMember(1)
  diaryIds: string[]
}
export type DiaryReadResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type DiaryInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  year: number
  // ProtoMember(3)
  month: number
  // ProtoMember(4)
  day: number
  // ProtoMember(5)
  assetId: string
  // ProtoMember(6)
  isRead: boolean
}
export type DivisionListResponse = {
  // ProtoMember(1)
  divisions: DivisionInfo[]
  // ProtoMember(2)
  reasonType: DivisionCannotMoveReasonType
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type DivisionMoveRequest = {
  // ProtoMember(1)
  divisionId: string
}
export type DivisionMoveResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type DokanListResponse = {
  // ProtoMember(1)
  dokanInfos: DokanInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type DokanSetWatchedRequest = {
  // ProtoMember(1)
  dokanIds: string[]
  // ProtoMember(2)
  skippedDokanIds: string[]
}
export type DokanSetWathcedResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ExchangeListResponse = {
  // ProtoMember(1)
  booths: ExchangeBooth[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ExchangeExecuteRequest = {
  // ProtoMember(1)
  exchangeId: string
  // ProtoMember(2)
  count: number
}
export type ExchangeExecuteResponse = {
  // ProtoMember(1)
  results: RewardResult[]
  // ProtoMember(2)
  afterExchangeItem: ExchangeItem
  // ProtoMember(3)
  booth: ExchangeBooth
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ForumListThreadReplyRequest = {
  // ProtoMember(1)
  threadId: string
  // ProtoMember(2)
  requestType: ForumListReplyRequestType
  // ProtoMember(3)
  replyId: number
}
export type ForumCreateThreadRequest = {
  // ProtoMember(1)
  title: string
  // ProtoMember(2)
  firstReplyContent: string
}
export type ForumSendThreadReplyRequest = {
  // ProtoMember(1)
  threadId: string
  // ProtoMember(2)
  replyContent: string
}
export type ForumLikeReplyRequest = {
  // ProtoMember(1)
  threadId: string
  // ProtoMember(2)
  replyId: number
}
export type ForumDislikeReplyRequest = {
  // ProtoMember(1)
  threadId: string
  // ProtoMember(2)
  replyId: number
}
export type ForumBookmarkThreadRequest = {
  // ProtoMember(1)
  threadId: string
}
export type ForumUnbookmarkThreadRequest = {
  // ProtoMember(1)
  threadId: string
}
export type ForumBlockUserRequest = {
  // ProtoMember(1)
  userId: string
}
export type ForumListThreadResponse = {
  // ProtoMember(1)
  threads: ForumThreadInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ForumListThreadReplyResponse = {
  // ProtoMember(1)
  threadReplies: ForumThreadReplyInfo[]
  // ProtoMember(2)
  thread: ForumThreadInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ForumCreateThreadResponse = {
  // ProtoMember(1)
  threadId: string
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ForumSendThreadReplyResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ForumLikeReplyResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ForumDislikeReplyResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ForumBookmarkThreadResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ForumUnbookmarkThreadResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ForumBlockUserResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ForumThreadInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  title: string
  // ProtoMember(3)
  replyCount: number
  // ProtoMember(4)
  isBookmarked: boolean
  // ProtoMember(5)
  lastUpdatedTime: string
  // ProtoMember(6)
  power: number
}
export type ForumThreadReplyInfo = {
  // ProtoMember(1)
  id: number
  // ProtoMember(2)
  threadId: string
  // ProtoMember(3)
  userId: string
  // ProtoMember(4)
  userName: string
  // ProtoMember(5)
  repliedTime: string
  // ProtoMember(6)
  content: string
  // ProtoMember(7)
  likeCount: number
  // ProtoMember(8)
  isLiked: boolean
  // ProtoMember(9)
  isBlocked: boolean
  // ProtoMember(10)
  isDeleted: boolean
}
export type FriendListResponse = {
  // ProtoMember(1)
  profiles: ProfileInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type FriendDeleteRequest = {
  // ProtoMember(1)
  userIds: string[]
}
export type FriendDeleteResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type FriendApplyRequest = {
  // ProtoMember(1)
  userId: string
}
export type FriendApplyResponse = {
  // ProtoMember(1)
  isTargetOfferedLimit: boolean
  // ProtoMember(2)
  isAlreadyFriend: boolean
  // ProtoMember(3)
  isAlreadyOffering: boolean
  // ProtoMember(4)
  isAlreadyOffered: boolean
  // ProtoMember(5)
  isAccountBan: boolean
  // ProtoMember(6)
  applied: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type FriendApproveRequest = {
  // ProtoMember(1)
  userId: string
}
export type FriendApproveResponse = {
  // ProtoMember(1)
  isFriendLimit: boolean
  // ProtoMember(2)
  isTargetFriendLimit: boolean
  // ProtoMember(3)
  isOfferDeleted: boolean
  // ProtoMember(4)
  isAccountBan: boolean
  // ProtoMember(5)
  approved: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type FriendCancelRequest = {
  // ProtoMember(1)
  userId: string
}
export type FriendCancelResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type FriendRejectRequest = {
  // ProtoMember(1)
  userId: string
}
export type FriendRejectResponse = {
  // ProtoMember(1)
  isOfferDeleted: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type FriendListApplyingResponse = {
  // ProtoMember(1)
  profiles: ProfileInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type FriendListAppliedResponse = {
  // ProtoMember(1)
  profiles: ProfileInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GachaListResponse = {
  // ProtoMember(1)
  gachas: GachaInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GachaDrawRequest = {
  // ProtoMember(1)
  gachaButtonId: string
  // ProtoMember(2)
  execCount: number
}
export type GachaDrawResponse = {
  // ProtoMember(1)
  button: GachaButtonInfo
  // ProtoMember(2)
  rewards: Reward[]
  // ProtoMember(3)
  consumptionResults: ConsumptionResult[]
  // ProtoMember(4)
  rewardResults: RewardResult[]
  // ProtoMember(5)
  drawRewardResults: RewardResult[]
  // ProtoMember(6)
  bonusRewards: Reward[]
  // ProtoMember(9)
  gachaMovie: GachaMovie
  // ProtoMember(10)
  cardRewards: Reward[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GachaExchangeRequest = {
  // ProtoMember(1)
  gachaExchangeId: string
  // ProtoMember(2)
  count: number
}
export type GachaExchangeResponse = {
  // ProtoMember(1)
  exchange: GachaExchangeInfo
  // ProtoMember(2)
  rewardResults: RewardResult[]
  // ProtoMember(3)
  consumptionResults: ConsumptionResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GachaProbabilityRequest = {
  // ProtoMember(1)
  gachaId: string
}
export type GachaProbabilityResponse = {
  // ProtoMember(1)
  rarityProbabilityInfos: RarityProbabilityInfo[]
  // ProtoMember(2)
  fixProbabilityInfos: FixProbabilityInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GachaHistoryRequest = {
  // ProtoMember(1)
  gachaType: GachaType
}
export type GachaHistoryResponse = {
  // ProtoMember(1)
  histories: GachaHistory[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GachaSelectCardRequest = {
  // ProtoMember(1)
  gachaId: string
  // ProtoMember(2)
  selectedCardIds: string[]
}
export type GachaSelectCardResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type RarityProbabilityInfo = {
  // ProtoMember(1)
  rarity: number
  // ProtoMember(2)
  probability: number
  // ProtoMember(3)
  probabilityInfos: ProbabilityInfo[]
  // ProtoMember(4)
  gachaRewardPatternType: GachaRewardPatternType
  // ProtoMember(5)
  individualProbability: number
}
export type FixProbabilityInfo = {
  // ProtoMember(1)
  gachaButtonId: string
  // ProtoMember(2)
  rarityProbabilityInfos: RarityProbabilityInfo[]
}
export type ProbabilityInfo = {
  // ProtoMember(1)
  resourceType: ResourceType
  // ProtoMember(2)
  resourceId: string
  // ProtoMember(3)
  amount: string
  // ProtoMember(4)
  probability: number
  // ProtoMember(5)
  isRatioUp: boolean
}
export type GachaAnimation = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  embeddedType: GachaAnimationEmbeddedType
  // ProtoMember(3)
  assetId: string
}
export type GachaMovie = {
  // ProtoMember(1)
  assetId: string
  // ProtoMember(2)
  bgmAssetId: string
  // ProtoMember(3)
  isForce: boolean
}
export type GiftListRequest = {
  // ProtoMember(1)
  offset: number
  // ProtoMember(3)
  sortType: GiftSortType
  // ProtoMember(4)
  filters: GiftFilterType[]
  // ProtoMember(5)
  desc: boolean
}
export type GiftListResponse = {
  // ProtoMember(1)
  gifts: UserGift[]
  // ProtoMember(2)
  hasNext: boolean
  // ProtoMember(3)
  count: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GiftCountRequest = {
  // ProtoMember(1)
  filters: GiftFilterType[]
}
export type GiftCountResponse = {
  // ProtoMember(1)
  count: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GiftReceiveRequest = {
  // ProtoMember(1)
  giftIds: string[]
}
export type GiftReceiveResponse = {
  // ProtoMember(1)
  results: RewardResult[]
  // ProtoMember(2)
  hasUnreceivedGift: boolean
  // ProtoMember(3)
  receivedGiftIds: string[]
  // ProtoMember(4)
  unreceivedGiftIds: string[]
  // ProtoMember(5)
  hierarchyChangeInfo: HierarchyChangeInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GiftHistoryListResponse = {
  // ProtoMember(1)
  gifts: UserGiftHistory[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GuildListResponse = {
  // ProtoMember(1)
  guilds: GuildParam[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GuildGvgSeasonResult = {
  // ProtoMember(1)
  seasonRank: number
  // ProtoMember(2)
  seasonWinCount: number
  // ProtoMember(3)
  seasonLoseCount: number
  // ProtoMember(4)
  seasonDrawCount: number
  // ProtoMember(5)
  seasonTotalPoint: string
}
export type GuildTopResponse = {
  // ProtoMember(1)
  rewardGuildMedalAmount: number
  // ProtoMember(2)
  gvgSeasonInfo: GuildGvgSeasonInfo
  // ProtoMember(3)
  exchangeBoothId: string
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GuildGvgSeasonInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  matchNumber: number
  // ProtoMember(3)
  matchEndTime: string
  // ProtoMember(4)
  guildRank: number
  // ProtoMember(5)
  ranks: GuildGvgRankInfo[]
  // ProtoMember(6)
  aggregateEndTime: string
  // ProtoMember(7)
  isAggregate: boolean
  // ProtoMember(8)
  preMatchResult: GuildGvgSeasonMatchResult
  // ProtoMember(9)
  isRemainingChallenge: boolean
}
export type GuildGvgRankInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  point: string
  // ProtoMember(3)
  rank: number
}
export type GuildJoinRequest = {
  // ProtoMember(1)
  guildId: string
  // ProtoMember(2)
  isRecommended: boolean
}
export type GuildJoinResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GvgTopResponse = {
  // ProtoMember(1)
  topResult: GvgTopInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GvgTopInfo = {
  // ProtoMember(1)
  gvgSeason: GvgSeasonInfo
  // ProtoMember(2)
  currentMatch: GvgCurrentSeasonMatchInfo
  // ProtoMember(3)
  seasonMatches: GvgSeasonMatchInfo[]
  // ProtoMember(4)
  rankingRewards: GvgRankingRewardInfo[]
  // ProtoMember(5)
  guildRankingRewards: GvgGuildRankingRewardInfo[]
  // ProtoMember(6)
  gvgQuest: LiveBattleQuestInfo
  // ProtoMember(7)
  userGvgSeason: UserGvgSeasonInfo
  // ProtoMember(8)
  isSkipAvailable: boolean
}
export type UserGvgSeasonInfo = {
  // ProtoMember(1)
  points: string[]
  // ProtoMember(2)
  totalPoint: string
  // ProtoMember(3)
  rankRatePercent: number
  // ProtoMember(4)
  rank: number
  // ProtoMember(5)
  guildPoint: string
  // ProtoMember(6)
  guildRank: number
  // ProtoMember(7)
  hasChallenged: boolean
  // ProtoMember(8)
  winCount: number
  // ProtoMember(9)
  loseCount: number
  // ProtoMember(10)
  drawCount: number
}
export type GvgListOpponentRequest = {
  // ProtoMember(1)
  gvgSeasonId: string
}
export type GvgListOpponentResponse = {
  // ProtoMember(1)
  opponentInfos: GvgOpponentInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GvgListRankingRequest = {
  // ProtoMember(1)
  gvgSeasonId: string
}
export type GvgListRankingResponse = {
  // ProtoMember(1)
  rankingInfos: LiveRankingInfo[]
  // ProtoMember(2)
  selfPoint: string
  // ProtoMember(3)
  selfRank: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GvgStartRequest = {
  // ProtoMember(1)
  gvgSeasonId: string
  // ProtoMember(2)
  opponentId: string
  // ProtoMember(3)
  deckNumber: number
  // ProtoMember(4)
  useStone: boolean
  // ProtoMember(5)
  isSkip: boolean
  // ProtoMember(6)
  matchNumber: number
}
export type GvgStartResponse = {
  // ProtoMember(1)
  result: LiveResult
  // ProtoMember(2)
  point: string
  // ProtoMember(3)
  addPoint: string
  // ProtoMember(4)
  rank: number
  // ProtoMember(5)
  musicMasteryRewards: Reward[]
  // ProtoMember(6)
  challengeRewards: RewardResult[]
  // ProtoMember(7)
  guildPoint: string
  // ProtoMember(8)
  addGuildPoint: string
  // ProtoMember(9)
  totalPoint: string
  // ProtoMember(10)
  profile: AllProfileInfo
  // ProtoMember(11)
  opponentProfile: AllProfileInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type GvgListAssetRequest = {
  // ProtoMember(1)
  gvgSeasonId: string
  // ProtoMember(2)
  opponentId: string
  // ProtoMember(3)
  deckNumber: number
  // ProtoMember(4)
  matchNumber: number
}
export type GvgListAssetResponse = {
  // ProtoMember(1)
  characterAssets: LiveCharacterAssetInfo[]
  // ProtoMember(2)
  opponentCharacterAssets: LiveCharacterAssetInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type HealthCheckRequest = {
  // ProtoMember(1)
  service: string
}
export type HealthCheckResponse = {}
export type HierarchyRewardsReceiveRequest = {
  // ProtoMember(1)
  hierarchyRewardIds: string[]
}
export type HierarchyDivisionRewardsReceiveRequest = {
  // ProtoMember(1)
  hierarchyDivisionRewardIds: string[]
}
export type HierarchyTopResponse = {
  // ProtoMember(1)
  userHierarchyInfo: UserHierarchyInfo
  // ProtoMember(2)
  rewardInfos: HierarchyRewardInfo[]
  // ProtoMember(3)
  divisionRewardInfos: HierarchyDivisionRewardInfo[]
  // ProtoMember(4)
  highestGradeUserNames: string[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type HierarchyRankingResponse = {
  // ProtoMember(1)
  rankUserInfos: HierarchyRankUserInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type HierarchyRewardsReceiveResponse = {
  // ProtoMember(1)
  results: RewardResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type HierarchyDivisionRewardsReceiveResponse = {
  // ProtoMember(1)
  results: RewardResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type HomeEnterRequest = {
  // ProtoMember(1)
  skipUpdate: boolean
}
export type NotiShopItem = {
  // ProtoMember(1)
  shopId: string
  // ProtoMember(2)
  shopItemIds: string[]
}
export type HomeLoginRequest = {
  // ProtoMember(1)
  settingInfo: SettingInfo
}
export type SettingInfo = {
  // ProtoMember(1)
  soundBgm: number
  // ProtoMember(2)
  soundEffect: number
  // ProtoMember(3)
  soundVoice: number
  // ProtoMember(4)
  graphicType: GraphicType
  // ProtoMember(5)
  frameRate: number
  // ProtoMember(6)
  activityFinishNotification: boolean
  // ProtoMember(7)
  messageNotification: boolean
  // ProtoMember(8)
  nightMode: boolean
  // ProtoMember(9)
  notLoginNotification: boolean
}
export type HomeLoginResponse = {
  // ProtoMember(1)
  paidJpy: PaidJpy
  // ProtoMember(2)
  purchasedLoginBonusShopInfos: PurchasedLoginBonusShopInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type HomeReadTalkRequest = {
  // ProtoMember(1)
  homeTalkId: string
}
export type HomeReadTalkResponse = {
  // ProtoMember(1)
  isReliabilityUp: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type HomeSetReviewResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type HomeSetCharacterPositionRequest = {
  // ProtoMember(1)
  positions: HomeCharacterPosition[]
}
export type HomeCharacterPosition = {
  // ProtoMember(1)
  type: HomePositionType
  // ProtoMember(2)
  characterId: string
}
export type HomeSetCharacterPositionResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type HomePvpInfo = {
  // ProtoMember(1)
  pvpSeason: PvpSeasonInfo
  // ProtoMember(2)
  remainingChallengeCount: number
  // ProtoMember(3)
  nextPvpSeason: PvpSeasonInfo
}
export type PvpRewardResultInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  point: string
  // ProtoMember(3)
  rank: string
  // ProtoMember(4)
  rankingRewards: Reward[]
  // ProtoMember(5)
  hierarchyChangeInfo: HierarchyChangeInfo
}
export type GvgRewardResultInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  point: string
  // ProtoMember(3)
  rank: number
  // ProtoMember(4)
  rankRate: number
  // ProtoMember(5)
  guildRank: number
  // ProtoMember(6)
  rankingRewards: Reward[]
  // ProtoMember(7)
  guildRankingRewards: Reward[]
  // ProtoMember(8)
  hierarchyChangeInfo: HierarchyChangeInfo
}
export type TourRewardResultInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  score: string
  // ProtoMember(3)
  rank: number
  // ProtoMember(4)
  rankingRewards: Reward[]
}
export type BacksideRewardResultInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  score: string
  // ProtoMember(3)
  rank: number
  // ProtoMember(4)
  rankingRewards: Reward[]
}
export type PhotoContestRewardResultInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  score: string
  // ProtoMember(3)
  rank: number
  // ProtoMember(4)
  rankingRewards: Reward[]
}
export type HomeActiveFanEvent = {
  // ProtoMember(1)
  characterIds: string[]
  // ProtoMember(2)
  finishTime: string
  // ProtoMember(3)
  activityPoint: number
  // ProtoMember(4)
  rankType: ResultRankType
  // ProtoMember(5)
  rankPlus: number
  // ProtoMember(6)
  currentCheerPoint: number
}
export type HomeActivePromotion = {
  // ProtoMember(1)
  characterIds: string[]
  // ProtoMember(2)
  finishTime: string
  // ProtoMember(3)
  rewardGoldAmount: number
  // ProtoMember(4)
  rewardCardEnhanceItemAmount: number
  // ProtoMember(5)
  rewards: ActivityPromotionReward[]
  // ProtoMember(6)
  hasMoreRewards: boolean
}
export type HomeActiveRefresh = {
  // ProtoMember(1)
  characterIds: string[]
  // ProtoMember(2)
  finishTime: string
}
export type FunctionMaintenanceInfo = {
  // ProtoMember(1)
  type: FunctionMaintenanceType
  // ProtoMember(2)
  targetIds: string[]
  // ProtoMember(3)
  isTwitter: boolean
  // ProtoMember(4)
  websiteUrl: string
}
export type BannerInfo = {
  // ProtoMember(1)
  menuBanners: Banner[]
  // ProtoMember(2)
  messageBanners: Banner[]
  // ProtoMember(3)
  boardBanners: Banner[]
  // ProtoMember(4)
  questBanners: Banner[]
}
export type FanEventInfo = {
  // ProtoMember(1)
  fanEvents: FanEvent[]
  // ProtoMember(2)
  activeFanEvent: ActiveFanEvent
  // ProtoMember(3)
  campaignEffects: ActivityCampaignEffect[]
}
export type PromotionInfo = {
  // ProtoMember(1)
  promotions: Promotion[]
  // ProtoMember(2)
  activePromotion: ActivePromotion
  // ProtoMember(3)
  campaignEffects: ActivityCampaignEffect[]
}
export type RefreshInfo = {
  // ProtoMember(1)
  refreshes: Refresh[]
  // ProtoMember(2)
  activeRefresh: ActiveRefresh
  // ProtoMember(3)
  campaignEffects: ActivityCampaignEffect[]
}
export type PurchasedLoginBonusShopInfo = {
  // ProtoMember(1)
  shopInfo: ShopInfo
  // ProtoMember(2)
  loginBonusPackageItem: LoginBonusPackageItem
}
export type PurchasedConditionRewardShopInfo = {
  // ProtoMember(1)
  shopInfo: ShopInfo
  // ProtoMember(2)
  conditionRewardPackageItem: ConditionRewardPackageItem
}
export type ItemSellRequest = {
  // ProtoMember(1)
  itemId: string
  // ProtoMember(2)
  amount: string
}
export type ItemSellResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type LoginBonusListResponse = {
  // ProtoMember(1)
  infos: LoginBonusInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type LoginBonusReceiveRequest = {
  // ProtoMember(1)
  loginBonusId: string
}
export type LoginBonusReceiveResponse = {
  // ProtoMember(1)
  userLoginBonus: UserLoginBonus
  // ProtoMember(2)
  rewards: RewardResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type LoginBonusInfo = {
  // ProtoMember(1)
  userLoginBonus: UserLoginBonus
  // ProtoMember(2)
  noticeInfo: NoticeInfo
}
export type MarathonTopRequest = {
  // ProtoMember(1)
  marathonId: string
}
export type MarathonTopResponse = {
  // ProtoMember(1)
  marathonInfo: MarathonInfo
  // ProtoMember(2)
  userMarathonInfo: UserMarathonInfo
  // ProtoMember(3)
  questInfos: MarathonQuestInfo[]
  // ProtoMember(4)
  boxGachaInfos: MarathonBoxGachaInfo[]
  // ProtoMember(5)
  dokanInfos: DokanInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MarathonQuestUnlockRequest = {
  // ProtoMember(1)
  marathonQuestId: string
}
export type MarathonQuestUnlockResponse = {
  // ProtoMember(1)
  unlockedQuestInfo: MarathonQuestInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MarathonQuestStartRequest = {
  // ProtoMember(1)
  marathonQuestId: string
  // ProtoMember(2)
  marathonQuestDifficultyNumber: number
  // ProtoMember(3)
  deckNumber: number
  // ProtoMember(4)
  isSkip: boolean
  // ProtoMember(5)
  execCount: number
}
export type MarathonQuestListAssetRequest = {
  // ProtoMember(1)
  marathonQuestId: string
  // ProtoMember(2)
  deckNumber: number
}
export type MarathonQuestListAssetResponse = {
  // ProtoMember(1)
  characterAssets: LiveCharacterAssetInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MarathonUseQuestStaminaRecoveryItemRequest = {
  // ProtoMember(1)
  marathonId: string
  // ProtoMember(2)
  amount: number
}
export type MarathonUseQuestStaminaRecoveryItemResponse = {
  // ProtoMember(1)
  userMarathonInfo: UserMarathonInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MarathonListDeckRequest = {
  // ProtoMember(1)
  marathonId: string
}
export type MarathonListDeckResponse = {
  // ProtoMember(1)
  deckInfos: MarathonDeckInfo[]
}
export type MarathonDeckSaveRequest = {
  // ProtoMember(1)
  marathonQuestId: string
  // ProtoMember(2)
  number: number
  // ProtoMember(3)
  name: string
  // ProtoMember(4)
  userDeckPositions: UserDeckPosition[]
}
export type MarathonDeckSaveResponse = {
  // ProtoMember(1)
  deckInfo: MarathonDeckInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MarathonBoxGachaDrawRequest = {
  // ProtoMember(1)
  marathonId: string
  // ProtoMember(2)
  boxGachaId: string
  // ProtoMember(3)
  execCount: number
}
export type MarathonBoxGachaDrawResponse = {
  // ProtoMember(1)
  drawResults: BoxGachaDrawResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MarathonBoxGachaResetRequest = {
  // ProtoMember(1)
  marathonId: string
  // ProtoMember(2)
  boxGachaId: string
}
export type MarathonBoxGachaResetResponse = {
  // ProtoMember(1)
  boxGachaInfo: MarathonBoxGachaInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type UserMarathonInfo = {
  // ProtoMember(1)
  currentStamina: number
  // ProtoMember(2)
  staminaUpdatedTime: string
  // ProtoMember(3)
  liveBonusInfos: MarathonLiveBonusInfo[]
}
export type MarathonQuestDifficultyLevelInfo = {
  // ProtoMember(1)
  marathonQuestDifficultyNumber: number
  // ProtoMember(2)
  cleared: boolean
  // ProtoMember(3)
  rankType: ResultRankType
  // ProtoMember(4)
  plus: number
  // ProtoMember(5)
  opponentInfo: QuestOpponentInfo
  // ProtoMember(6)
  unlocked: boolean
  // ProtoMember(7)
  highestScore: string
}
export type MarathonDeckInfo = {
  // ProtoMember(1)
  number: number
  // ProtoMember(2)
  cardDetailInfo: MarathonDeckCardDetailInfo[]
  // ProtoMember(3)
  deckOverallValue: string
}
export type MarathonDeckCardDetailInfo = {
  // ProtoMember(1)
  position: number
  // ProtoMember(2)
  vocal: string
  // ProtoMember(3)
  dance: string
  // ProtoMember(4)
  visual: string
  // ProtoMember(5)
  stamina: string
  // ProtoMember(6)
  mental: string
  // ProtoMember(7)
  technique: string
  // ProtoMember(8)
  accessoryInfos: MarathonAccessoryInfo[]
  // ProtoMember(9)
  photoInfos: MarathonPhotoInfo[]
}
export type MarathonPhotoInfo = {
  // ProtoMember(1)
  photoId: string
  // ProtoMember(2)
  level: number
  // ProtoMember(3)
  abilities: MarathonPhotoAbilityInfo[]
}
export type MarketListItemResponse = {
  // ProtoMember(1)
  marketItems: MarketItem[]
  // ProtoMember(2)
  nextResetTime: string
  // ProtoMember(3)
  freeResetRemainCount: number
  // ProtoMember(4)
  resetRemainCount: number
  // ProtoMember(5)
  requiredResetStoneAmount: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MarketResetRequest = {
  // ProtoMember(1)
  isFree: boolean
}
export type MarketResetResponse = {
  // ProtoMember(1)
  marketItems: MarketItem[]
  // ProtoMember(2)
  freeResetRemainCount: number
  // ProtoMember(3)
  resetRemainCount: number
  // ProtoMember(4)
  requiredResetStoneAmount: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MarketPurchaseRequest = {
  // ProtoMember(1)
  number: number
}
export type MarketPurchaseResponse = {
  // ProtoMember(1)
  marketItems: MarketItem[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MasterGetResponse = {
  // ProtoMember(1)
  masterTag: MasterTag
}
export type MasterFaqResponse = {
  // ProtoMember(1)
  helpCategories: HelpCategory[]
}
export type MessageListGroupResponse = {
  // ProtoMember(1)
  infos: MessageGroupInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MessageTimelineRequest = {
  // ProtoMember(1)
  messageGroupId: string
  // ProtoMember(2)
  timelineId: string
}
export type MessageTimelineResponse = {
  // ProtoMember(1)
  infos: TimelineInfo[]
  // ProtoMember(2)
  hasNext: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MessageReceiveRequest = {
  // ProtoMember(1)
  messageIds: string[]
}
export type MessageReceiveResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MessageSaveRequest = {
  // ProtoMember(1)
  messageGroupId: string
  // ProtoMember(2)
  timelineId: string
  // ProtoMember(3)
  messageDetailId: string
  // ProtoMember(4)
  selectMessageDetailIds: string[]
}
export type MessageSaveResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MessageFinishRequest = {
  // ProtoMember(1)
  messageGroupId: string
  // ProtoMember(2)
  timelineId: string
  // ProtoMember(3)
  selectMessageDetailIds: string[]
}
export type MessageFinishResponse = {
  // ProtoMember(1)
  isReliabilityUp: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MessageSaveHistoryRequest = {
  // ProtoMember(1)
  messageId: string
  // ProtoMember(2)
  selectMessageDetailIds: string[]
}
export type MessageSaveHistoryResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MigrationListResponse = {
  // ProtoMember(1)
  apple: boolean
  // ProtoMember(2)
  google: boolean
  // ProtoMember(3)
  facebook: boolean
  // ProtoMember(4)
  twitter: boolean
  // ProtoMember(5)
  password: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MigrationExecuteRequest = {
  // ProtoMember(1)
  onetimeToken: string
}
export type MigrationExecuteResponse = {
  // ProtoMember(1)
  token: string
}
export type MigrationSetPasswordRequest = {
  // ProtoMember(1)
  password: string
}
export type MigrationSetPasswordResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MigrationMigratePasswordRequest = {
  // ProtoMember(1)
  userId: string
  // ProtoMember(2)
  password: string
}
export type MigrationProviderAppleInfo = {
  // ProtoMember(1)
  idToken: string
}
export type MigrationLinkAppleRequest = {
  // ProtoMember(1)
  info: MigrationProviderAppleInfo
}
export type MigrationMigrateAppleRequest = {
  // ProtoMember(1)
  info: MigrationProviderAppleInfo
}
export type MigrationProviderGoogleInfo = {
  // ProtoMember(1)
  idToken: string
}
export type MigrationLinkGoogleRequest = {
  // ProtoMember(1)
  info: MigrationProviderGoogleInfo
}
export type MigrationMigrateGoogleRequest = {
  // ProtoMember(1)
  info: MigrationProviderGoogleInfo
}
export type RequestTwitterOAuthTokenRequest = {
  // ProtoMember(1)
  bundleId: string
}
export type RequestTwitterOAuthTokenResponse = {
  // ProtoMember(1)
  oauthToken: string
}
export type MigrationProviderTwitterInfo = {
  // ProtoMember(1)
  oauthToken: string
  // ProtoMember(2)
  oauthVerifier: string
}
export type MigrationLinkTwitterRequest = {
  // ProtoMember(1)
  info: MigrationProviderTwitterInfo
}
export type MigrationMigrateTwitterRequest = {
  // ProtoMember(1)
  info: MigrationProviderTwitterInfo
}
export type MigrationLinkResponse = {
  // ProtoMember(1)
  success: boolean
  // ProtoMember(2)
  linkedUserId: string
  // ProtoMember(3)
  linkedUser: User
  // ProtoMember(4)
  onetimeToken: string
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MigrationMigrateResponse = {
  // ProtoMember(1)
  success: boolean
  // ProtoMember(2)
  linkedUserId: string
  // ProtoMember(3)
  linkedUser: User
  // ProtoMember(4)
  onetimeToken: string
}
export type MigrationUnlinkRequest = {
  // ProtoMember(1)
  providerType: ProviderType
}
export type MigrationUnlinkResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MissionListResponse = {
  // ProtoMember(1)
  userMissions: UserMission[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MissionReceiveRequest = {
  // ProtoMember(1)
  missionIds: string[]
}
export type MissionReceiveResponse = {
  // ProtoMember(1)
  results: RewardResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MissionURLTransitionRequest = {
  // ProtoMember(1)
  url: string
}
export type MissionURLTransitionResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type MissionEventRequest = {
  // ProtoMember(1)
  eventMissionId: string
}
export type MissionEventResponse = {
  // ProtoMember(1)
  info: EventMissionInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type CheckOption = {
  // ProtoMember(1)
  disableGameAuthToken: boolean
  // ProtoMember(2)
  disableMasterVersion: boolean
  // ProtoMember(3)
  enableResponseCache: boolean
  // ProtoMember(4)
  enableBodyHash: boolean
  // ProtoMember(5)
  disableCheckLoginToday: boolean
  // ProtoMember(6)
  disableCheckMaintenance: boolean
  // ProtoMember(7)
  disableCheckAppVersion: boolean
}
export type ErrorOption = {
  // ProtoMember(1)
  errorCodes: ErrorCode[]
}
export type NoticeListResponse = {
  // ProtoMember(1)
  notices: NoticeInfo[]
  // ProtoMember(2)
  malfunctionNotices: NoticeInfo[]
  // ProtoMember(3)
  prNotices: NoticeInfo[]
  // ProtoMember(4)
  noticeHasNext: boolean
  // ProtoMember(5)
  malfunctionNoticeHasNext: boolean
  // ProtoMember(6)
  prNoticeHasNext: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type NoticeFetchRequest = {
  // ProtoMember(1)
  noticeCategoryType: number
  // ProtoMember(2)
  offset: number
}
export type NoticeFetchResponse = {
  // ProtoMember(1)
  notices: NoticeInfo[]
  // ProtoMember(2)
  hasNext: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type NoticeGetRequest = {
  // ProtoMember(1)
  noticeId: string
}
export type NoticeGetResponse = {
  // ProtoMember(1)
  notice: NoticeInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoSwitchLockRequest = {
  // ProtoMember(1)
  photoIds: string[]
}
export type PhotoSwitchLockResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoDeleteRequest = {
  // ProtoMember(1)
  photoIds: string[]
}
export type PhotoDeleteResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoEnhanceRequest = {
  // ProtoMember(1)
  photoId: string
  // ProtoMember(2)
  level: number
}
export type PhotoEnhanceResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoRerollRequest = {
  // ProtoMember(1)
  photoId: string
}
export type PhotoRerollResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoUpdateRequest = {
  // ProtoMember(1)
  photoId: string
  // ProtoMember(2)
  name: string
}
export type PhotoUpdateResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoReportResponse = {
  // ProtoMember(1)
  isGift: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoGetImageUrlRequest = {
  // ProtoMember(1)
  type: PhotoImageRequestType
  // ProtoMember(2)
  assetIds: string[]
}
export type PhotoGetImageUrlResponse = {
  // ProtoMember(1)
  urlList: PhotoImageUrl[]
}
export type PhotoImageUrl = {
  // ProtoMember(1)
  assetId: string
  // ProtoMember(2)
  origUrl: string
  // ProtoMember(3)
  tmbUrl: string
}
export type PhotoCheckShootingRequest = {
  // ProtoMember(1)
  actionType: PhotoShootingActionType
  // ProtoMember(2)
  photoActivityId: string
  // ProtoMember(3)
  photoMusicId: string
  // ProtoMember(4)
  photoStageId: string
  // ProtoMember(5)
  characterIds: string[]
  // ProtoMember(6)
  costumeIds: string[]
}
export type PhotoCheckShootingResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoCreateShootingRequest = {
  // ProtoMember(1)
  itemId: string
  // ProtoMember(2)
  actionType: PhotoShootingActionType
  // ProtoMember(3)
  photoActivityId: string
  // ProtoMember(4)
  photoMusicId: string
  // ProtoMember(5)
  photoStageId: string
  // ProtoMember(6)
  mainCharacterId: string
  // ProtoMember(7)
  characterIds: string[]
  // ProtoMember(8)
  costumeIds: string[]
  // ProtoMember(9)
  manualCount: number
}
export type PhotoCreateShootingResponse = {
  // ProtoMember(1)
  photo: UserPhoto
  // ProtoMember(2)
  isGift: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoListShootingResponse = {
  // ProtoMember(1)
  activities: PhotoActivity[]
  // ProtoMember(2)
  musics: PhotoMusic[]
  // ProtoMember(3)
  stages: PhotoStage[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoContestTopRequest = {
  // ProtoMember(1)
  photoContestId: string
}
export type PhotoContestTopResponse = {
  // ProtoMember(1)
  photoContestInfo: PhotoContestInfo
  // ProtoMember(2)
  dokanInfos: DokanInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoContestListPhotoRequest = {
  // ProtoMember(1)
  photoContestId: string
}
export type PhotoContestListPhotoResponse = {
  // ProtoMember(1)
  photoInfos: PhotoContestPhotoInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoContestRankingRequest = {
  // ProtoMember(1)
  photoContestId: string
}
export type PhotoContestRankingResponse = {
  // ProtoMember(1)
  rankingInfos: PhotoContestRankingInfo[]
  // ProtoMember(2)
  selfPoint: string
  // ProtoMember(3)
  selfRank: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoContestReceiveSectionRewardsRequest = {
  // ProtoMember(1)
  photoContestId: string
  // ProtoMember(2)
  sectionRewardIds: string[]
  // ProtoMember(3)
  sectionId: string
}
export type PhotoContestReceiveSectionRewardsResponse = {
  // ProtoMember(1)
  results: RewardResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoContestCheckShootingRequest = {
  // ProtoMember(1)
  photoContestId: string
  // ProtoMember(2)
  actionType: PhotoShootingActionType
  // ProtoMember(3)
  photoContestActivityId: string
  // ProtoMember(4)
  photoContestQuestMusicId: string
  // ProtoMember(5)
  photoContestQuestStageId: string
  // ProtoMember(6)
  selectedCharacterIds: string[]
  // ProtoMember(7)
  selectedCostumeIds: string[]
  // ProtoMember(8)
  sectionId: string
}
export type PhotoContestCheckShootingResponse = {
  // ProtoMember(1)
  nextPhotoImageId: string
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PhotoContestSubmitShootingRequest = {
  // ProtoMember(1)
  photoContestId: string
  // ProtoMember(2)
  sectionId: string
  // ProtoMember(3)
  itemId: string
  // ProtoMember(4)
  actionType: PhotoShootingActionType
  // ProtoMember(5)
  photoContestActivityId: string
  // ProtoMember(6)
  photoContestQuestMusicId: string
  // ProtoMember(7)
  photoContestQuestStageId: string
  // ProtoMember(8)
  mainCharacterId: string
  // ProtoMember(9)
  characterIds: string[]
  // ProtoMember(10)
  costumeIds: string[]
  // ProtoMember(11)
  elapsedMilliSeconds: number
  // ProtoMember(12)
  sizeFullPermil: number
  // ProtoMember(13)
  sizeUpperPermil: number
  // ProtoMember(14)
  directionFrontPermil: number
  // ProtoMember(15)
  directionSidePermil: number
  // ProtoMember(16)
  positionPermil: number
  // ProtoMember(17)
  shootingMotionId: string
  // ProtoMember(18)
  selectedCharacterIds: string[]
  // ProtoMember(19)
  selectedCostumeIds: string[]
}
export type PhotoContestPhotoInfo = {
  // ProtoMember(1)
  assetId: string
  // ProtoMember(2)
  sectionId: string
  // ProtoMember(3)
  evaluationPoint: string
  // ProtoMember(4)
  isBest: boolean
  // ProtoMember(5)
  shootingTime: string
}
export type ProfileFindUserRequest = {
  // ProtoMember(1)
  userId: string
}
export type ProfileUpdateNameRequest = {
  // ProtoMember(1)
  name: string
}
export type ProfileUpdateNameResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ProfileUpdateMessageRequest = {
  // ProtoMember(1)
  message: string
}
export type ProfileUpdateMessageResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ProfileUpdateBackgroundRequest = {
  // ProtoMember(1)
  backgroundType: ProfileBackgroundType
  // ProtoMember(2)
  favoriteCardId: string
  // ProtoMember(3)
  favoritePhotoId: string
}
export type ProfileUpdateBackgroundResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ProfileUpdateFavoriteCharactersRequest = {
  // ProtoMember(1)
  favoriteCharacterIds: string[]
}
export type ProfileUpdateFavoriteCharactersResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ProfileUpdateDecorationRequest = {
  // ProtoMember(1)
  decorationId: string
}
export type ProfileUpdateDecorationResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ProfileUpdateEmblemRequest = {
  // ProtoMember(1)
  emblemId: string
}
export type ProfileUpdateEmblemResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ProfileUpdateLayoutRequest = {
  // ProtoMember(1)
  layoutType: ProfileLayoutType
}
export type ProfileUpdateLayoutResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ProfileClearTwitterMissionResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PvpTopResponse = {
  // ProtoMember(1)
  topResult: PvpTopResultInfo
  // ProtoMember(2)
  opponentInfos: PvpOpponentInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PvpTopResultInfo = {
  // ProtoMember(1)
  pvpSeason: PvpSeasonInfo
  // ProtoMember(2)
  pvpRewards: PvpRewardInfo[]
  // ProtoMember(3)
  pvpQuest: LiveBattleQuestInfo
  // ProtoMember(4)
  userPvpSeason: UserPvpSeasonInfo
  // ProtoMember(5)
  rank: string
  // ProtoMember(6)
  isSkipAvailable: boolean
  // ProtoMember(7)
  pvpTicketAvailableAmount: number
}
export type UserPvpSeasonInfo = {
  // ProtoMember(1)
  point: string
  // ProtoMember(2)
  challengeCount: number
}
export type PvpListOpponentRequest = {
  // ProtoMember(1)
  pvpSeasonId: string
}
export type PvpListOpponentResponse = {
  // ProtoMember(1)
  opponentInfos: PvpOpponentInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PvpListRankingRequest = {
  // ProtoMember(1)
  pvpSeasonId: string
}
export type PvpListRankingResponse = {
  // ProtoMember(1)
  rankingInfos: LiveRankingInfo[]
  // ProtoMember(2)
  selfPoint: string
  // ProtoMember(3)
  selfRank: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PvpStartRequest = {
  // ProtoMember(1)
  pvpSeasonId: string
  // ProtoMember(2)
  opponentId: string
  // ProtoMember(3)
  deckNumber: number
  // ProtoMember(4)
  usePvpTicket: boolean
  // ProtoMember(5)
  isSkip: boolean
}
export type PvpStartResponse = {
  // ProtoMember(1)
  result: LiveResult
  // ProtoMember(2)
  point: string
  // ProtoMember(3)
  addPoint: string
  // ProtoMember(4)
  rank: number
  // ProtoMember(5)
  musicMasteryRewards: Reward[]
  // ProtoMember(6)
  challengeRewards: RewardResult[]
  // ProtoMember(7)
  profile: AllProfileInfo
  // ProtoMember(8)
  opponentProfile: AllProfileInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type PvpListAssetRequest = {
  // ProtoMember(1)
  pvpSeasonId: string
  // ProtoMember(2)
  opponentId: string
  // ProtoMember(3)
  deckNumber: number
}
export type PvpListAssetResponse = {
  // ProtoMember(1)
  characterAssets: LiveCharacterAssetInfo[]
  // ProtoMember(2)
  opponentCharacterAssets: LiveCharacterAssetInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestListMainResponse = {
  // ProtoMember(1)
  areaGroups: QuestAreaGroupInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestListDailyResponse = {
  // ProtoMember(1)
  areas: QuestAreaInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestListContestResponse = {
  // ProtoMember(1)
  area: QuestAreaInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestListTowerResponse = {
  // ProtoMember(1)
  area: QuestAreaInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestStartRequest = {
  // ProtoMember(1)
  questId: string
  // ProtoMember(2)
  deckNumber: number
  // ProtoMember(3)
  useDailyTicket: boolean
  // ProtoMember(4)
  isSkip: boolean
  // ProtoMember(5)
  playCount: number
}
export type QuestListTowerRankingRequest = {
  // ProtoMember(1)
  areaId: string
}
export type QuestListContestRankingRequest = {
  // ProtoMember(1)
  questId: string
}
export type QuestListContestRankingResponse = {
  // ProtoMember(1)
  selfHighestRank: number
  // ProtoMember(2)
  selfScore: string
  // ProtoMember(3)
  ranks: QuestContestRankInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestListLatestClearRequest = {
  // ProtoMember(1)
  questId: string
}
export type QuestListLatestClearResponse = {
  // ProtoMember(1)
  clears: QuestClearInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestListAssetRequest = {
  // ProtoMember(1)
  questId: string
  // ProtoMember(2)
  deckNumber: number
}
export type QuestListAssetResponse = {
  // ProtoMember(1)
  characterAssets: LiveCharacterAssetInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestGetLatestClearLiveResultRequest = {
  // ProtoMember(1)
  questId: string
  // ProtoMember(2)
  userId: string
}
export type QuestGetLatestClearLiveResultResponse = {
  // ProtoMember(1)
  result: LiveResult
  // ProtoMember(2)
  rankPatterns: QuestRankPattern[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestGetRankingLiveResultRequest = {
  // ProtoMember(1)
  questId: string
  // ProtoMember(2)
  userId: string
}
export type QuestGetRankingLiveResultResponse = {
  // ProtoMember(1)
  result: LiveResult
  // ProtoMember(2)
  rankPatterns: QuestRankPattern[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type QuestTowerTopResponse = {
  // ProtoMember(1)
  towerArea: QuestTowerAreaInfo
  // ProtoMember(2)
  subTowerAreas: QuestTowerAreaInfo[]
  // ProtoMember(3)
  hierarchyNotiInfo: HierarchyNotiInfo
}
export type QuestTopPvpInfo = {
  // ProtoMember(5)
  rank: number
  // ProtoMember(6)
  remainingChallengeCount: number
  // ProtoMember(7)
  pvpInfo: PvpSeasonInfo
  // ProtoMember(8)
  nextPvpInfo: PvpSeasonInfo
}
export type SalaryGetPayslipRequest = {
  // ProtoMember(1)
  yearMonths: number[]
}
export type SalaryGetPayslipResponse = {
  // ProtoMember(1)
  payslips: Payslip[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type SalaryPayRequest = {
  // ProtoMember(1)
  year: number
  // ProtoMember(2)
  month: number
}
export type SalaryPayResponse = {
  // ProtoMember(1)
  payslip: Payslip
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopListResponse = {
  // ProtoMember(1)
  shops: ShopInfo[]
  // ProtoMember(2)
  dokanInfos: DokanInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopListItemRequest = {
  // ProtoMember(1)
  shopId: string
}
export type ShopListItemResponse = {
  // ProtoMember(1)
  shopItems: ShopItem[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopGetLoginBonusPackageItemRequest = {
  // ProtoMember(1)
  shopId: string
}
export type ShopGetLoginBonusPackageItemResponse = {
  // ProtoMember(1)
  loginBonusPackageItem: LoginBonusPackageItem
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopGetConditionRewardPackageItemRequest = {
  // ProtoMember(1)
  shopId: string
}
export type ShopGetConditionRewardPackageItemResponse = {
  // ProtoMember(1)
  conditionRewardPackageItem: ConditionRewardPackageItem
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopPurchaseRequest = {
  // ProtoMember(1)
  shopItemId: string
}
export type ShopPurchaseResponse = {
  // ProtoMember(1)
  rewards: RewardResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopRegisterPurchaseTransactionRequest = {
  // ProtoMember(1)
  shopItemId: string
}
export type ShopRegisterPurchaseTransactionResponse = {
  // ProtoMember(1)
  transactionId: string
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopCancelPurchaseTransactionRequest = {
  // ProtoMember(1)
  shopItemId: string
  // ProtoMember(2)
  transactionId: string
}
export type ShopCancelPurchaseTransactionResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopPurchaseStoneRequest = {
  // ProtoMember(1)
  productId: string
  // ProtoMember(2)
  transactionId: string
  // ProtoMember(3)
  receipt: string
  // ProtoMember(4)
  signature: string
  // ProtoMember(5)
  currencyCode: string
  // ProtoMember(6)
  localizedPricePermyriad: string
}
export type ShopPurchaseStoneResponse = {
  // ProtoMember(1)
  rewards: RewardResult[]
  // ProtoMember(2)
  paidJpy: PaidJpy
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopRecoverPurchaseStoneRequest = {
  // ProtoMember(1)
  productId: string
  // ProtoMember(2)
  receipt: string
  // ProtoMember(3)
  signature: string
  // ProtoMember(4)
  currencyCode: string
  // ProtoMember(5)
  localizedPricePermyriad: string
}
export type ShopRecoverPurchaseStoneResponse = {
  // ProtoMember(1)
  rewards: RewardResult[]
  // ProtoMember(2)
  shopItemName: string
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopCheckPurchaseStoneRequest = {
  // ProtoMember(1)
  shopItemId: string
}
export type ShopCheckPurchaseStoneResponse = {
  // ProtoMember(1)
  birthdayNotRegistered: boolean
  // ProtoMember(2)
  exceedMaxStoneAmount: boolean
  // ProtoMember(3)
  exceedPurchaseThreshold: boolean
  // ProtoMember(4)
  exceedAlertThreshold: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopRegisterBirthdayRequest = {
  // ProtoMember(1)
  year: number
  // ProtoMember(2)
  month: number
}
export type ShopRegisterBirthdayResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type ShopReceiveConditionRewardRequest = {
  // ProtoMember(1)
  shopId: string
  // ProtoMember(2)
  numbers: number[]
}
export type ShopReceiveConditionRewardResponse = {
  // ProtoMember(1)
  rewards: RewardResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type StaffTrainRequest = {
  // ProtoMember(1)
  parameterType: ParameterType
}
export type StaffTrainResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type StoryReadRequest = {
  // ProtoMember(1)
  storyId: string
  // ProtoMember(2)
  isLast: boolean
}
export type StoryReadResponse = {
  // ProtoMember(1)
  rewards: RewardResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type StoryReleaseEpisodeRequest = {
  // ProtoMember(1)
  storyPartId: string
  // ProtoMember(2)
  chapter: number
  // ProtoMember(3)
  route: number
  // ProtoMember(4)
  episode: number
}
export type StoryReleaseEpisodeResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type StoryListEventResponse = {
  // ProtoMember(1)
  infos: EventStoryInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type StoryReadEventRequest = {
  // ProtoMember(1)
  eventStoryId: string
  // ProtoMember(2)
  episode: number
  // ProtoMember(3)
  isLast: boolean
}
export type StoryReadEventResponse = {
  // ProtoMember(1)
  rewards: RewardResult[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type SystemCheckRequest = {
  // ProtoMember(1)
  firebaseIDToken: string
}
export type SystemCheckResponse = {
  // ProtoMember(1)
  maintenanceInfo: MaintenanceInfo
  // ProtoMember(2)
  reviewInfo: ReviewInfo
  // ProtoMember(3)
  keepAliveTimeMilliseconds: number
  // ProtoMember(4)
  keepAliveTimeoutMilliseconds: number
}
export type MaintenanceInfo = {
  // ProtoMember(1)
  inMaintenance: boolean
  // ProtoMember(2)
  topMessage: string
  // ProtoMember(3)
  bottomMessage: string
  // ProtoMember(4)
  startTime: string
  // ProtoMember(5)
  endTime: string
  // ProtoMember(6)
  isBeforeRelease: boolean
  // ProtoMember(7)
  twitterUrl: string
  // ProtoMember(8)
  mvUrl: string
  // ProtoMember(9)
  gamePvUrl: string
}
export type ReviewInfo = {
  // ProtoMember(1)
  inReview: boolean
  // ProtoMember(2)
  alternativeApiHost: string
}
export type TelephoneReceiveRequest = {
  // ProtoMember(1)
  telephoneIds: string[]
}
export type TelephoneReceiveResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TelephoneFinishesRequest = {
  // ProtoMember(1)
  telephoneIds: string[]
}
export type TelephoneFinishesResponse = {
  // ProtoMember(1)
  isReliabilityUp: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TelephoneCallHistoryRequest = {
  // ProtoMember(1)
  telephoneId: string
}
export type TelephoneCallHistoryResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourTopRequest = {
  // ProtoMember(1)
  tourId: string
}
export type TourTopResponse = {
  // ProtoMember(1)
  tourInfo: TourInfo
  // ProtoMember(2)
  userTourInfo: UserTourInfo
  // ProtoMember(3)
  dokanInfos: DokanInfo[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourRankingRequest = {
  // ProtoMember(1)
  tourId: string
}
export type TourRankingResponse = {
  // ProtoMember(1)
  rankingInfos: TourRankingInfo[]
  // ProtoMember(2)
  selfPoint: string
  // ProtoMember(3)
  selfRank: number
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourAreaTopRequest = {
  // ProtoMember(1)
  tourId: string
  // ProtoMember(2)
  isCurrentAreaRestart: boolean
  // ProtoMember(3)
  tourDifficultyNumber: number
}
export type TourAreaTopResponse = {
  // ProtoMember(1)
  areaInfo: TourAreaInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourAreaActivityRequest = {
  // ProtoMember(1)
  tourId: string
  // ProtoMember(2)
  step: number
  // ProtoMember(3)
  position: number
}
export type TourAreaActivityResponse = {
  // ProtoMember(1)
  areaInfo: TourAreaInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourAreaRefreshRequest = {
  // ProtoMember(1)
  tourId: string
  // ProtoMember(2)
  step: number
  // ProtoMember(3)
  position: number
}
export type TourAreaRefreshResponse = {
  // ProtoMember(1)
  areaInfo: TourAreaInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourAreaScoutRequest = {
  // ProtoMember(1)
  tourId: string
  // ProtoMember(2)
  step: number
  // ProtoMember(3)
  position: number
  // ProtoMember(4)
  cardId: string
}
export type TourAreaScoutResponse = {
  // ProtoMember(1)
  areaInfo: TourAreaInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourAreaLiveRequest = {
  // ProtoMember(1)
  tourId: string
  // ProtoMember(2)
  step: number
  // ProtoMember(3)
  position: number
  // ProtoMember(4)
  isSkip: boolean
}
export type TourAreaLiveResponse = {
  // ProtoMember(1)
  areaInfo: TourAreaInfo
  // ProtoMember(2)
  liveInfo: TourLiveInfo
  // ProtoMember(3)
  resultInfo: TourResultInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourAreaLiveBonusRequest = {
  // ProtoMember(1)
  tourId: string
  // ProtoMember(2)
  step: number
  // ProtoMember(3)
  position: number
  // ProtoMember(4)
  liveBonusId: string
}
export type TourAreaLiveBonusResponse = {
  // ProtoMember(1)
  areaInfo: TourAreaInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourAreaPvpRequest = {
  // ProtoMember(1)
  tourId: string
  // ProtoMember(2)
  step: number
  // ProtoMember(3)
  position: number
  // ProtoMember(4)
  isSkip: boolean
}
export type TourAreaPvpResponse = {
  // ProtoMember(1)
  areaInfo: TourAreaInfo
  // ProtoMember(2)
  liveInfo: TourLiveInfo
  // ProtoMember(3)
  resultInfo: TourResultInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourAreaClearRequest = {
  // ProtoMember(1)
  tourId: string
}
export type TourAreaClearResponse = {
  // ProtoMember(1)
  areaInfo: TourAreaInfo
  // ProtoMember(2)
  areaClearInfo: TourAreaClearInfo
  // ProtoMember(3)
  resultInfo: TourResultInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourAreaNextRequest = {
  // ProtoMember(1)
  tourId: string
}
export type TourAreaNextResponse = {
  // ProtoMember(1)
  areaInfo: TourAreaInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourAreaRetireRequest = {
  // ProtoMember(1)
  tourId: string
}
export type TourAreaRetireResponse = {
  // ProtoMember(1)
  areaInfo: TourAreaInfo
  // ProtoMember(2)
  resultInfo: TourResultInfo
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourDeckSaveRequest = {
  // ProtoMember(1)
  tourId: string
  // ProtoMember(2)
  deckInfos: TourDeckInfo[]
}
export type TourDeckSaveResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TourInfo = {
  // ProtoMember(1)
  id: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  type: TourType
  // ProtoMember(4)
  enemyType: TourEnemyType
  // ProtoMember(5)
  startTime: string
  // ProtoMember(6)
  endTime: string
  // ProtoMember(7)
  aggregateEndTime: string
  // ProtoMember(8)
  exchangeEndTime: string
  // ProtoMember(9)
  assetId: string
  // ProtoMember(10)
  bannerAssetId: string
  // ProtoMember(11)
  areaStaminaRecoveryMinutes: number
  // ProtoMember(12)
  initialAreaStamina: number
  // ProtoMember(13)
  initialLife: number
  // ProtoMember(14)
  eventStoryInfo: EventStoryInfo
  // ProtoMember(15)
  eventMissionInfo: EventMissionInfo
  // ProtoMember(16)
  eventExchangeBoothInfo: EventExchangeBoothInfo
  // ProtoMember(17)
  noticeInfo: NoticeInfo
  // ProtoMember(18)
  tourRankingRewardInfos: TourRankingRewardInfo[]
  // ProtoMember(19)
  tourDifficultyInfos: TourDifficultyInfo[]
}
export type UserTourInfo = {
  // ProtoMember(1)
  areaStamina: number
  // ProtoMember(2)
  staminaUpdatedTime: string
  // ProtoMember(3)
  highestScore: string
  // ProtoMember(4)
  highestScoreTime: string
  // ProtoMember(5)
  mostProgressArea: number
  // ProtoMember(6)
  mostProgressAreaName: string
  // ProtoMember(7)
  life: number
  // ProtoMember(8)
  currentScore: string
  // ProtoMember(9)
  currentArea: number
  // ProtoMember(10)
  currentAreaName: string
  // ProtoMember(11)
  rank: string
  // ProtoMember(13)
  isRetired: boolean
  // ProtoMember(14)
  isAreaCleared: boolean
  // ProtoMember(15)
  isLastArea: boolean
  // ProtoMember(16)
  clearedDifficultyNumber: number
  // ProtoMember(17)
  currentDifficultyNumber: number
}
export type TourDeckInfo = {
  // ProtoMember(1)
  position: number
  // ProtoMember(2)
  cardId: string
  // ProtoMember(3)
  scoutId: string
}
export type TourAreaInfo = {
  // ProtoMember(1)
  areaStamina: number
  // ProtoMember(2)
  staminaUpdatedTime: string
  // ProtoMember(3)
  highestScore: string
  // ProtoMember(4)
  highestScoreTime: string
  // ProtoMember(5)
  mostProgressArea: number
  // ProtoMember(6)
  mostProgressAreaName: string
  // ProtoMember(7)
  life: number
  // ProtoMember(8)
  score: string
  // ProtoMember(9)
  area: number
  // ProtoMember(10)
  areaName: string
  // ProtoMember(11)
  step: number
  // ProtoMember(12)
  position: number
  // ProtoMember(13)
  areaScore: string
  // ProtoMember(14)
  isAreaCleared: boolean
  // ProtoMember(15)
  isRetired: boolean
  // ProtoMember(16)
  stepInfos: TourStepInfo[]
  // ProtoMember(17)
  areaRewards: Reward[]
  // ProtoMember(18)
  liveBonusInfos: TourLiveBonusInfo[]
  // ProtoMember(19)
  cardInfos: TourCardInfo[]
  // ProtoMember(20)
  scoutInfos: TourScoutInfo[]
  // ProtoMember(21)
  deckInfos: TourDeckInfo[]
  // ProtoMember(22)
  isLastArea: boolean
  // ProtoMember(23)
  tourType: TourType
  // ProtoMember(24)
  tourAreaType: TourAreaType
}
export type TourStepInfo = {
  // ProtoMember(1)
  step: number
  // ProtoMember(2)
  positionInfos: TourPositionInfo[]
}
export type TourPositionInfo = {
  // ProtoMember(1)
  position: number
  // ProtoMember(2)
  type: TourStepType
  // ProtoMember(3)
  activityInfo: TourEffectActivity
  // ProtoMember(4)
  refreshInfo: TourEffectRefresh
  // ProtoMember(5)
  scoutInfo: TourEffectScout
  // ProtoMember(6)
  liveInfo: TourEffectLive
  // ProtoMember(7)
  pvpInfo: TourEffectPvp
  // ProtoMember(9)
  liveBonusInfos: TourLiveBonusInfo[]
  // ProtoMember(10)
  isPassed: boolean
}
export type TourEffectScout = {
  // ProtoMember(1)
  scoutInfos: TourScoutInfo[]
}
export type TourOpponentInfo = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  managerLevel: number
  // ProtoMember(3)
  cardInfos: LiveBattleCardInfo[]
}
export type TourLiveBonusInfo = {
  // ProtoMember(1)
  liveBonusId: string
  // ProtoMember(2)
  name: string
  // ProtoMember(3)
  liveAbilityId: string
  // ProtoMember(4)
  liveAbilityLevel: number
  // ProtoMember(5)
  powerPermil: number
}
export type TourCardInfo = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  staminaPermil: number
}
export type TourScoutInfo = {
  // ProtoMember(1)
  scoutId: string
  // ProtoMember(2)
  cardId: string
  // ProtoMember(3)
  staminaPermil: number
  // ProtoMember(4)
  isRival: boolean
  // ProtoMember(5)
  level: number
  // ProtoMember(6)
  rarity: number
  // ProtoMember(7)
  dance: string
  // ProtoMember(8)
  vocal: string
  // ProtoMember(9)
  visual: string
  // ProtoMember(10)
  stamina: string
  // ProtoMember(11)
  mental: string
  // ProtoMember(12)
  technique: string
  // ProtoMember(13)
  skillLevel1: number
  // ProtoMember(14)
  skillLevel2: number
  // ProtoMember(15)
  skillLevel3: number
}
export type TourLiveInfo = {
  // ProtoMember(1)
  result: LiveResult
  // ProtoMember(2)
  rewards: Reward[]
  // ProtoMember(3)
  rankType: ResultRankType
  // ProtoMember(4)
  rankPlus: number
  // ProtoMember(5)
  rankPatterns: QuestRankPattern[]
}
export type TourAreaClearInfo = {
  // ProtoMember(1)
  areaRewards: Reward[]
  // ProtoMember(2)
  firstClearRewards: Reward[]
  // ProtoMember(3)
  score: string
  // ProtoMember(4)
  areaScore: string
  // ProtoMember(5)
  rank: string
  // ProtoMember(6)
  isBest: boolean
}
export type TourResultInfo = {
  // ProtoMember(1)
  score: string
  // ProtoMember(2)
  rank: string
  // ProtoMember(3)
  isBest: boolean
}
export type TutorialInitRequest = {
  // ProtoMember(1)
  name: string
}
export type TutorialInitResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TutorialProgressRequest = {
  // ProtoMember(1)
  type: TutorialType
  // ProtoMember(2)
  step: number
}
export type TutorialProgressResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TutorialStartQuestRequest = {
  // ProtoMember(1)
  questId: string
}
export type TutorialStartQuestResponse = {
  // ProtoMember(1)
  result: LiveResult
  // ProtoMember(2)
  rankPatterns: QuestRankPattern[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TutorialActivityStartFanEventResponse = {
  // ProtoMember(1)
  progress: FanEventProgress
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TutorialActivityReceivePromotionRewardResponse = {
  // ProtoMember(1)
  rewards: Reward[]
  // ProtoMember(2)
  activityLevelProgress: ActivityLevelProgress
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TutorialActivityReceiveLessonRewardResponse = {
  // ProtoMember(1)
  rewards: Reward[]
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TutorialPhotoCreateShootingRequest = {
  // ProtoMember(1)
  mainCharacterId: string
}
export type TutorialPhotoCreateShootingResponse = {
  // ProtoMember(1)
  photo: UserPhoto
  // ProtoMember(2)
  isGift: boolean
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type TutorialSkipResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
export type UserGetResponse = {
  // ProtoMember(1)
  user: User
  // ProtoMember(2)
  items: UserItem[]
  // ProtoMember(3)
  cards: UserCard[]
  // ProtoMember(4)
  characters: UserCharacter[]
  // ProtoMember(5)
  costumes: UserCostume[]
  // ProtoMember(6)
  accessories: UserAccessory[]
  // ProtoMember(7)
  photos: UserPhoto[]
  // ProtoMember(8)
  decks: UserDeck[]
  // ProtoMember(9)
  deckPositions: UserDeckPosition[]
  // ProtoMember(10)
  stories: UserStory[]
  // ProtoMember(11)
  points: UserPoint[]
  // ProtoMember(12)
  staffs: UserStaff[]
  // ProtoMember(13)
  messages: UserMessage[]
  // ProtoMember(14)
  telephones: UserTelephone[]
  // ProtoMember(15)
  missions: UserMission[]
  // ProtoMember(16)
  profile: UserProfile
  // ProtoMember(17)
  emblems: UserEmblem[]
  // ProtoMember(18)
  characterMusics: UserCharacterMusic[]
  // ProtoMember(19)
  balance: UserBalance
  // ProtoMember(20)
  totalCount: UserTotalCount
  // ProtoMember(21)
  areas: UserArea[]
  // ProtoMember(22)
  quests: UserQuest[]
  // ProtoMember(23)
  gachaButtons: UserGachaButton[]
  // ProtoMember(24)
  homeTalks: UserHomeTalk[]
  // ProtoMember(25)
  photoReport: UserPhotoReport
  // ProtoMember(26)
  cardSupports: UserCardSupport[]
  // ProtoMember(27)
  messageSchedules: UserMessageSchedule[]
  // ProtoMember(28)
  notifications: UserNotification[]
  // ProtoMember(29)
  hierarchy: UserHierarchy
  // ProtoMember(30)
  tutorials: UserTutorial[]
  // ProtoMember(31)
  homePositions: UserHomePosition[]
  // ProtoMember(32)
  musics: UserMusic[]
  // ProtoMember(33)
  decorations: UserDecoration[]
  // ProtoMember(999)
  userPublic: UserPublic
}
export type UserUpdateRequest = {
  // ProtoMember(1)
  name: string
}
export type UserUpdateResponse = {
  // ProtoMember(9999)
  commonResponse: CommonResponse
}
