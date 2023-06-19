// Generated from ProtoApi.proto

import type {
  AccessoryCategoryType,
  ActivityCampaignEffectType,
  ActivityFanEventHappeningType,
  ActivityFanEventType,
  AnniversaryTransitionActionType,
  AttributeType,
  BacksideAreaType,
  BacksideDifficultyType,
  BacksidePanelAttributeType,
  BacksidePanelType,
  BacksidePracticeRankType,
  BacksideStageType,
  BacksideType,
  BoxGachaItemType,
  CardDisplayType,
  DeckEditType,
  DivisionCannotMoveReasonType,
  DokanType,
  ErrorCode,
  ForumListReplyRequestType,
  FunctionMaintenanceType,
  GachaAnimationEmbeddedType,
  GachaContinuousResultType,
  GachaRewardPatternType,
  GachaType,
  GiftFilterType,
  GiftSortType,
  GraphicType,
  GvgChallengeConsumptionType,
  GvgMatchResultType,
  HelpType,
  HomePositionType,
  InquiryTemplateType,
  ItemType,
  LadderPanelType,
  LeagueDeckType,
  LeagueSeasonCardResultType,
  LeagueSeasonResultType,
  LeagueStatusType,
  LinkType,
  LiveSkipType,
  LoveHintType,
  LoveType,
  MarathonRaidProgressType,
  MarathonType,
  MoodType,
  MusicChartType,
  ParameterType,
  PhotoContestBaseEvaluationType,
  PhotoContestBaseGuideRankType,
  PhotoContestEvaluationRankType,
  PhotoImageRequestType,
  PhotoImageType,
  PhotoShootingActionType,
  ProfileBackgroundType,
  ProfileColorType,
  ProfileInformationType,
  ProfileLayoutType,
  ProviderType,
  ResetTimingType,
  ResourceType,
  ResultRankType,
  RuleType,
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
  User as User2,
  UserAccessory,
  UserActivityFanEventProgress,
  UserArea,
  UserBalance,
  UserBuddy,
  UserCard,
  UserCardSupport,
  UserCharacter,
  UserCharacterMusic,
  UserCostume,
  UserDeck,
  UserDeckPosition as UserDeckPosition1,
  UserDecoration,
  UserEmblem,
  UserGachaButton,
  UserGift,
  UserGiftHistory,
  UserHair,
  UserHierarchy,
  UserHomePosition,
  UserHomeTalk,
  UserInvite,
  UserItem,
  UserLoginBonus,
  UserLove,
  UserMessage,
  UserMessageSchedule,
  UserMission,
  UserMusic,
  UserNotification,
  UserPhoto,
  UserPhotoRecipe,
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
  characterIds: string[]
  name: string
  subName: string
  level: number
  finishTime: string
  currentCheerPoint: number
}

export type ActivePromotion = {
  characterIds: string[]
  name: string
  subName: string
  level: number
  finishTime: string
  campaignEffects: ActivityCampaignEffect[]
}

export type ActiveRefresh = {
  characterIds: string[]
  name: string
  subName: string
  finishTime: string
}

export type ActivityCharacterInfo = {
  characterId: string
  costumeId: string
  hairId: string
}

export type ActivityLessonProgress = {
  stepRewardGold: number
  stepRewardManagerExp: number
  stepRewardCardEnhanceItem: number
  rewardGoldAmount: number
  rewardManagerExpAmount: number
  rewardCardEnhanceItemAmount: number
  lastReceiveTime: string
  maxRewardTime: string
  dailyPromoteCount: number
  currentAreaId: string
}

export type AnniversaryInfo = {
  isPrevious: boolean
  prologueStoryID: string
  beforeAssetId: string
  afterAssetId: string
  extraStoryId: string
  isHideHomeCharacter: boolean
  isStoryUnread: boolean
  anniversaryId: string
  endTime: string
}

export type BacksideCardLiveAbilityInfo = {
  cardId: string
  level: number
  rarity: number
  liveAbilityLevel: string
  liveAbilityId: string
}

export type BacksideDeckCardDetailInfo = {
  position: number
  cardId: string
  displayCharacterId: string
  displayCostumeId: string
  level: number
  rarity: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  liveAbilityLevel: number
  part1Accessory: Accessory | undefined
  part2Accessory: Accessory | undefined
  photos: UserPhoto[]
  staminaPermil: number
  supported: boolean
  displayHairId: string
}

export type BacksideDeckCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
}

export type BacksideDeckCardStaminaInfo = {
  cardId: string
  currentMaxStamina: string
  currentRemainingStamina: string
}

export type BacksideDifficultyInfo = {
  backsideDifficultyNumber: number
  managerLevel: number
  cleared: boolean
  unlockConditionId: string
  unlocked: boolean
  stageTotalResultInfo: BacksidePracticeStageTotalResultInfo | undefined
  practiceStageInfos: BacksidePracticeStageInfo[]
  finalStageInfo: BacksideFinalStageInfo | undefined
  rewardReceivedRankType: ResultRankType
  rewardReceivedRankPlus: number
}

export type BacksideFinalStageInfo = {
  number: number
  name: string
  maxActionCount: number
  backsidePanelGoalSettingId: string
  stageResultInfo: BacksideFinalStageResultInfo | undefined
  stageHalfwayInfo: BacksideFinalStageHalfwayInfo | undefined
  pickupCharacterIDs: string[]
}

export type BacksideLiveBonus = {
  liveBonusId: string
  name: string
  liveAbilityId: string
  liveAbilityLevel: number
  powerPermil: number
}

export type BacksidePanelGoalInfo = {
  musicId: string
  musicChartPatternId: string
  name: string
  clearScore: number
  maxCapacity: number
  stageId: string
  backsideQuestSettingId: string
  mentalThreshold: number
  liveSkipType: LiveSkipType
}

export type BacksidePanelLiveInfo = {
  musicId: string
  musicChartPatternId: string
  name: string
  clearScore: number
  maxCapacity: number
  stageId: string
  backsideQuestSettingId: string
  mentalThreshold: number
  liveSkipType: LiveSkipType
}

export type BacksidePanelPvpInfo = {
  musicId: string
  musicChartPatternId: string
  name: string
  clearScore: number
  maxCapacity: number
  stageId: string
  opponentInfo: BacksideOpponentInfo | undefined
  backsideQuestSettingId: string
  mentalThreshold: number
  liveSkipType: LiveSkipType
}

export type BacksidePracticeStageInfo = {
  number: number
  name: string
  maxActionCount: number
  backsidePanelGoalSettingId: string
  stageResultInfo: BacksidePracticeStageResultInfo | undefined
  stageHalfwayInfo: BacksidePracticeStageHalfwayInfo | undefined
  pickupCharacterIDs: string[]
}

export type BacksideRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  totalPracticeScore: string
  finalScore: string
  rank: number
  emblemId: string
  deckCardInfos: BacksideDeckCardInfo[]
}

export type BacksideRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type Banner = {
  id: string
  assetId: string
  text: string
  linkType: LinkType
  linkDetail: string
  order: number
  viewConditionId: string
}

export type BirthdayInfo = {
  birthdayAdvInfo: BirthdayAdvInfo | undefined
  text: string
  costumeId: string
}

export type BoxGachaItem = {
  order: number
  itemType: BoxGachaItemType
  rewardId: string
  liveBonusGroupId: string
  initialStock: number
  stock: number
  isLimited: boolean
  assetId: string
  description: string
}

export type BuddyCardInfo = {
  cardId: string
  rarity: number
  level: number
}

export type DeckPositionCharacter = {
  userDeckPosition: UserDeckPosition1 | undefined
  characterId: string
  displayCharacterId: string
  displayCostumeId: string
  displayHairId: string
}

export type DivisionInfo = {
  id: string
  levelAvg: number
}

export type DokanInfo = {
  id: string
  type: DokanType
  advAssetId: string
  noticeInfo: NoticeInfo | undefined
  shopItem: ShopItem | undefined
  assetId: string
  description: string
  name: string
  shopType: ShopType
  storyId: string
  linkTitle: string
  linkType: LinkType
  linkDetail: string
}

export type EventButtonDisplayInfo = {
  conditionId: string
  priority: number
  assetId: string
}

export type EventMissionInfo = {
  id: string
  unlocked: boolean
  userMissions: UserMission[]
}

export type EventStoryInfo = {
  id: string
  episodes: EventStoryEpisodeInfo[]
}

export type ExchangeBooth = {
  id: string
  name: string
  bannerAssetId: string
  requiredResourceType: ResourceType
  requiredResourceId: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  unlocked: boolean
  endTime: string
  linkType: LinkType
  linkDetail: string
  order: number
  limited: boolean
  colorCode: string
  backgroundColorCode: string
  exchanges: ExchangeItem[]
  costumeId: string
  iconAssetId: string
  viewConditionId: string
  unlockConditionId: string
}

export type ExchangeItem = {
  id: string
  assetId: string
  rewardId: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  unlocked: boolean
  name: string
  description: string
  exchangeLimit: number
  leftCount: number
  requiredResourceAmount: string
  order: number
  viewConditionId: string
  unlockConditionId: string
}

export type ExerciseDeckPosition = {
  position: number
  cardId: string
  part1AccessoryId: string
  part2AccessoryId: string
  photoAllInOneIds: string[]
}

export type ExerciseInfo = {
  exerciseId: string
  unlocked: boolean
  positions: ExerciseDeckPosition[]
  opponentInfo: QuestOpponentInfo | undefined
}

export type ExerciseStartResponse = {
  questId: string
  result: LiveResult | undefined
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
  clearRewards: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type ExternalRewardInfo = {
  externalRewardId: string
  rewardId: string
  isReceived: boolean
}

export type ExtraStoryInfo = {
  id: string
  unlocked: boolean
  episodes: ExtraStoryEpisodeInfo[]
}

export type ExtraStoryPartInfo = {
  id: string
  unlocked: boolean
  stories: ExtraStoryInfo[]
}

export type FanEvent = {
  id: string
  name: string
  subName: string
  type: ActivityFanEventType
  unlockConditionId: string
  isUnlocked: boolean
  activityPerformanceId: string
  level: number
  exp: number
  nextLevelRequiredExp: number
  requiredStamina: number
  nextLevelUnlockConditionId: string
  isNextLevelUnlocked: boolean
  stepConsumptionStamina: number
  fixedRewardId: string
  additionalRewardId: string
  rankSRewardId: string
  rankARewardId: string
  rankBRewardId: string
  rankCRewardId: string
  rankDRewardId: string
  viewConditionId: string
  campaignDropRewardIds: string[]
}

export type FanEventCharacterInfo = {
  characterId: string
  costumeId: string
  activityStamina: number
  completedStep: number
  finishTime: string
  activityPoint: number
  maxStep: number
  lastSavedActivityPoint: number
  hairId: string
}

export type FanEventProgress = {
  activityFanEventId: string
  activityFanEventName: string
  activityFanEventSubName: string
  activityFanEventType: ActivityFanEventType
  activityFanEventLevel: number
  characters: FanEventCharacterInfo[]
  startTime: string
  stepConsumptionStamina: number
  stepActivityPointCoefficientPermil: number
  rankPatterns: FanEventRankPattern[]
  usedSuperModeItem: boolean
  activityPerformanceId: string
  maleNpcSpineId: string
  femaleNpcSpineId: string
  specialFanCheerPoint: number
  currentCheerPoint: number
  newSpecialFansCount: number
  speedRate: number
}

export type FanEventRankingInfo = {
  rank: string
  score: string
  userId: string
  name: string
  managerLevel: number
  characterIds: string[]
  emblemId: string
}

export type FavoriteCardInfo = {
  cardId: string
  rarity: number
  displayType: CardDisplayType
}

export type GachaButtonInfo = {
  id: string
  todayCount: number
  totalCount: number
  drawTime: string
}

export type GachaContinuousInfo = {
  totalDrawCount: number
  cardIds: string[]
  isFinished: boolean
  externalRewardInfo: ExternalRewardInfo | undefined
}

export type GachaContinuousResult = {
  totalDrawCount: number
  cardIds: string[]
  resultType: GachaContinuousResultType
  externalRewardInfo: ExternalRewardInfo | undefined
}

export type GachaExchangeInfo = {
  id: string
  exchangedCount: number
  exchangedTime: string
}

export type GachaHistory = {
  gachaType: GachaType
  drawTime: string
  gachaId: string
  resourceType: ResourceType
  resourceId: string
  amount: number
}

export type GachaInfo = {
  id: string
  unlocked: boolean
  buttons: GachaButtonInfo[]
  exchanges: GachaExchangeInfo[]
  itemGachaRewards: Reward[]
  noticeInfo: NoticeInfo | undefined
  selectedCardIds: string[]
  premiumInfo: GachaPremiumInfo | undefined
  continuousInfo: GachaContinuousInfo | undefined
  stampInfo: GachaStampInfo | undefined
}

export type GachaPremiumInfo = {
  fixedPremiumRewardRequiredDrawCount: number
  premiumRewardIds: string[]
  featuredRewards: Reward[]
}

export type GuildGvgMatchRankInfo = {
  name: string
  managerLevel: number
  point: string
  rank: number
  emblemId: string
}

export type GuildGvgSeasonInfo = {
  name: string
  matchNumber: number
  matchEndTime: string
  guildRank: number
  ranks: GuildGvgRankInfo[]
  aggregateEndTime: string
  isAggregate: boolean
  preMatchResult: GuildGvgSeasonMatchResult | undefined
  isRemainingChallenge: boolean
  winRewardId: string
  isCurrentMatchWin: boolean
}

export type GuildGvgSeasonMatchResult = {
  matchNumber: number
  opponentGuildId: string
  point: string
  opponentPoint: string
  resultType: GvgMatchResultType
  mvpInfo: GuildGvgMatchRankInfo | undefined
}

export type GuildParam = {
  id: string
  weaknessRank: number
  memberAmountRank: number
  prevSeasonResult: GuildGvgSeasonResult | undefined
}

export type GvgCurrentSeasonMatchInfo = {
  matchNumber: number
  endTime: string
  opponentGuildId: string
  opponentRank: number
  opponentPoint: string
  opponentWinCount: number
  opponentLoseCount: number
  opponentDrawCount: number
}

export type GvgGuildRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type GvgRankingRewardInfo = {
  order: number
  rankRateFromPercent: number
  rankFrom: number
  rewardId: string
  hierarchyVariablePoint: string
}

export type GvgSeasonInfo = {
  id: string
  name: string
  startTime: string
  aggregateEndTime: string
  challengeRewardId: string
  challengeItemId: string
  winRewardId: string
}

export type GvgSeasonMatchInfo = {
  matchNumber: number
  opponentGuildId: string
  point: string
  opponentPoint: string
  resultType: GvgMatchResultType
  memberAmountWeightPermil: number
  opponentMemberAmountWeightPermil: number
}

export type HierarchyChangeInfo = {
  addHierarchyPoint: string
  oldDetailGradeId: string
  newDetailGradeId: string
  currentRank: number
}

export type HierarchyDivisionRewardInfo = {
  hierarchyDivisionRewardId: string
  canReceive: boolean
  haveReceived: boolean
  firstUserInfo: ProfileInfo | undefined
}

export type HierarchyNotiInfo = {
  rewardIds: string[]
  divisionRewardIds: string[]
  currentDetailGradeId: string
  currentRank: number
}

export type HierarchyProfileInfo = {
  detailGradeId: string
  rank: number
}

export type HierarchyRankUserInfo = {
  userId: string
  currentRank: number
  managerName: string
  managerLevel: number
  currentDetailGradeId: string
  currentPoint: string
  emblemId: string
  deckName: string
  cardInfos: LastCardInfo[]
}

export type HierarchyRewardInfo = {
  hierarchyRewardId: string
  canReceive: boolean
  haveReceived: boolean
}

export type HomeBacksideInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
}

export type HomeEnterResponse = {
  gachaInfos: GachaInfo[]
  fanEventInfo: FanEventInfo | undefined
  promotionInfo: PromotionInfo | undefined
  refreshInfo: RefreshInfo | undefined
  lessonProgress: ActivityLessonProgress | undefined
  functionMaintenanceInfos: FunctionMaintenanceInfo[]
  bannerInfo: BannerInfo | undefined
  lastFriendApprovedTime: string
  gvgInfo: CurrentGvgInfo | undefined
  shopIds: string[]
  exchangeBoothIds: string[]
  isRemainingDiary: boolean
  notiStoneShopItem: NotiShopItem | undefined
  notiNormalShopItem: NotiShopItem | undefined
  payslip: Payslip | undefined
  currentMainAreaId: string
  eventInfo: HomeEventInfo | undefined
  pvpInfo: HomePvpInfo | undefined
  hierarchyNotiInfo: HierarchyNotiInfo | undefined
  isDailyQuestPlayable: boolean
  currentTowerQuestId: string
  hasUnplayedContest: boolean
  eventStoryInfos: EventStoryInfo[]
  photoActivities: PhotoActivity[]
  photoMusics: PhotoMusic[]
  photoStages: PhotoStage[]
  friendAppliedCount: number
  purchasedConditionRewardShopInfo: PurchasedConditionRewardShopInfo[]
  lessonInfo: LessonInfo | undefined
  eventButtonDisplayInfos: EventButtonDisplayInfo[]
  hasCanReceiveInviteHostRewards: boolean
  existsUnclearedExercise: boolean
  extraStoryPartInfos: ExtraStoryPartInfo[]
  leagueInfo: HomeLeagueInfo | undefined
  specialHomePositionInfo: SpecialHomePositionInfo | undefined
  specialHomeActionInfos: SpecialHomeActionInfo[]
  specialPhotoShootingInfo: SpecialPhotoShootingInfo | undefined
  loveInfo: HomeLoveInfo | undefined
  hasReceivableGift: boolean
  anniversaryInfo: AnniversaryInfo | undefined
  pvpRewardResultInfo: PvpRewardResultInfo | undefined
  gvgRewardResultInfo: GvgRewardResultInfo | undefined
  tourRewardResultInfos: TourRewardResultInfo[]
  backsideRewardResultInfos: BacksideRewardResultInfo[]
  photoContestRewardResultInfos: PhotoContestRewardResultInfo[]
  raceRewardResultInfos: RaceRewardResultInfo[]
  raceDailyRewardResultInfos: RaceDailyRewardResultInfo[]
  buddyUsedRewardResultInfo: BuddyUsedRewardResultInfo | undefined
  leagueRewardResultInfo: LeagueRewardResultInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type HomeEventMissionInfo = {
  id: string
  unlocked: boolean
}

export type HomeLadderInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  messageGroupId: string
  reachablePanelCount: number
}

export type HomeLoveEventInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionIds: string[]
  limitedEventMissionIds: string[]
  isLessonRewardMax: boolean
  isUnplayed: boolean
  hasHiddenFavorabilityObtainItem: boolean
}

export type HomeLoveInfo = {
  isViewable: boolean
  isUnlocked: boolean
  unlockConditionId: string
  eventMissionIds: string[]
  existsLessonRewardMaxLove: boolean
  existsUnplayedLove: boolean
  existsHasHiddenFavorabilityObtainItemLove: boolean
}

export type HomeMarathonInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  isMaxStamina: boolean
  isRaidStaminaOverThreshold: boolean
  hasFinishedRaidQuest: boolean
  isRaidHostEnable: boolean
  reachableLadderPanelCount: number
  type: MarathonType
  ladderId: string
}

export type HomePhotoContestInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  hasReceivableSectionReward: boolean
}

export type HomeRaceInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  isLessenRewardMax: boolean
}

export type HomeTourInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
}

export type InviteGuestInfo = {
  userId: string
  name: string
  receivedHostRewardIds: string[]
  buddyCardInfo: BuddyCardInfo | undefined
  clearQuestMainAreaCount: string
  invitedTime: string
}

export type LadderInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  eventMissionInfo: EventMissionInfo | undefined
  messageGroupId: string
  costumeIds: string[]
  ladderPointItemId: string
  assetId: string
  topColorCode: string
  bottomColorCode: string
  bgmAssetId: string
  backgroundAssetId: string
}

export type LadderPanel = {
  type: LadderPanelType
  messageId: string
  rewardId: string
  requiredPointItemAmount: number
  unlockConditionId: string
  unlocked: boolean
  reached: boolean
  reachable: boolean
}

export type LastCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
}

export type LeagueCardInfo = {
  cardId: string
  level: number
  rarity: number
}

export type LeagueCardRanking = {
  userId: string
  name: string
  cardInfo: LeagueCardInfo | undefined
  value: string
  rank: number
  emblemId: string
}

export type LeagueDailyResultInfo = {
  date: string
  point: string
  rank: number
  winCount: number
  loseCount: number
  headline: string
  mvpCardId: string
}

export type LeagueNewsInfo = {
  date: string
  deckACards: LiveCardInfo[]
  deckAWinCount: number
  deckALoseCount: number
  deckBCards: LiveCardInfo[]
  deckBWinCount: number
  deckBLoseCount: number
  beforeRank: number
  beforePoint: string
  headline: string
  interview: string
  body: string
  thumbnailAssetId: string
  thumbnailShootMillisecond: number
  thumbnailEffectShootMilliseconds: number[]
  mvpDeckType: LeagueDeckType
  mvpCardId: string
  mvpSeasonCardResultInfo: LeagueSeasonCardResultInfo | undefined
  mvpMusicId: string
  mvpStageId: string
  displayPositionCharacters: DeckPositionCharacter[]
}

export type LeaguePointRanking = {
  userId: string
  name: string
  point: string
  rank: number
  deckACards: LiveCardInfo[]
  deckBCards: LiveCardInfo[]
  emblemId: string
}

export type LeagueSeasonRewardInfo = {
  upgradeRewardId: string
  stayRewardId: string
  downgradeRewardId: string
}

export type LessonInfo = {
  lessonProgress: ActivityLessonProgress | undefined
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewardIds: string[]
}

export type LiveBattleCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
  lightFanAmount: number
  middleFanAmount: number
  heavyFanAmount: number
}

export type LiveBattleQuestInfo = {
  id: string
  stageId: string
  musicId: string
  musicChartPatternId: string
  position1AttributeType: AttributeType
  position2AttributeType: AttributeType
  position3AttributeType: AttributeType
  position4AttributeType: AttributeType
  position5AttributeType: AttributeType
  activeSkillWeightPermil: number
  specialSkillWeightPermil: number
  skillStaminaWeightPermil: number
  staminaRecoveryWeightPermil: number
  beatDanceWeightPermil: number
  beatVocalWeightPermil: number
  beatVisualWeightPermil: number
  maxCapacity: number
  mentalThreshold: number
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
  liveBonusGroupId: string
  liveSkipType: LiveSkipType
}

export type LiveCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
}

export type LiveCardResult = {
  cardId: string
  totalScore: string
}

export type LiveCharacterAssetInfo = {
  characterId: string
  costumeId: string
  hairId: string
}

export type LiveDeckCard = {
  index: number
  cardId: string
  displayCharacterId: string
  displayCostumeId: string
  level: number
  rarity: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  startStamina: string
  mental: string
  technique: string
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  audienceAmount: number
  skills: LiveDeckCardSkill[]
  isBuddy: boolean
  isFriendBuddy: boolean
  displayHairId: string
  isTourScout: boolean
}

export type LiveDeckCardSkill = {
  index: number
  skillId: string
  skillLevel: number
  possessionType: SkillPossessionType
  liveAbilityId: string
  liveAbilityLevel: number
  rewrittenEfficacyIds: string[]
}

export type LiveRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  point: string
  rank: number
  cardInfos: LiveCardInfo[]
  emblemId: string
  deckName: string
}

export type LiveUserInfo = {
  index: number
  userId: string
  name: string
  emblemId: string
  userDeck: LiveUserDeck | undefined
  userResult: LiveUserResult | undefined
  isNpc: boolean
}

export type LoveInfo = {
  loveId: string
  description: string
  characterId: string
  costumeId: string
  lastPlayTime: string
  storyEndInfos: LoveStoryEndInfo[]
  type: LoveType
  startTime: string
  endTime: string
  unlockConditionId: string
  isUnlocked: boolean
  assetId: string
  eventMissionIds: string[]
  limitedEventMissionIds: string[]
  isLessonRewardMax: boolean
  isUnplayed: boolean
  hasHiddenFavorabilityObtainItem: boolean
}

export type LoveItemInfo = {
  storyReadItemId: string
  hiddenFavorabilityObtainItemId: string
  lessonPromoteItemId: string
}

export type LoveLoadResponse = {
  storyEpisodeIds: string[]
  commonResponse: CommonResponse | undefined
}

export type LoveResetResponse = {
  storyEpisodeIds: string[]
  commonResponse: CommonResponse | undefined
}

export type LoveSaveDataInfo = {
  slotNumber: number
  saveTime: string
  latestStoryEpisodeId: string
  name: string
}

export type LoveTopResponse = {
  loveName: string
  playerName: string
  exp: string
  lessonProgress: LoveLessonProgress | undefined
  storyEpisodeIds: string[]
  saveInfo: LoveSaveInfo | undefined
  itemInfo: LoveItemInfo | undefined
  eventMissionInfos: EventMissionInfo[]
  limitedEventMissionInfos: EventMissionInfo[]
  hiddenFavorability: string
  storyEndInfos: LoveStoryEndInfo[]
  loveLevelInfos: LoveLevelInfo[]
  bannerAssetId: string
  noticeInfo: NoticeInfo | undefined
  expAssetId: string
  commonResponse: CommonResponse | undefined
}

export type MarathonAccessoryInfo = {
  accessoryId: string
  categoryType: AccessoryCategoryType
  param1Permil: number
  param1Value: number
  param2Permil: number
  param2Value: number
}

export type MarathonBoxGachaInfo = {
  boxGachaId: string
  boxGachaItems: BoxGachaItem[]
  isFull: boolean
  currentMarathonPoint: number
  unlocked: boolean
  remainResetCount: number
}

export type MarathonInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  initialStamina: number
  staminaRecoveryMinutes: number
  assetId: string
  boxGachaGroupId: string
  eventStoryInfo: EventStoryInfo | undefined
  eventMissionInfo: EventMissionInfo | undefined
  noticeInfo: NoticeInfo | undefined
  staminaRecoveryItemId: string
  questUnlockItemId: string
  type: MarathonType
  raidStaminaRecoveryItemId: string
  initialRaidStamina: number
  raidStaminaRecoveryMinutes: number
  raidQuest: MarathonRaidQuest | undefined
  raidRequiredPointFriendDiscountRatePermil: number
  raidLimitHours: number
  ladderInfo: LadderInfo | undefined
}

export type MarathonLiveBonusInfo = {
  liveBonusId: string
  amount: number
}

export type MarathonPhotoAbilityInfo = {
  photoAbilityId: string
  effectValue: string
}

export type MarathonQuestInfo = {
  marathonQuestId: string
  unlocked: boolean
  difficultyLevelInfos: MarathonQuestDifficultyLevelInfo[]
  lastChallengeDifficultyNumber: number
  isUnlockable: boolean
  isPlayable: boolean
  playableCount: number
}

export type MarathonQuestStartResponse = {
  marathonId: string
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
  result: LiveResult | undefined
  reward: QuestReward | undefined
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
  highestClearRankType: ResultRankType
  highestScore: string
  addMarathonPoint: number
  friendApplyToBuddyInfo: FriendApplyToBuddyInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type MarathonRaidHostUser = {
  name: string
  isFriend: boolean
  favoriteCard: FavoriteCardInfo | undefined
  favoritePhoto: FavoritePhotoInfo | undefined
  decorationId: string
  userId: string
}

export type MarathonRaidJoinResponse = {
  marathonId: string
  difficultyNumber: number
  difficultyLevel: number
  result: LiveResult | undefined
  joinRewards: RewardResult[]
  raidEndTime: string
  raidResult: MarathonRaidResult | undefined
  beforeScore: string
  rankPatterns: QuestRankPattern[]
  finished: boolean
  liveBonusId: string
  commonResponse: CommonResponse | undefined
}

export type MarathonRaidQuest = {
  id: string
  stageId: string
  name: string
  description: string
  unlockConditionId: string
  unlockDescription: string
  musicId: string
  musicChartPatternId: string
  position1AttributeType: AttributeType
  position2AttributeType: AttributeType
  position3AttributeType: AttributeType
  position4AttributeType: AttributeType
  position5AttributeType: AttributeType
  activeSkillWeightPermil: number
  specialSkillWeightPermil: number
  skillStaminaWeightPermil: number
  staminaRecoveryWeightPermil: number
  beatDanceWeightPermil: number
  beatVocalWeightPermil: number
  beatVisualWeightPermil: number
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
  maxCapacity: number
  liveBonusGroupId: string
  unlocked: boolean
  difficulties: MarathonRaidQuestDifficulty[]
}

export type MarathonRaidQuestDifficulty = {
  raidQuestId: string
  difficultyNumber: number
  difficultyLevel: number
  mentalThreshold: number
  clearScore: string
  requiredRaidStamina: number
  hostRewardId: string
  joinRewardId: string
  mvpRewardId: string
  unlockConditionId: string
  rewardManagerExp: number
  rewardCardExp: number
  cleared: boolean
  unlocked: boolean
  liveSkipType: LiveSkipType
}

export type MarathonRaidRankedUser = {
  rank: number
  userName: string
  managerLevel: number
  score: string
  emblemId: string
  userId: string
  cardInfos: LiveCardInfo[]
}

export type MarathonRaidStartResponse = {
  marathonId: string
  difficultyNumber: number
  difficultyLevel: number
  result: LiveResult | undefined
  reward: QuestReward | undefined
  hostRewards: RewardResult[]
  raidEndTime: string
  raidResult: MarathonRaidResult | undefined
  beforeScore: string
  rankPatterns: QuestRankPattern[]
  liveBonusId: string
  commonResponse: CommonResponse | undefined
}

export type MarketItem = {
  number: number
  consumptionResourceType: ResourceType
  baseAmount: number
  discountAmount: number
  rewardId: string
  discountRatePermil: number
  soldOut: boolean
  unlockConditionId: string
}

export type MessageGroupInfo = {
  messageGroupId: string
  latestTimelineInfo: TimelineInfo | undefined
}

export type PhotoActivity = {
  photoActivityId: string
  isUnlocked: boolean
}

export type PhotoContestActivity = {
  id: string
  isUnlocked: boolean
}

export type PhotoContestInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  eventStoryInfo: EventStoryInfo | undefined
  eventExchangeBoothInfo: EventExchangeBoothInfo | undefined
  noticeInfo: NoticeInfo | undefined
  totalBestShootEvaluationPoint: string
  totalBestShootEvaluationPointTime: string
  rank: string
  rankingRewardInfos: PhotoContestRankingRewardInfo[]
  sectionInfos: PhotoContestSectionInfo[]
  activities: PhotoContestActivity[]
  musics: PhotoContestQuestMusic[]
  stages: PhotoContestQuestStage[]
  dailyRewardResults: RewardResult[]
  onceShootingSubmitLimitCount: number
  currentPhotoAmount: string
  submittingItemId: string
  creatingItemId: string
}

export type PhotoContestPhotoInfo = {
  assetId: string
  sectionId: string
  evaluationPoint: string
  isBest: boolean
  shootingTime: string
  fixedCreatePhotoRarity: string
  evaluationRankType: PhotoContestEvaluationRankType
}

export type PhotoContestQuestMusic = {
  id: string
  isUnlocked: boolean
}

export type PhotoContestQuestStage = {
  id: string
  isUnlocked: boolean
}

export type PhotoContestRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  totalBestShootEvaluationPoint: string
  rank: number
  emblemId: string
  bestPhotoInfos: PhotoContestPhotoInfo[]
}

export type PhotoContestRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type PhotoContestSectionInfo = {
  id: string
  sectionRewardInfos: PhotoContestSectionRewardInfo[]
  bestShootAssetId: string
  bestShootEvaluationPoint: string
  totalSectionEvaluationPoint: string
  isUnlocked: boolean
  advanceGuideInfos: PhotoContestSectionAdvanceGuideInfo[]
}

export type PhotoContestSectionRewardInfo = {
  sectionRewardId: string
  canReceive: boolean
  haveReceived: boolean
}

export type PhotoContestSubmitShootingResponse = {
  evaluationPoint: string
  isBest: boolean
  totalSectionEvaluationPoint: string
  totalBestShotEvaluationPoint: string
  nextPhotoImageId: string
  newCanReceiveSectionRewardIds: string[]
  rank: string
  evaluationRankType: PhotoContestEvaluationRankType
  baseGuideInfos: PhotoContestSectionBaseGuideInfo[]
  advanceGuideInfos: PhotoContestSectionAdvanceGuideInfo[]
  fixedCreatePhotoRarity: string
  commonResponse: CommonResponse | undefined
}

export type PhotoListSpecialShootingResponse = {
  activities: SpecialPhotoActivityInfo[]
  musics: SpecialPhotoQuestMusicInfo[]
  name: string
  itemIds: string[]
  commonResponse: CommonResponse | undefined
}

export type PhotoMusic = {
  musicId: string
  isUnlocked: boolean
}

export type PhotoStage = {
  stageId: string
  isUnlocked: boolean
}

export type ProfileFindUserResponse = {
  userId: string
  name: string
  managerExp: string
  managerLevel: number
  divisionId: string
  guildId: string
  emblemId: string
  favoriteCard: FavoriteCardInfo | undefined
  favoritePhoto: FavoritePhotoInfo | undefined
  favoriteCharacterIds: string[]
  message: string
  birthMonth: number
  birthDay: number
  backgroundType: ProfileBackgroundType
  layoutType: ProfileLayoutType
  hierarchyCurrentDetailGradeId: string
  hierarchyCurrentRank: number
  decorationId: string
  informationType: ProfileInformationType
  colorType: ProfileColorType
  commonResponse: CommonResponse | undefined
}

export type ProfileInfo = {
  userId: string
  name: string
  managerExp: string
  managerLevel: number
  emblemId: string
  favoriteCard: FavoriteCardInfo | undefined
  favoritePhoto: FavoritePhotoInfo | undefined
  favoriteCharacterIds: string[]
  backgroundType: ProfileBackgroundType
  layoutType: ProfileLayoutType
  lastLoginTime: string
  decorationId: string
  informationType: ProfileInformationType
  colorType: ProfileColorType
  buddyCardInfo: BuddyCardInfo | undefined
}

export type ProfileTopResponse = {
  hierarchyCurrentDetailGradeId: string
  hierarchyCurrentRank: number
  friendProfiles: ProfileInfo[]
  commonResponse: CommonResponse | undefined
}

export type Promotion = {
  id: string
  name: string
  subName: string
  unlockConditionId: string
  isUnlocked: boolean
  activityPerformanceId: string
  level: number
  exp: number
  nextLevelRequiredExp: number
  requiredStamina: number
  nextLevelUnlockConditionId: string
  isNextLevelUnlocked: boolean
  stepConsumptionStamina: number
  stepRewardGold: number
  stepRewardCardEnhanceItem: number
  stepAdditionalRewardId: string
  multiStepRewardId: string
  maxFanAmount: number
  viewConditionId: string
  subGenre: string
  multiStepCampaignDropRewardIds: string[]
}

export type PromotionProgress = {
  activityPromotionId: string
  activityPromotionName: string
  activityPromotionSubName: string
  activityPromotionLevel: number
  characters: ActivityCharacterInfo[]
  startTime: string
  finishTime: string
  stepConsumptionStamina: number
  completedStep: number
  stepRewardGold: number
  stepRewardManagerExp: number
  stepRewardActivityExp: number
  stepRewardCharacterActivityExp: number
  stepAdditionalRewardId: string
  multiStepRewardId: string
  stepRewardCardEnhanceItem: number
  rewardGoldAmount: number
  rewardCardEnhanceItemAmount: number
  rewards: ActivityPromotionReward[]
  nextActivityLevelUpTime: string
  campaignEffects: ActivityCampaignEffect[]
  activityPerformanceId: string
  subGenre: string
  multiStepCampaignDropRewardIds: string[]
}

export type PvpRewardInfo = {
  rankFrom: string
  rankingRewardId: string
  challengeRewardId: string
  hierarchyVariablePoint: string
}

export type QuestAreaGroupInfo = {
  areaGroupId: string
  areas: QuestAreaInfo[]
}

export type QuestAreaInfo = {
  areaId: string
  unlocked: boolean
  quests: QuestInfo[]
}

export type QuestBulkDailyDeckPositionInfo = {
  position: number
  cardId: string
}

export type QuestBulkDailyInfo = {
  questId: string
  deckPositions: QuestBulkDailyDeckPositionInfo[]
  rankType: ResultRankType
  rankPlus: number
}

export type QuestBulkDailyResultInfo = {
  questId: string
  playCount: number
  deckPositions: QuestBulkDailyDeckPositionInfo[]
  reward: QuestReward | undefined
  rankType: ResultRankType
  rankPlus: number
}

export type QuestClearInfo = {
  score: string
  userName: string
  deckName: string
  cards: LiveCardInfo[]
  emblemId: string
  userId: string
  rankType: ResultRankType
  plus: number
  isLiveResultDetailAvailable: boolean
}

export type QuestContestRankInfo = {
  rank: number
  isNPC: boolean
  score: string
  userName: string
  deckName: string
  cards: LiveCardInfo[]
  emblemId: string
  userId: string
  isLiveResultDetailAvailable: boolean
}

export type QuestInfo = {
  questId: string
  cleared: boolean
  highestScore: string
  rankType: ResultRankType
  plus: number
  highestRank: number
  isPlayable: boolean
  playableCount: number
  opponentInfo: QuestOpponentInfo | undefined
  campaignDropRewardIds: string[]
}

export type QuestListTowerRankingResponse = {
  selfHighestRank: number
  selfQuestId: string
  ranks: QuestTowerRankInfo[]
  totalQuestNum: number
  commonResponse: CommonResponse | undefined
}

export type QuestRewardCard = {
  cardId: string
  funAmount: string
  exp: number
  isExpTruncated: boolean
}

export type QuestStartResponse = {
  questId: string
  result: LiveResult | undefined
  reward: QuestReward | undefined
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
  highestRank: number
  highestScore: string
  hierarchyChangeInfo: HierarchyChangeInfo | undefined
  friendApplyToBuddyInfo: FriendApplyToBuddyInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type QuestTopResponse = {
  mainAreaGroups: QuestAreaGroupInfo[]
  contestTotalScore: string
  hasUnplayedContest: boolean
  pvpInfo: QuestTopPvpInfo | undefined
  currentTowerQuestId: string
  isDailyPlayable: boolean
  gvgInfo: CurrentGvgInfo | undefined
  hierarchyNotiInfo: HierarchyNotiInfo | undefined
  dailyAreas: QuestAreaInfo[]
  towerArea: QuestAreaInfo | undefined
  contestArea: QuestAreaInfo | undefined
  isTowerTopUnlocked: boolean
  bulkDailyInfos: QuestBulkDailyInfo[]
  commonResponse: CommonResponse | undefined
}

export type QuestTowerAreaInfo = {
  area: QuestAreaInfo | undefined
  currentTowerQuestId: string
}

export type QuestTowerRankInfo = {
  rank: number
  questId: string
  userName: string
  deckName: string
  cards: LiveCardInfo[]
  emblemId: string
  userId: string
}

export type RaceAccessoryInfo = {
  accessoryId: string
  categoryType: AccessoryCategoryType
  param1Permil: number
  param1Value: number
  param2Permil: number
  param2Value: number
}

export type RaceDailyRankingUserInfo = {
  userId: string
  userName: string
  score: string
  emblemId: string
  rank: number
}

export type RaceInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  aggregateEndTime: string
  assetId: string
  eventStoryInfo: EventStoryInfo | undefined
  eventMissionInfo: EventMissionInfo | undefined
  noticeInfo: NoticeInfo | undefined
  racePointItemId: string
  raceMedalItemId: string
  raceLiveBonusResetItemId: string
  raceAreaInfos: RaceAreaInfo[]
  requiredCardCoolTimeRacePointAmount: number
  raceRankGradeInfos: RaceRankGradeInfo[]
  livePanelDifficultyNumber: number
  cardCoolTimeMinutes: number
  raceLiveBonusGroupId: string
}

export type RaceLiveBonusInfo = {
  liveBonusId: string
  level: number
}

export type RaceLiveQuestInfo = {
  raceQuestId: string
  currentClearDifficultyNumber: number
  beforeClearDifficultyNumber: number
  difficultyLevelInfos: RaceLiveQuestDifficultyLevelInfo[]
}

export type RaceOpponentProgressInfo = {
  userId: string
  name: string
  displayCharacterId: string
  clearPanelCount: number
  rank: number
  liveBonusInfos: RaceLiveBonusInfo[]
}

export type RacePhotoAbilityInfo = {
  photoAbilityId: string
  effectValue: string
}

export type RaceRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  clearPanelCount: number
  rank: number
  emblemId: string
}

export type RaceUserCardCoolTimeInfo = {
  cardId: string
  coolTime: string
}

export type Refresh = {
  id: string
  name: string
  requiredMinutes: number
  unlockConditionId: string
  isUnlocked: boolean
  level: number
  exp: number
  nextLevelRequiredExp: number
  levels: RefreshLevel[]
  viewConditionId: string
}

export type RefreshLevel = {
  level: number
  name: string
  requiredGold: number
  unlockConditionId: string
  isUnlocked: boolean
  activityPerformanceId: string
  recoveryAmount: number
  viewConditionId: string
  subGenre: string
}

export type RefreshProgress = {
  activityRefreshId: string
  activityRefreshName: string
  activityRefreshSubName: string
  activityRefreshLevel: number
  characters: ActivityCharacterInfo[]
  startTime: string
  finishTime: string
  requiredMinutes: number
  recoveryAmount: number
  activityPerformanceId: string
  subGenre: string
}

export type ShopConditionReward = {
  number: number
  conditionId: string
  rewardId: string
  statusType: ShopConditionRewardStatusType
}

export type ShopInfo = {
  id: string
  name: string
  type: ShopType
  order: number
  colorCode: string
  backgroundColorCode: string
  noticeInfo: NoticeInfo | undefined
  viewConditionId: string
  thumbnailAssetId: string
  costumeId: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  isPurchased: boolean
  progress: number
  maxProgress: number
  bannerAssetId: string
}

export type ShopItem = {
  id: string
  name: string
  description: string
  productId: string
  consumptionId: string
  rewardId: string
  thumbnailAssetId: string
  purchaseLimit: number
  leftCount: number
  order: number
  viewConditionId: string
  pushSegment: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  unlockConditionId: string
  unlocked: boolean
  colorCode: string
  backgroundColorCode: string
}

export type ShopLoginBonus = {
  day: number
  rewardId: string
  isReceived: boolean
}

export type SpecialHomeActionInfo = {
  characterId: string
  specialHomeActionDetails: SpecialHomeActionDetail[]
}

export type SpecialHomeMotionInfo = {
  characterId: string
  idleMotionAssetId: string
  idleAdditionMotionAssetId: string
}

export type SpecialHomePositionInfo = {
  homeCostumeIds: string[]
  trainingCostumeIds: string[]
  activityCostumeIds: string[]
  idolCostumeIds: string[]
  specialHomePositionId: string
  specialHomeMotionInfos: SpecialHomeMotionInfo[]
}

export type SpecialPhotoActivityInfo = {
  isUnlocked: boolean
  order: number
  name: string
  thumbAssetId: string
  photoStageId: string
  photoShootingMotionSetId: string
  isDeleteCharacter: boolean
  costumeTypeIds: string[]
  forceCostumeTypeId: string
  characterIds: string[]
  unlockConditionId: string
  actionType: PhotoShootingActionType
  viewConditionId: string
}

export type SpecialPhotoQuestMusicInfo = {
  musicId: string
  isUnlocked: boolean
  order: number
  costumeTypeIds: string[]
  characterIds: string[]
  photoStages: SpecialPhotoQuestStage[]
  unlockConditionId: string
  viewConditionId: string
}

export type SpecialPhotoQuestStage = {
  stageId: string
  isUnlocked: boolean
  maxCapacity: number
  unlockConditionId: string
  order: number
  viewConditionId: string
}

export type SpecialPhotoShootingInfo = {
  specialPhotoShootingId: string
  isUnlocked: boolean
  unlockConditionId: string
}

export type StoryReadAnniversaryStoryResponse = {
  rewards: RewardResult[]
  newTitleBackgroundId: string
  commonResponse: CommonResponse | undefined
}

export type TimelineInfo = {
  messageGroupId: string
  timelineId: string
  messageId: string
  arrivedTime: string
  selectMessageDetailIds: string[]
  lastMessageDetailId: string
  lastMessageDetailTime: string
  finished: boolean
}

export type TourDifficultyInfo = {
  tourDifficultyId: string
  tourDifficultyNumber: number
  managerLevel: number
  unlockConditionId: string
  unlocked: boolean
}

export type TourEffectActivity = {
  itemId: string
  amount: number
  activityPerformanceId: string
  activityPromotionSubGenre: string
}

export type TourEffectLive = {
  musicId: string
  name: string
  stageId: string
  musicChartPatternId: string
  maxCapacity: number
  mentalThreshold: number
  clearScore: string
  rewardId: string
  difficultyLevel: number
  tourQuestSettingId: string
  liveSkipType: LiveSkipType
}

export type TourEffectPvp = {
  musicId: string
  name: string
  stageId: string
  musicChartPatternId: string
  maxCapacity: number
  mentalThreshold: number
  clearScore: string
  opponentInfo: TourOpponentInfo | undefined
  scoutInfo: TourScoutInfo | undefined
  rewardId: string
  tourQuestSettingId: string
  liveSkipType: LiveSkipType
}

export type TourEffectRefresh = {
  amountPermil: number
  activityPerformanceId: string
  activityRefreshSubGenre: string
}

export type TourLiveBonusInfo = {
  liveBonusId: string
  name: string
  liveAbilityId: string
  liveAbilityLevel: number
  powerPermil: number
}

export type TourRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  point: string
  rank: number
  emblemId: string
}

export type TourRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type UserHierarchyInfo = {
  currentDetailGradeId: string
  currentRank: number
  currentPoint: string
}

export type AccessoryEnhanceRequest = {
  accessoryId: string
  count: number
}

export type AccessoryEnhanceResponse = {
  commonResponse: CommonResponse | undefined
}

export type AccessoryLimitBreakRequest = {
  accessoryId: string
  isInUse: boolean
  isInUseLeague: boolean
}

export type AccessoryLimitBreakResponse = {
  commonResponse: CommonResponse | undefined
}

export type AccessorySellRequest = {
  accessoryId: string
  count: number
}

export type AccessorySellResponse = {
  commonResponse: CommonResponse | undefined
}

export type ActivityStartFanEventRequest = {
  activityFanEventId: string
  characterIds: string[]
  costumeIds: string[]
  itemIds: string[]
  hairIds: string[]
}

export type ActivityStartFanEventResponse = {
  progress: FanEventProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type ActivityLoadFanEventResponse = {
  progress: FanEventProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type ActivityFetchFanEventStepsRequest = {
  steps: number[]
}

export type ActivityFetchFanEventStepsResponse = {
  characterSteps: FanEventCharacterSteps[]
  commonResponse: CommonResponse | undefined
}

export type ActivitySaveFanEventRequest = {
  characterResults: FanEventCharacterResult[]
  useItemId: string
  execCheer: boolean
}

export type ActivitySaveFanEventResponse = {
  characterSteps: FanEventCharacterSteps[]
  commonResponse: CommonResponse | undefined
}

export type ActivityFinishFanEventResponse = {
  activityPoint: number
  rankType: ResultRankType
  plus: number
  rewards: Reward[]
  rankPatterns: FanEventRankPattern[]
  activityLevelProgress: ActivityLevelProgress | undefined
  characters: ActivityCharacterInfo[]
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse | undefined
}

export type ActivityGetFanEventRankingRequest = {
  activityFanEventId: string
}

export type ActivityGetFanEventRankingResponse = {
  selfRank: string
  selfScore: string
  rankInfos: FanEventRankingInfo[]
  commonResponse: CommonResponse | undefined
}

export type ActivityStartPromotionRequest = {
  activityPromotionId: string
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
}

export type ActivityStartPromotionResponse = {
  progress: PromotionProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type ActivityLoadPromotionResponse = {
  progress: PromotionProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type ActivityUsePromotionItemRequest = {
  itemId: string
  amount: number
}

export type ActivityUsePromotionItemResponse = {
  progress: PromotionProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type ActivityReceivePromotionRewardResponse = {
  rewards: Reward[]
  bonusRewards: Reward[]
  completedStep: number
  progress: PromotionProgress | undefined
  activityLevelProgress: ActivityLevelProgress | undefined
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse | undefined
}

export type ActivityFetchPromotionStepsRequest = {
  step: number
}

export type ActivityFetchPromotionStepsResponse = {
  steps: PromotionStep[]
  commonResponse: CommonResponse | undefined
}

export type ActivityFinishPromotionResponse = {
  rewards: Reward[]
  bonusRewards: Reward[]
  activityLevelProgress: ActivityLevelProgress | undefined
  totalSteps: number
  characters: ActivityCharacterInfo[]
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse | undefined
}

export type ActivityStartRefreshRequest = {
  activityRefreshId: string
  activityRefreshLevel: number
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
}

export type ActivityStartRefreshResponse = {
  progress: RefreshProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type ActivityLoadRefreshResponse = {
  progress: RefreshProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type ActivityUseRefreshItemRequest = {
  itemId: string
  amount: number
}

export type ActivityUseRefreshItemResponse = {
  progress: RefreshProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type ActivityFinishRefreshResponse = {
  activityLevelProgress: ActivityLevelProgress | undefined
  characters: ActivityCharacterInfo[]
  commonResponse: CommonResponse | undefined
}

export type ActivityReceiveLessonRewardResponse = {
  rewards: Reward[]
  progress: ActivityLessonProgress | undefined
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse | undefined
}

export type ActivityPromoteLessonRequest = {
  isFree: boolean
  useItemId: string
}

export type ActivityPromoteLessonResponse = {
  rewards: Reward[]
  progress: ActivityLessonProgress | undefined
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse | undefined
}

export type FanEventCharacterSteps = {
  characterId: string
  steps: FanEventStep[]
}

export type FanEventStep = {
  step: number
  happenings: FanEventHappening[]
  itemEffects: FanEventItemEffect[]
}

export type FanEventHappening = {
  type: ActivityFanEventHappeningType
  characterId: string
}

export type FanEventItemEffect = {
  type: ItemType
  value: number
}

export type FanEventCharacterResult = {
  characterId: string
  stepResults: FanEventStepResult[]
}

export type FanEventStepResult = {
  step: number
  reductionMilliSeconds: string
  activityPoint: number
}

export type PromotionStep = {
  step: number
  rewards: ActivityPromotionReward[]
}

export type AnniversaryOutputTransitionLogRequest = {
  anniversaryId: string
  actionType: AnniversaryTransitionActionType
}

export type AnniversaryOutputTransitionLogResponse = {
  commonResponse: CommonResponse | undefined
}

export type AuthCreateRequest = {
  firebaseUID: string
}

export type AuthCreateResponse = {
  firebaseCustomToken: string
}

export type AuthLoginRequest = {
  firebaseIDToken: string
}

export type AuthLoginResponse = {
  gameAuthToken: string
  userPublic: UserPublic | undefined
  requiredFirebaseReauthenticate: boolean
}

export type AuthDeleteResponse = {}

export type BacksideTopRequest = {
  backsideId: string
}

export type BacksideTopResponse = {
  backsideInfo: BacksideInfo | undefined
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse | undefined
}

export type BacksideRankingRequest = {
  backsideId: string
}

export type BacksideRankingResponse = {
  rankingInfos: BacksideRankingInfo[]
  selfFinalScore: string
  selfRank: number
  commonResponse: CommonResponse | undefined
}

export type BacksideStageStartRequest = {
  backsideId: string
  number: number
  deckNumber: string
  difficultyNumber: number
}

export type BacksideStageStartResponse = {
  stageInfo: BacksideStageInfo | undefined
  execPanelLocationInfo: BacksideExecPanelLocationInfo | undefined
  halfwayLiveBonusChoices: BacksideLiveBonus[]
  halfwaySurpriseInfo: BacksideSurpriseInfo | undefined
  halfwayPracticeClearInfo: BacksidePracticeStageClearInfo | undefined
  isForceRetired: boolean
  commonResponse: CommonResponse | undefined
}

export type BacksideStageActionRequest = {
  backsideId: string
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
  isSkip: boolean
}

export type BacksideStageActionResponse = {
  stageProgressInfo: BacksideStageProgressInfo | undefined
  liveBonusChoices: BacksideLiveBonus[]
  isScheduled: boolean
  liveInfo: BacksideLiveInfo | undefined
  practiceClearInfo: BacksidePracticeStageClearInfo | undefined
  finalClearInfo: BacksideFinalStageClearInfo | undefined
  surpriseInfo: BacksideSurpriseInfo | undefined
  isForceRetired: boolean
  commonResponse: CommonResponse | undefined
}

export type BacksideStageLiveBonusRequest = {
  backsideId: string
  liveBonusId: string
}

export type BacksideStageLiveBonusResponse = {
  stageProgressInfo: BacksideStageProgressInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type BacksideStagePracticeUpdateRequest = {
  backsideId: string
  isUpdate: boolean
}

export type BacksideStagePracticeUpdateResponse = {
  commonResponse: CommonResponse | undefined
}

export type BacksideStageResetRequest = {
  backsideId: string
  isInGame: boolean
}

export type BacksideStageResetResponse = {
  commonResponse: CommonResponse | undefined
}

export type BacksideStageSurpriseFinishRequest = {
  backsideId: string
}

export type BacksideStageSurpriseFinishResponse = {
  stageProgressInfo: BacksideStageProgressInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type BacksideStageDeckPositionChangeRequest = {
  backsideId: string
  deckPositionInfos: BacksideDeckPositionInfo[]
}

export type BacksideStageDeckPositionChangeResponse = {
  deckUserCharacters: UserCharacter[]
  deckDetailInfo: BacksideStageDeckDetailInfo | undefined
  scoreLiveDeckDetailInfo: BacksideStageDeckDetailInfo | undefined
  battleLiveDeckDetailInfo: BacksideStageDeckDetailInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type BacksideInfo = {
  id: string
  name: string
  type: BacksideType
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  eventStoryInfo: EventStoryInfo | undefined
  eventMissionInfo: EventMissionInfo | undefined
  eventExchangeBoothInfo: EventExchangeBoothInfo | undefined
  noticeInfo: NoticeInfo | undefined
  areaInfo: BacksideAreaInfo | undefined
  rankingRewardInfos: BacksideRankingRewardInfo[]
  realScore: string
  realScoreTime: string
  rank: string
  stageStamina: string
  stageStaminaUpdatedTime: string
  stageStaminaRecoveryMinutes: number
}

export type BacksideAreaInfo = {
  areaId: string
  name: string
  type: BacksideAreaType
  assetId: string
  backsideDifficultyInfos: BacksideDifficultyInfo[]
  currentDifficultyNumber: number
  lastChallengeDifficultyNumber: number
  difficultyType: BacksideDifficultyType
}

export type BacksidePracticeStageTotalResultInfo = {
  practiceRankType: BacksidePracticeRankType
  practiceRankPlus: number
  practiceScore: string
  practiceLiveBonusInfos: BacksideLiveBonusInfo[]
}

export type BacksidePracticeStageResultInfo = {
  practiceRankType: BacksidePracticeRankType
  practiceRankPlus: number
  practiceScore: string
  deckCardInfos: BacksideDeckCardInfo[]
  liveBonuses: BacksideLiveBonus[]
}

export type BacksideFinalStageResultInfo = {
  totalPracticeRankType: BacksidePracticeRankType
  totalPracticeRankPlus: number
  totalPracticeScore: string
  finalRankType: ResultRankType
  finalRankPlus: number
  finalScore: string
  deckCardInfos: BacksideDeckCardInfo[]
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  practiceScore: string
}

export type BacksidePracticeStageHalfwayInfo = {
  passedActionCount: number
  practiceScore: string
  deckCardInfos: BacksideDeckCardInfo[]
  liveBonuses: BacksideLiveBonus[]
}

export type BacksideFinalStageHalfwayInfo = {
  passedActionCount: number
  deckCardInfos: BacksideDeckCardInfo[]
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  practiceScore: string
  totalPracticeScore: string
}

export type BacksideLiveBonusInfo = {
  stageNumber: number
  stageType: BacksideStageType
  stageName: string
  liveBonuses: BacksideLiveBonus[]
}

export type BacksideStageDeckDetailInfo = {
  deckCardDetailInfos: BacksideDeckCardDetailInfo[]
  deckCardStaminaInfos: BacksideDeckCardStaminaInfo[]
  baseDeckOverallValue: string
}

export type BacksideStageInfo = {
  panelInfos: BacksidePanelInfo[]
  scheduleInfos: BacksideScheduleInfo[]
  nextActionCount: string
  practiceScore: string
  liveBonuses: BacksideLiveBonus[]
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  cardLiveAbilityInfos: BacksideCardLiveAbilityInfo[]
  totalPracticeScore: string
  deckUserCharacters: UserCharacter[]
  deckDetailInfo: BacksideStageDeckDetailInfo | undefined
  scoreLiveDeckDetailInfo: BacksideStageDeckDetailInfo | undefined
  battleLiveDeckDetailInfo: BacksideStageDeckDetailInfo | undefined
}

export type BacksideStageProgressInfo = {
  panelInfos: BacksidePanelInfo[]
  nextActionCount: string
  practiceScore: string
  liveBonuses: BacksideLiveBonus[]
  execPanelLocationInfo: BacksideExecPanelLocationInfo | undefined
  totalPracticeScore: string
  deckUserCharacters: UserCharacter[]
  deckDetailInfo: BacksideStageDeckDetailInfo | undefined
  scoreLiveDeckDetailInfo: BacksideStageDeckDetailInfo | undefined
  battleLiveDeckDetailInfo: BacksideStageDeckDetailInfo | undefined
}

export type BacksidePanelInfo = {
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
  panelType: BacksidePanelType
  panelAttributeType: BacksidePanelAttributeType
  panelRank: number
  panelGoalInfo: BacksidePanelGoalInfo | undefined
  panelLiveInfo: BacksidePanelLiveInfo | undefined
  panelPvpInfo: BacksidePanelPvpInfo | undefined
  panelStaminaInfo: BacksidePanelStaminaInfo | undefined
  haveExecuted: boolean
  canAction: boolean
}

export type BacksideOpponentInfo = {
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type BacksidePanelStaminaInfo = {
  staminaConsumptionAmount: number
  staminaRecoveryAmount: number
}

export type BacksideScheduleInfo = {
  actionCount: number
  panelType: BacksidePanelType
}

export type BacksideLiveInfo = {
  result: LiveResult | undefined
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
}

export type BacksidePracticeStageClearInfo = {
  name: string
  practiceRankType: BacksidePracticeRankType
  practiceRankPlus: number
  practiceScore: string
  liveBonuses: BacksideLiveBonus[]
  lastPracticeRankType: BacksidePracticeRankType
  lastPracticeRankPlus: number
  lastPracticeScore: string
  lastLiveBonuses: BacksideLiveBonus[]
  firstClearRewardResults: RewardResult[]
  firstPracticeRankRewardResults: RewardResult[]
  loopPracticeRankRewardResults: RewardResult[]
}

export type BacksideFinalStageClearInfo = {
  name: string
  finalRankType: ResultRankType
  finalRankPlus: number
  finalScore: string
  firstClearRewardResults: RewardResult[]
  firstFinalRankRewardResults: RewardResult[]
  isBest: boolean
  newRank: string
  practiceScore: string
  totalPracticeScore: string
  loopFinalRankRewardResults: RewardResult[]
  difficultyAreaRewardResults: RewardResult[]
}

export type BacksideSurpriseInfo = {
  advAssetId: string
  liveBonus: BacksideLiveBonus | undefined
}

export type BacksideExecPanelLocationInfo = {
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
}

export type BacksideDeckPositionInfo = {
  cardId: string
  newPosition: number
}

export type BirthdayTopResponse = {
  birthdayInfos: BirthdayInfo[]
  unwatchedAdvBirthdayIds: string[]
  receivableRewardBirthdayIds: string[]
  commonResponse: CommonResponse | undefined
}

export type BirthdaySetWatchedRequest = {
  birthdayId: string
}

export type BirthdaySetWatchedResponse = {
  unwatchAdvBirthdayIds: string[]
  receivableRewardBirthdayIds: string[]
  commonResponse: CommonResponse | undefined
}

export type BirthdayReceiveRewardResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type BirthdayOutputWatchedLogRequest = {
  birthdayId: string
  isSkip: boolean
}

export type BirthdayOutputWatchedLogResponse = {
  commonResponse: CommonResponse | undefined
}

export type BirthdaySetWatchedRemindInfoResponse = {
  commonResponse: CommonResponse | undefined
}

export type CardEnhanceRequest = {
  cardId: string
  level: number
}

export type CardEnhanceResponse = {
  commonResponse: CommonResponse | undefined
}

export type CardLimitBreakRequest = {
  cardId: string
  rarity: number
}

export type CardLimitBreakResponse = {
  commonResponse: CommonResponse | undefined
}

export type CardSkillEnhanceRequest = {
  cardId: string
  skillId: string
}

export type CardSkillEnhanceResponse = {
  commonResponse: CommonResponse | undefined
}

export type CardLiveAbilityEnhanceRequest = {
  cardId: string
  abilityId: string
}

export type CardLiveAbilityEnhanceResponse = {
  commonResponse: CommonResponse | undefined
}

export type CardActivityAbilityEnhanceRequest = {
  cardId: string
  abilityId: string
}

export type CardActivityAbilityEnhanceResponse = {
  commonResponse: CommonResponse | undefined
}

export type CardResetRequest = {
  cardId: string
}

export type CardResetResponse = {
  rewards: Reward[]
  commonResponse: CommonResponse | undefined
}

export type CardSetSupportRequest = {
  number: number
  cardId: string
}

export type CardSetSupportResponse = {
  commonResponse: CommonResponse | undefined
}

export type CardRemoveSupportRequest = {
  number: number
}

export type CardRemoveSupportResponse = {
  rewards: Reward[]
  commonResponse: CommonResponse | undefined
}

export type CardReleaseSupportRequest = {
  useStone: boolean
}

export type CardReleaseSupportResponse = {
  commonResponse: CommonResponse | undefined
}

export type CardRankUpRequest = {
  cardId: string
  rank: number
}

export type CardRankUpResponse = {
  commonResponse: CommonResponse | undefined
}

export type CardUpdateDisplayTypeRequest = {
  cardId: string
  displayType: CardDisplayType
}

export type CardUpdateDisplayTypeResponse = {
  commonResponse: CommonResponse | undefined
}

export type LoginBonusPackageItem = {
  shopItem: ShopItem | undefined
  loginBonuses: ShopLoginBonus[]
  isPurchased: boolean
}

export type ConditionRewardPackageItem = {
  shopItem: ShopItem | undefined
  conditionRewards: ShopConditionReward[]
  isPurchased: boolean
}

export type LiveResult = {
  userInfos: LiveUserInfo[]
  activatedPassiveSkills: LiveSkill[]
  charts: LiveChart[]
  totalAudienceAmount: number
  cleared: boolean
  isDisplayDetailAvailable: boolean
  preChart: LiveChart | undefined
  detailLogId: string
}

export type LiveUserDeck = {
  deckName: string
  cards: LiveDeckCard[]
  bonusSkills: LiveDeckCardSkill[]
}

export type LiveChart = {
  number: number
  chartType: MusicChartType
  attributeType: AttributeType
  beats: LiveBeat[]
  activatedSkill: LiveSkill | undefined
  activatedPassiveSkills: LiveSkill[]
  userStatuses: LiveUserStatus[]
  cardStatuses: LiveCardStatus[]
}

export type LiveBeat = {
  order: number
  cardIndex: number
  score: string
  isCritical: boolean
}

export type LiveSkill = {
  order: number
  cardIndex: number
  skillIndex: number
  activated: boolean
  stamina: string
  score: string
  isCritical: boolean
  details: LiveSkillDetail[]
  failures: LiveSkillFailure[]
  isComboBreak: boolean
  cardStatuses: LiveCardStatus[]
  userStatuses: LiveUserStatus[]
  descriptions: LiveLogDescription[]
}

export type LiveSkillFailure = {
  cardIndex: number
  type: SkillFailureType
  eachFailureTypes: SkillFailureType[]
}

export type LiveSkillDetail = {
  efficacyIndex: number
  value: string
  statusType: StatusEffectType
  targetCardIndexes: number[]
  effectiveChartCount: number
  targetCardInfos: LiveSkillDetailTargetCardInfo[]
}

export type LiveSkillDetailTargetCardInfo = {
  targetCardIndex: number
  value: string
}

export type LiveLogDescription = {
  message: string
}

export type LiveUserStatus = {
  userIndex: number
  currentComboCount: number
  totalScore: string
}

export type LiveCardStatus = {
  cardIndex: number
  stamina: string
  dance: string
  vocal: string
  visual: string
  effects: LiveCardStatusEffect[]
  skillStatuses: LiveSkillStatus[]
}

export type LiveCardStatusEffect = {
  statusType: StatusEffectType
  skillEfficacyType: SkillEfficacyType
  value: string
  grade: number
  remainEffectedChartCount: number
  maxGrade: number
  value2: string
  statusReasons: LiveStatusEffectReason[]
}

export type LiveStatusEffectReason = {
  cardIndex: number
  skillIndex: number
}

export type LiveSkillStatus = {
  skillIndex: number
  remainCount: number
  coolTime: number
}

export type LiveUserResult = {
  score: string
  criticalCount: number
  hitCount: number
  missCount: number
  maxComboCount: number
  cardResults: LiveCardResult[]
}

export type PvpOpponentInfo = {
  opponentId: string
  name: string
  managerLevel: number
  point: string
  rank: number
  cardInfos: LiveBattleCardInfo[]
}

export type GvgOpponentInfo = {
  opponentId: string
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type QuestRankPattern = {
  rankType: ResultRankType
  plus: number
  thresholdScore: string
}

export type ActivityPromotionReward = {
  resourceType: ResourceType
  resourceId: string
  amount: string
  isRare: boolean
}

export type AllProfileInfo = {
  profile: ProfileInfo | undefined
  hierarchy: HierarchyProfileInfo | undefined
}

export type FavoritePhotoInfo = {
  photoId: string
  assetId: string
  imageType: PhotoImageType
}

export type NoticeInfo = {
  id: string
  title: string
  bannerAssetId: string
  linkType: LinkType
  linkDetail: string
  displayNotification: boolean
  startTime: string
  listTitle: string
  notificationRestartTime: string
}

export type PaidJpy = {
  amount: number
}

export type FanEventRankPattern = {
  rankType: ResultRankType
  plus: number
  thresholdPoint: number
}

export type ActivityLevelProgress = {
  maxActivityLevel: number
  before: ActivityLevelInfo | undefined
  after: ActivityLevelInfo | undefined
}

export type ActivityLevelInfo = {
  exp: number
  level: number
  nextLevelLocked: boolean
}

export type ActivityCampaignEffect = {
  type: ActivityCampaignEffectType
  value: number
  endTime: string
}

export type EventStoryEpisodeInfo = {
  episode: number
  unlocked: boolean
}

export type ExtraStoryEpisodeInfo = {
  episode: number
  unlocked: boolean
}

export type EventExchangeBoothInfo = {
  id: string
  name: string
  bannerAssetId: string
  requiredResourceType: ResourceType
  requiredResourceId: string
}

export type PvpSeasonInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  challengeCount: number
  nextStartTime: string
}

export type CurrentGvgInfo = {
  gvgSeason: GvgSeasonInfo | undefined
  isRemainingChallenge: boolean
}

export type GachaStampInfo = {
  currentSheetNumber: number
  currentStampNumber: number
}

export type HomeEventInfo = {
  eventMissionInfos: HomeEventMissionInfo[]
  tourInfos: HomeTourInfo[]
  backsideInfos: HomeBacksideInfo[]
  marathonInfos: HomeMarathonInfo[]
  photoContestInfos: HomePhotoContestInfo[]
  raceInfos: HomeRaceInfo[]
  ladderInfos: HomeLadderInfo[]
  loveEventInfos: HomeLoveEventInfo[]
  homeBirthdayInfo: HomeBirthdayInfo | undefined
}

export type HomeBirthdayInfo = {
  bannerAssetId: string
  order: number
  isRemainingUnwatched: boolean
  isRemainingReceivableReward: boolean
}

export type QuestReward = {
  clearRewards: RewardResult[]
  scoreRankRewards: RewardResult[]
  scoreRankAdditionalRewards: RewardResult[]
  musicMasteryRewards: Reward[]
  achievedRankRewards: Reward[]
  rewardCards: QuestRewardCard[]
  campaignDropRewards: RewardResult[]
}

export type QuestOpponentInfo = {
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type BoxGachaDrawResult = {
  itemType: BoxGachaItemType
  rewards: Reward[]
  liveBonusId: string
}

export type UserDeckPosition = {
  position: number
  cardId: string
  part1AccessoryId: string
  part2AccessoryId: string
  photoIds: string[]
  costumeId: string
  buddyUserId: string
  hairId: string
}

export type LadderProgressInfo = {
  steps: LadderStep[]
}

export type LadderStep = {
  step: number
  lane1Panel: LadderPanel | undefined
  lane2Panel: LadderPanel | undefined
  lane3Panel: LadderPanel | undefined
}

export type FriendApplyToBuddyInfo = {
  isActive: boolean
  isAlreadyOffered: boolean
}

export type BirthdayAdvInfo = {
  birthdayId: string
  advAssetId: string
}

export type BirthdayRemindInfo = {
  assetId: string
  description: string
  linkTitle: string
  linkType: LinkType
  linkDetail: string
}

export type CommonResponse = {
  updatedData: UpdatedData | undefined
  deletedData: DeletedData | undefined
}

export type UpdatedData = {
  user: User2 | undefined
  items: UserItem[]
  cards: UserCard[]
  characters: UserCharacter[]
  costumes: UserCostume[]
  accessories: UserAccessory[]
  photos: UserPhoto[]
  decks: UserDeck[]
  deckPositions: UserDeckPosition1[]
  stories: UserStory[]
  points: UserPoint[]
  staffs: UserStaff[]
  messages: UserMessage[]
  telephones: UserTelephone[]
  missions: UserMission[]
  profile: UserProfile | undefined
  emblems: UserEmblem[]
  characterMusics: UserCharacterMusic[]
  balance: UserBalance | undefined
  totalCount: UserTotalCount | undefined
  areas: UserArea[]
  quests: UserQuest[]
  gachaButtons: UserGachaButton[]
  homeTalks: UserHomeTalk[]
  photoReport: UserPhotoReport | undefined
  cardSupports: UserCardSupport[]
  messageSchedules: UserMessageSchedule[]
  notifications: UserNotification[]
  hierarchy: UserHierarchy | undefined
  tutorials: UserTutorial[]
  homePositions: UserHomePosition[]
  musics: UserMusic[]
  decorations: UserDecoration[]
  photoRecipes: UserPhotoRecipe[]
  buddy: UserBuddy | undefined
  invite: UserInvite | undefined
  hairs: UserHair[]
  activityFanEventProgress: UserActivityFanEventProgress | undefined
  loves: UserLove[]
}

export type DeletedData = {
  items: UserItem[]
  accessories: UserAccessory[]
  photos: UserPhoto[]
  decks: UserDeck[]
  deckPositions: UserDeckPosition1[]
  points: UserPoint[]
  messageSchedules: UserMessageSchedule[]
  stories: UserStory[]
  photoRecipes: UserPhotoRecipe[]
}

export type CostumeSetRequest = {
  costumeId: string
  hairId: string
}

export type CostumeSetResponse = {
  commonResponse: CommonResponse | undefined
}

export type CostumeLiveSetRequest = {
  costumeId: string
  hairId: string
}

export type CostumeLiveSetResponse = {
  commonResponse: CommonResponse | undefined
}

export type CostumeCheckRequest = {
  costumeId: string
}

export type CostumeCheckResponse = {
  commonResponse: CommonResponse | undefined
}

export type DeckSaveRequest = {
  number: number
  name: string
  userDeckPositions: UserDeckPosition1[]
  deckEditType: DeckEditType
  questId: string
}

export type DeckSaveResponse = {
  commonResponse: CommonResponse | undefined
}

export type DeckDeleteRequest = {
  number: number
}

export type DeckDeleteResponse = {
  commonResponse: CommonResponse | undefined
}

export type DeckBuddyListResponse = {
  friendBuddyUserCardInfos: DeckBuddyUserCardInfo[]
  notFriendBuddyUserCardInfos: DeckBuddyUserCardInfo[]
  commonResponse: CommonResponse | undefined
}

export type DeckBuddyUserCardInfo = {
  userId: string
  userCard: UserCard | undefined
  managerName: string
}

export type DiaryGetInfosResponse = {
  infos: DiaryInfo[]
  commonResponse: CommonResponse | undefined
}

export type DiaryReadRequest = {
  diaryIds: string[]
}

export type DiaryReadResponse = {
  commonResponse: CommonResponse | undefined
}

export type DiaryInfo = {
  id: string
  year: number
  month: number
  day: number
  assetId: string
  isRead: boolean
}

export type DivisionListResponse = {
  divisions: DivisionInfo[]
  reasonType: DivisionCannotMoveReasonType
  commonResponse: CommonResponse | undefined
}

export type DivisionMoveRequest = {
  divisionId: string
}

export type DivisionMoveResponse = {
  commonResponse: CommonResponse | undefined
}

export type DokanListResponse = {
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse | undefined
}

export type DokanSetWatchedRequest = {
  dokanIds: string[]
  skippedDokanIds: string[]
}

export type DokanSetWathcedResponse = {
  commonResponse: CommonResponse | undefined
}

export type DokanOutputWatchedLogRequest = {
  dokanIds: string[]
  skippedDokanIds: string[]
}

export type DokanOutputWatchedLogResponse = {
  commonResponse: CommonResponse | undefined
}

export type ExchangeListResponse = {
  booths: ExchangeBooth[]
  commonResponse: CommonResponse | undefined
}

export type ExchangeExecuteRequest = {
  exchangeId: string
  count: number
}

export type ExchangeExecuteResponse = {
  results: RewardResult[]
  afterExchangeItem: ExchangeItem | undefined
  booth: ExchangeBooth | undefined
  commonResponse: CommonResponse | undefined
}

export type ExchangeTryOnRequest = {
  exchangeId: string
  costumeId: string
  hairId: string
}

export type ExchangeTryOnResponse = {
  commonResponse: CommonResponse | undefined
}

export type ExerciseTopResponse = {
  exercises: ExerciseInfo[]
  commonResponse: CommonResponse | undefined
}

export type ExerciseSaveDeckRequest = {
  exerciseId: string
  positions: ExerciseDeckPosition[]
}

export type ExerciseSaveDeckResponse = {
  commonResponse: CommonResponse | undefined
}

export type ExerciseStartRequest = {
  exerciseId: string
  isSkip: boolean
}

export type ExerciseListAssetRequest = {
  exerciseId: string
}

export type ExerciseListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse | undefined
}

export type ForumListThreadReplyRequest = {
  threadId: string
  requestType: ForumListReplyRequestType
  replyId: number
}

export type ForumCreateThreadRequest = {
  title: string
  firstReplyContent: string
}

export type ForumSendThreadReplyRequest = {
  threadId: string
  replyContent: string
}

export type ForumLikeReplyRequest = {
  threadId: string
  replyId: number
}

export type ForumDislikeReplyRequest = {
  threadId: string
  replyId: number
}

export type ForumBookmarkThreadRequest = {
  threadId: string
}

export type ForumUnbookmarkThreadRequest = {
  threadId: string
}

export type ForumBlockUserRequest = {
  userId: string
}

export type ForumListThreadResponse = {
  threads: ForumThreadInfo[]
  commonResponse: CommonResponse | undefined
}

export type ForumListThreadReplyResponse = {
  threadReplies: ForumThreadReplyInfo[]
  thread: ForumThreadInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type ForumCreateThreadResponse = {
  threadId: string
  commonResponse: CommonResponse | undefined
}

export type ForumSendThreadReplyResponse = {
  commonResponse: CommonResponse | undefined
}

export type ForumLikeReplyResponse = {
  commonResponse: CommonResponse | undefined
}

export type ForumDislikeReplyResponse = {
  commonResponse: CommonResponse | undefined
}

export type ForumBookmarkThreadResponse = {
  commonResponse: CommonResponse | undefined
}

export type ForumUnbookmarkThreadResponse = {
  commonResponse: CommonResponse | undefined
}

export type ForumBlockUserResponse = {
  commonResponse: CommonResponse | undefined
}

export type ForumThreadInfo = {
  id: string
  title: string
  replyCount: number
  isBookmarked: boolean
  lastUpdatedTime: string
  power: number
}

export type ForumThreadReplyInfo = {
  id: number
  threadId: string
  userId: string
  userName: string
  repliedTime: string
  content: string
  likeCount: number
  isLiked: boolean
  isBlocked: boolean
  isDeleted: boolean
}

export type FriendListResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse | undefined
}

export type FriendDeleteRequest = {
  userIds: string[]
}

export type FriendDeleteResponse = {
  commonResponse: CommonResponse | undefined
}

export type FriendApplyRequest = {
  userId: string
}

export type FriendApplyResponse = {
  isTargetOfferedLimit: boolean
  isAlreadyFriend: boolean
  isAlreadyOffering: boolean
  isAlreadyOffered: boolean
  isAccountBan: boolean
  applied: boolean
  isAccountDeleted: boolean
  commonResponse: CommonResponse | undefined
}

export type FriendApproveRequest = {
  userId: string
}

export type FriendApproveResponse = {
  isFriendLimit: boolean
  isTargetFriendLimit: boolean
  isOfferDeleted: boolean
  isAccountBan: boolean
  approved: boolean
  isAccountDeleted: boolean
  commonResponse: CommonResponse | undefined
}

export type FriendCancelRequest = {
  userId: string
}

export type FriendCancelResponse = {
  commonResponse: CommonResponse | undefined
}

export type FriendCancelAllResponse = {
  commonResponse: CommonResponse | undefined
}

export type FriendRejectRequest = {
  userId: string
}

export type FriendRejectResponse = {
  isOfferDeleted: boolean
  commonResponse: CommonResponse | undefined
}

export type FriendListApplyingResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse | undefined
}

export type FriendListAppliedResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse | undefined
}

export type FriendSearchResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse | undefined
}

export type GachaListResponse = {
  gachas: GachaInfo[]
  commonResponse: CommonResponse | undefined
}

export type GachaDrawRequest = {
  gachaButtonId: string
  execCount: number
}

export type GachaDrawResponse = {
  button: GachaButtonInfo | undefined
  rewards: Reward[]
  consumptionResults: ConsumptionResult[]
  rewardResults: RewardResult[]
  drawRewardResults: RewardResult[]
  bonusRewards: Reward[]
  gachaMovie: GachaMovie | undefined
  cardRewards: Reward[]
  continuousResult: GachaContinuousResult | undefined
  stampInfo: GachaStampInfo | undefined
  stampRewards: Reward[]
  commonResponse: CommonResponse | undefined
}

export type GachaExchangeRequest = {
  gachaExchangeId: string
  count: number
}

export type GachaExchangeResponse = {
  exchange: GachaExchangeInfo | undefined
  rewardResults: RewardResult[]
  consumptionResults: ConsumptionResult[]
  commonResponse: CommonResponse | undefined
}

export type GachaProbabilityRequest = {
  gachaId: string
}

export type GachaProbabilityResponse = {
  rarityProbabilityInfos: RarityProbabilityInfo[]
  fixProbabilityInfos: FixProbabilityInfo[]
  probabilityInfos: ProbabilityInfo[]
  commonResponse: CommonResponse | undefined
}

export type GachaHistoryRequest = {
  gachaType: GachaType
}

export type GachaHistoryResponse = {
  histories: GachaHistory[]
  commonResponse: CommonResponse | undefined
}

export type GachaSelectCardRequest = {
  gachaId: string
  selectedCardIds: string[]
}

export type GachaSelectCardResponse = {
  commonResponse: CommonResponse | undefined
}

export type RarityProbabilityInfo = {
  rarity: number
  probability: number
  probabilityInfos: ProbabilityInfo[]
  gachaRewardPatternType: GachaRewardPatternType
  individualProbability: number
}

export type FixProbabilityInfo = {
  gachaButtonId: string
  rarityProbabilityInfos: RarityProbabilityInfo[]
}

export type ProbabilityInfo = {
  resourceType: ResourceType
  resourceId: string
  amount: string
  probability: number
  isRatioUp: boolean
}

export type GachaAnimation = {
  id: string
  embeddedType: GachaAnimationEmbeddedType
  assetId: string
}

export type GachaMovie = {
  assetId: string
  bgmAssetId: string
  isForce: boolean
}

export type GiftListRequest = {
  offset: number
  sortType: GiftSortType
  filters: GiftFilterType[]
  desc: boolean
}

export type GiftListResponse = {
  gifts: UserGift[]
  hasNext: boolean
  count: number
  commonResponse: CommonResponse | undefined
}

export type GiftCountRequest = {
  filters: GiftFilterType[]
}

export type GiftCountResponse = {
  count: number
  commonResponse: CommonResponse | undefined
}

export type GiftReceiveRequest = {
  giftIds: string[]
}

export type GiftReceiveResponse = {
  results: RewardResult[]
  hasUnreceivedGift: boolean
  receivedGiftIds: string[]
  unreceivedGiftIds: string[]
  hierarchyChangeInfo: HierarchyChangeInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type GiftHistoryListResponse = {
  gifts: UserGiftHistory[]
  commonResponse: CommonResponse | undefined
}

export type GuildListResponse = {
  guilds: GuildParam[]
  commonResponse: CommonResponse | undefined
}

export type GuildGvgSeasonResult = {
  seasonRank: number
  seasonWinCount: number
  seasonLoseCount: number
  seasonDrawCount: number
  seasonTotalPoint: string
}

export type GuildTopResponse = {
  rewardGuildMedalAmount: number
  gvgSeasonInfo: GuildGvgSeasonInfo | undefined
  exchangeBoothId: string
  commonResponse: CommonResponse | undefined
}

export type GuildGvgRankInfo = {
  name: string
  point: string
  rank: number
}

export type GuildJoinRequest = {
  guildId: string
  isRecommended: boolean
}

export type GuildJoinResponse = {
  commonResponse: CommonResponse | undefined
}

export type GvgTopResponse = {
  topResult: GvgTopInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type GvgTopInfo = {
  gvgSeason: GvgSeasonInfo | undefined
  currentMatch: GvgCurrentSeasonMatchInfo | undefined
  seasonMatches: GvgSeasonMatchInfo[]
  rankingRewards: GvgRankingRewardInfo[]
  guildRankingRewards: GvgGuildRankingRewardInfo[]
  gvgQuest: LiveBattleQuestInfo | undefined
  userGvgSeason: UserGvgSeasonInfo | undefined
}

export type UserGvgSeasonInfo = {
  points: string[]
  totalPoint: string
  rankRatePercent: number
  rank: number
  guildPoint: string
  guildRank: number
  hasChallenged: boolean
  winCount: number
  loseCount: number
  drawCount: number
  isCurrentMatchWin: boolean
}

export type GvgListOpponentRequest = {
  gvgSeasonId: string
}

export type GvgListOpponentResponse = {
  opponentInfos: GvgOpponentInfo[]
  commonResponse: CommonResponse | undefined
}

export type GvgListRankingRequest = {
  gvgSeasonId: string
}

export type GvgListRankingResponse = {
  rankingInfos: LiveRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse | undefined
}

export type GvgStartRequest = {
  gvgSeasonId: string
  opponentId: string
  deckNumber: number
  isSkip: boolean
  matchNumber: number
  challengeConsumptionType: GvgChallengeConsumptionType
}

export type GvgStartResponse = {
  result: LiveResult | undefined
  point: string
  addPoint: string
  rank: number
  musicMasteryRewards: Reward[]
  challengeRewards: RewardResult[]
  guildPoint: string
  addGuildPoint: string
  totalPoint: string
  profile: AllProfileInfo | undefined
  opponentProfile: AllProfileInfo | undefined
  winRewards: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type GvgListAssetRequest = {
  gvgSeasonId: string
  opponentId: string
  deckNumber: number
  matchNumber: number
}

export type GvgListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  opponentCharacterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse | undefined
}

export type HairCheckRequest = {
  hairId: string
}

export type HairCheckResponse = {
  commonResponse: CommonResponse | undefined
}

export type HealthCheckRequest = {
  service: string
}

export type HealthCheckResponse = {}

export type HierarchyRewardsReceiveRequest = {
  hierarchyRewardIds: string[]
}

export type HierarchyDivisionRewardsReceiveRequest = {
  hierarchyDivisionRewardIds: string[]
}

export type HierarchyTopResponse = {
  userHierarchyInfo: UserHierarchyInfo | undefined
  rewardInfos: HierarchyRewardInfo[]
  divisionRewardInfos: HierarchyDivisionRewardInfo[]
  highestGradeUserNames: string[]
  commonResponse: CommonResponse | undefined
}

export type HierarchyRankingResponse = {
  rankUserInfos: HierarchyRankUserInfo[]
  commonResponse: CommonResponse | undefined
}

export type HierarchyRewardsReceiveResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type HierarchyDivisionRewardsReceiveResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type HomeEnterRequest = {
  skipUpdate: boolean
}

export type NotiShopItem = {
  shopId: string
  shopItemIds: string[]
}

export type SpecialHomeActionDetail = {
  motionAssetId: string
  additionMotionAssetId: string
  voiceAssetId: string
  text: string
  weight: number
}

export type HomeLoginRequest = {
  settingInfo: SettingInfo | undefined
}

export type SettingInfo = {
  soundBgm: number
  soundEffect: number
  soundVoice: number
  graphicType: GraphicType
  frameRate: number
  activityFinishNotification: boolean
  messageNotification: boolean
  nightMode: boolean
  notLoginNotification: boolean
}

export type HomeLoginResponse = {
  paidJpy: PaidJpy | undefined
  purchasedLoginBonusShopInfos: PurchasedLoginBonusShopInfo[]
  birthdayAdvInfo: BirthdayAdvInfo | undefined
  birthdayRemindInfo: BirthdayRemindInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type HomeReadTalkRequest = {
  homeTalkId: string
}

export type HomeReadTalkResponse = {
  isReliabilityUp: boolean
  commonResponse: CommonResponse | undefined
}

export type HomeSetReviewResponse = {
  commonResponse: CommonResponse | undefined
}

export type HomeSetCharacterPositionRequest = {
  positions: HomeCharacterPosition[]
}

export type HomeCharacterPosition = {
  type: HomePositionType
  characterId: string
  isCharacterRandom: boolean
  isCostumeRandom: boolean
}

export type HomeSetCharacterPositionResponse = {
  commonResponse: CommonResponse | undefined
}

export type HomePvpInfo = {
  remainingChallengeCount: number
  latestPvpSeason: PvpSeasonInfo | undefined
}

export type HomeLeagueInfo = {
  nextBattleStartTime: string
  battleEndTime: string
  nextSeasonStartTime: string
  statusType: LeagueStatusType
  isNewsUnread: boolean
  isNewSeasonNotJoined: boolean
  isRemainingImperfectDeck: boolean
  deckInfos: HomeLeagueDeckInfo[]
}

export type HomeLeagueDeckInfo = {
  seasonId: string
  deckType: LeagueDeckType
  deckPositions: UserDeckPosition1[]
}

export type PvpRewardResultInfo = {
  name: string
  point: string
  rank: string
  rankingRewards: Reward[]
  hierarchyChangeInfo: HierarchyChangeInfo | undefined
}

export type GvgRewardResultInfo = {
  name: string
  point: string
  rank: number
  rankRate: number
  guildRank: number
  rankingRewards: Reward[]
  guildRankingRewards: Reward[]
  hierarchyChangeInfo: HierarchyChangeInfo | undefined
}

export type TourRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type BacksideRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type PhotoContestRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type RaceRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type RaceDailyRewardResultInfo = {
  score: string
  rank: number
  rankingRewards: Reward[]
  rankingUserInfos: RaceDailyRankingUserInfo[]
  days: number
}

export type BuddyUsedRewardResultInfo = {
  usedCount: string
  rewards: Reward[]
}

export type HomeActiveFanEvent = {
  characterIds: string[]
  finishTime: string
  activityPoint: number
  rankType: ResultRankType
  rankPlus: number
  currentCheerPoint: number
}

export type HomeActivePromotion = {
  characterIds: string[]
  finishTime: string
  rewardGoldAmount: number
  rewardCardEnhanceItemAmount: number
  rewards: ActivityPromotionReward[]
  hasMoreRewards: boolean
}

export type HomeActiveRefresh = {
  characterIds: string[]
  finishTime: string
}

export type FunctionMaintenanceInfo = {
  type: FunctionMaintenanceType
  targetIds: string[]
  isTwitter: boolean
  websiteUrl: string
}

export type BannerInfo = {
  menuBanners: Banner[]
  messageBanners: Banner[]
  boardBanners: Banner[]
  questBanners: Banner[]
  inviteBanners: Banner[]
  exerciseBanners: Banner[]
  specialPhotoShootingQuestBanners: Banner[]
  specialPhotoShootingActivityBanners: Banner[]
}

export type FanEventInfo = {
  fanEvents: FanEvent[]
  activeFanEvent: ActiveFanEvent | undefined
  campaignEffects: ActivityCampaignEffect[]
}

export type PromotionInfo = {
  promotions: Promotion[]
  activePromotion: ActivePromotion | undefined
  campaignEffects: ActivityCampaignEffect[]
}

export type RefreshInfo = {
  refreshes: Refresh[]
  activeRefresh: ActiveRefresh | undefined
  campaignEffects: ActivityCampaignEffect[]
}

export type PurchasedLoginBonusShopInfo = {
  shopInfo: ShopInfo | undefined
  loginBonusPackageItem: LoginBonusPackageItem | undefined
}

export type PurchasedConditionRewardShopInfo = {
  shopInfo: ShopInfo | undefined
  conditionRewardPackageItem: ConditionRewardPackageItem | undefined
}

export type LeagueRewardResultInfo = {
  leagueSeasonName: string
  leagueGradeName: string
  seasonResultType: LeagueSeasonResultType
  rank: number
  point: string
  winCount: number
  loseCount: number
  rewards: Reward[]
  highestLeagueGradeName: string
}

export type InviteTopResponse = {
  inviteCode: string
  guestInfos: InviteGuestInfo[]
  noticeInfo: NoticeInfo | undefined
  receivedHostRewardTotalAmount: string
  exchangeBoothId: string
  commonResponse: CommonResponse | undefined
}

export type InviteReceiveHostRewardsRequest = {
  userIds: string[]
}

export type InviteReceiveHostRewardsResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type InviteEnterCodeRequest = {
  inviteCode: string
}

export type InviteEnterCodeResponse = {
  commonResponse: CommonResponse | undefined
}

export type ItemSellRequest = {
  itemId: string
  amount: string
}

export type ItemSellResponse = {
  commonResponse: CommonResponse | undefined
}

export type LadderTopRequest = {
  ladderId: string
}

export type LadderTopResponse = {
  ladderInfo: LadderInfo | undefined
  progressInfo: LadderProgressInfo | undefined
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse | undefined
}

export type LadderPanelReachRequest = {
  ladderId: string
  step: number
  lane: number
}

export type LadderPanelReachResponse = {
  rewardResults: RewardResult[]
  progressInfo: LadderProgressInfo | undefined
  reachablePanelCount: number
  commonResponse: CommonResponse | undefined
}

export type LeagueTopResponse = {
  seasonInfo: LeagueSeasonInfo | undefined
  newsInfo: LeagueNewsInfo | undefined
  seasonResultInfo: LeagueSeasonResultInfo | undefined
  dailyResultInfos: LeagueDailyResultInfo[]
  seasonCardResultInfos: LeagueSeasonCardResultInfo[]
  deckInfos: LeagueDeckInfo[]
  deckHistoryInfos: LeagueDeckHistoryInfo[]
  rankExistInfo: LeagueRankExistInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type LeagueSeasonInfo = {
  id: string
  name: string
  endTime: string
  deckABattleQuestInfo: LiveBattleQuestInfo | undefined
  deckBBattleQuestInfo: LiveBattleQuestInfo | undefined
  nextSeasonDeckABattleQuestInfo: LiveBattleQuestInfo | undefined
  nextSeasonDeckBBattleQuestInfo: LiveBattleQuestInfo | undefined
  rewardInfo: LeagueSeasonRewardInfo | undefined
  nextBattleStartTime: string
  skillActivationRateValidJoinCount: number
  nextId: string
  preId: string
}

export type LeagueSeasonResultInfo = {
  leagueGradeName: string
  point: string
  rank: number
  winCount: number
  loseCount: number
  seasonResultType: LeagueSeasonResultType
  upgradeRankThreshold: string
  upgradeLeagueGradeName: string
  downgradeRankThreshold: string
  downgradeLeagueGradeName: string
  highestLeagueGradeName: string
  lowestLeagueGradeName: string
  memberAmount: number
}

export type LeagueSeasonCardResultInfo = {
  cardInfo: LeagueCardInfo | undefined
  highestScore: string
  skillActivationRatePermil: number
  mvpCount: number
  highestScoreCardRank: number
  skillActivationRateCardRank: number
  mvpCountCardRank: number
  highestScoreLeagueRank: number
  skillActivationRateLeagueRank: number
  mvpCountLeagueRank: number
  joinCount: number
}

export type LeagueGetDailyDetailRequest = {
  seasonId: string
  date: string
}

export type LeagueGetDailyDetailResponse = {
  deckACards: LiveCardInfo[]
  deckBCards: LiveCardInfo[]
  battleResultInfos: LeagueBattleResultInfo[]
  winCount: number
  loseCount: number
  point: string
  rank: number
  commonResponse: CommonResponse | undefined
}

export type LeagueBattleResultInfo = {
  opponentUserId: string
  opponentUserName: string
  opponentDeckACards: LiveCardInfo[]
  deckASelfScore: string
  deckAOpponentScore: string
  opponentDeckBCards: LiveCardInfo[]
  deckBSelfScore: string
  deckBOpponentScore: string
  isLiveResultDetailAvailable: boolean
}

export type LeagueOpponentInfo = {
  userId: string
  name: string
  deckACards: LiveCardInfo[]
  deckBCards: LiveCardInfo[]
}

export type LeagueGetLiveResultRequest = {
  seasonId: string
  date: string
  userId: string
  deckType: LeagueDeckType
  isDetail: boolean
}

export type LeagueGetLiveResultResponse = {
  result: LiveResult | undefined
  commonResponse: CommonResponse | undefined
}

export type LeagueSaveDeckRequest = {
  seasonId: string
  deckType: LeagueDeckType
  deckPositions: UserDeckPosition1[]
  deckEditType: DeckEditType
}

export type LeagueSaveDeckResponse = {
  deckPositions: UserDeckPosition1[]
  commonResponse: CommonResponse | undefined
}

export type LeagueDeckInfo = {
  seasonId: string
  deckType: LeagueDeckType
  deckPositions: UserDeckPosition1[]
  winCount: number
  loseCount: number
  consecutiveWinCount: number
}

export type LeagueDeckHistoryInfo = {
  date: string
  deckACards: LiveCardInfo[]
  deckAWinCount: number
  deckALoseCount: number
  deckBCards: LiveCardInfo[]
  deckBWinCount: number
  deckBLoseCount: number
}

export type LeagueGetLastSeasonResultResponse = {
  seasonName: string
  seasonResultInfo: LeagueSeasonResultInfo | undefined
  dailyResultInfos: LeagueDailyResultInfo[]
  seasonCardResultInfos: LeagueSeasonCardResultInfo[]
  skillActivationRateValidJoinCount: number
  rankExistInfo: LeagueRankExistInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type LeagueListPointRankingRequest = {
  seasonId: string
}

export type LeagueListPointRankingResponse = {
  rankings: LeaguePointRanking[]
  commonResponse: CommonResponse | undefined
}

export type LeagueListCardHighestScoreRankingRequest = {
  seasonId: string
}

export type LeagueListCardHighestScoreRankingResponse = {
  rankings: LeagueCardRanking[]
  commonResponse: CommonResponse | undefined
}

export type LeagueListCardSkillRateRankingRequest = {
  seasonId: string
}

export type LeagueListCardSkillRateRankingResponse = {
  rankings: LeagueCardRanking[]
  commonResponse: CommonResponse | undefined
}

export type LeagueListCardMvpRankingRequest = {
  seasonId: string
}

export type LeagueListCardMvpRankingResponse = {
  rankings: LeagueCardRanking[]
  commonResponse: CommonResponse | undefined
}

export type LeagueRankExistInfo = {
  isPointExist: boolean
  cardRankExistInfos: LeagueCardRankExistInfo[]
}

export type LeagueCardRankExistInfo = {
  resultType: LeagueSeasonCardResultType
  isExist: boolean
}

export type LoginBonusListResponse = {
  infos: LoginBonusInfo[]
  commonResponse: CommonResponse | undefined
}

export type LoginBonusReceiveRequest = {
  loginBonusId: string
}

export type LoginBonusReceiveResponse = {
  userLoginBonus: UserLoginBonus | undefined
  rewards: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type LoginBonusInfo = {
  userLoginBonus: UserLoginBonus | undefined
  noticeInfo: NoticeInfo | undefined
}

export type LoveTitleResponse = {
  loveInfos: LoveInfo[]
  commonResponse: CommonResponse | undefined
}

export type LoveStoryEndInfo = {
  id: string
  name: string
  unlocked: boolean
}

export type LoveRegisterRequest = {
  loveId: string
  name: string
}

export type LoveRegisterResponse = {
  commonResponse: CommonResponse | undefined
}

export type LoveTopRequest = {
  loveId: string
}

export type LoveSaveInfo = {
  unlocked: boolean
  saveDataInfos: LoveSaveDataInfo[]
}

export type LoveLessonProgress = {
  lastReceiveTime: string
  maxRewardTime: string
}

export type LoveLevelInfo = {
  level: number
  unlockStoryEpisode: number
  unlockLoveHintType: LoveHintType
  isTextViewable: boolean
}

export type LoveStartRequest = {
  storyEpisodeId: string
  hintLevel: number
}

export type LoveStartResponse = {
  storyChoiceGroupInfos: LoveStoryChoiceGroupInfo[]
  advBranchInfos: LoveAdvBranchInfo[]
  commonResponse: CommonResponse | undefined
}

export type LoveRestartRequest = {
  storyEpisodeId: string
  hintLevel: number
}

export type LoveRestartResponse = {
  storyChoiceGroupInfos: LoveStoryChoiceGroupInfo[]
  advBranchInfos: LoveAdvBranchInfo[]
  commonResponse: CommonResponse | undefined
}

export type LoveStoryChoiceGroupInfo = {
  groupIndex: number
  storyChoiceInfos: LoveStoryChoiceInfo[]
  existsObtainableFavorabilityDifference: boolean
}

export type LoveStoryChoiceInfo = {
  index: number
  isBestObtainableFavorability: boolean
  isPastSelected: boolean
}

export type LoveAdvBranchInfo = {
  groupIndex: number
  index: number
}

export type LoveFinishRequest = {
  storyEpisodeId: string
  selectStoryChoiceInfos: LoveSelectStoryChoiceInfo[]
  hintLevel: number
}

export type LoveSelectStoryChoiceInfo = {
  groupIndex: number
  index: number
  isValid: boolean
}

export type LoveFinishResponse = {
  rewards: RewardResult[]
  storyEndName: string
  unlockSave: boolean
  endRollAssetId: string
  commonResponse: CommonResponse | undefined
}

export type LoveResetReadingStoryStatusRequest = {
  loveId: string
}

export type LoveResetReadingStoryStatusResponse = {
  commonResponse: CommonResponse | undefined
}

export type LovePresentRequest = {
  loveId: string
}

export type LovePresentResponse = {
  hiddenFavorability: string
  commonResponse: CommonResponse | undefined
}

export type LoveSaveRequest = {
  loveId: string
  slotNumber: number
}

export type LoveSaveResponse = {
  commonResponse: CommonResponse | undefined
}

export type LoveUpdateSaveNameRequest = {
  loveId: string
  slotNumber: number
  name: string
}

export type LoveUpdateSaveNameResponse = {
  commonResponse: CommonResponse | undefined
}

export type LoveLoadRequest = {
  loveId: string
  slotNumber: number
}

export type LoveResetRequest = {
  loveId: string
}

export type LoveReceiveLessonRewardRequest = {
  loveId: string
}

export type LoveReceiveLessonRewardResponse = {
  rewards: Reward[]
  obtainExp: string
  totalExp: string
  lessonProgress: LoveLessonProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type LovePromoteLessonRequest = {
  loveId: string
}

export type LovePromoteLessonResponse = {
  rewards: Reward[]
  obtainExp: string
  totalExp: string
  lessonProgress: LoveLessonProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type LoveUpdateNameRequest = {
  loveId: string
  name: string
}

export type LoveUpdateNameResponse = {
  commonResponse: CommonResponse | undefined
}

export type MarathonTopRequest = {
  marathonId: string
}

export type MarathonTopResponse = {
  marathonInfo: MarathonInfo | undefined
  userMarathonInfo: UserMarathonInfo | undefined
  questInfos: MarathonQuestInfo[]
  boxGachaInfos: MarathonBoxGachaInfo[]
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse | undefined
}

export type MarathonQuestUnlockRequest = {
  marathonQuestId: string
}

export type MarathonQuestUnlockResponse = {
  unlockedQuestInfo: MarathonQuestInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type MarathonQuestStartRequest = {
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
  deckNumber: number
  isSkip: boolean
  execCount: number
  userBuddyDeckPositions: UserDeckPosition1[]
  buddyDeckName: string
}

export type MarathonQuestListAssetRequest = {
  marathonId: string
  deckNumber: number
  userBuddyDeckPositions: UserDeckPosition1[]
  buddyDeckName: string
}

export type MarathonQuestListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse | undefined
}

export type MarathonUseQuestStaminaRecoveryItemRequest = {
  marathonId: string
  amount: number
}

export type MarathonUseQuestStaminaRecoveryItemResponse = {
  userMarathonInfo: UserMarathonInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type MarathonListDeckRequest = {
  marathonId: string
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
  marathonBuddyDecks: MarathonBuddyDeck[]
}

export type MarathonListDeckResponse = {
  deckInfos: MarathonDeckInfo[]
  buddyDeckInfos: MarathonDeckInfo[]
  commonResponse: CommonResponse | undefined
}

export type MarathonDeckSaveRequest = {
  marathonQuestId: string
  number: number
  name: string
  userDeckPositions: UserDeckPosition1[]
  marathonQuestDifficultyNumber: number
}

export type MarathonDeckSaveResponse = {
  deckInfo: MarathonDeckInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type MarathonBuddyDeckRequest = {
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
  marathonBuddyDecks: MarathonBuddyDeck[]
}

export type MarathonBuddyDeck = {
  deckNumber: number
  deckName: string
  userBuddyDeckPositions: UserDeckPosition1[]
}

export type MarathonBuddyDeckResponse = {
  buddyDeckInfos: MarathonDeckInfo[]
  commonResponse: CommonResponse | undefined
}

export type MarathonBoxGachaDrawRequest = {
  marathonId: string
  boxGachaId: string
  execCount: number
}

export type MarathonBoxGachaDrawResponse = {
  drawResults: BoxGachaDrawResult[]
  commonResponse: CommonResponse | undefined
}

export type MarathonBoxGachaResetRequest = {
  marathonId: string
  boxGachaId: string
}

export type MarathonBoxGachaResetResponse = {
  boxGachaInfo: MarathonBoxGachaInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type MarathonRaidListRequest = {
  marathonId: string
}

export type MarathonRaidListResponse = {
  joinableQuests: MarathonRaidQuestProgress[]
  progressingQuests: MarathonRaidQuestProgress[]
  finishedQuests: MarathonRaidQuestProgress[]
  updateEnableTime: string
  commonResponse: CommonResponse | undefined
}

export type MarathonRaidCheckProgressRequest = {
  marathonId: string
  raidId: string
}

export type MarathonRaidCheckProgressResponse = {
  finished: boolean
  commonResponse: CommonResponse | undefined
}

export type MarathonRaidListHistoryRequest = {
  marathonId: string
}

export type MarathonRaidListHistoryResponse = {
  quests: MarathonRaidQuestProgress[]
  commonResponse: CommonResponse | undefined
}

export type MarathonRaidGetHistoryDetailRequest = {
  marathonId: string
  raidId: string
}

export type MarathonRaidGetHistoryDetailResponse = {
  raidResult: MarathonRaidResult | undefined
  commonResponse: CommonResponse | undefined
}

export type MarathonRaidListRankingRequest = {
  marathonId: string
  raidId: string
}

export type MarathonRaidListRankingResponse = {
  rankedUsers: MarathonRaidRankedUser[]
  selfScore: string
  hostUserName: string
  commonResponse: CommonResponse | undefined
}

export type MarathonRaidStartRequest = {
  marathonId: string
  difficultyNumber: number
  deckNumber: number
  isSkip: boolean
}

export type MarathonRaidJoinRequest = {
  marathonId: string
  raidId: string
  deckNumber: number
  isSkip: boolean
  difficultyNumber: number
}

export type MarathonRaidFinishRequest = {
  marathonId: string
  raidId: string
}

export type MarathonRaidFinishResponse = {
  raidResult: MarathonRaidResult | undefined
  commonResponse: CommonResponse | undefined
}

export type MarathonUseRaidStaminaRecoveryItemRequest = {
  marathonId: string
  amount: number
}

export type MarathonUseRaidStaminaRecoveryItemResponse = {
  userMarathonInfo: UserMarathonInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type MarathonListRaidDeckRequest = {
  marathonId: string
  difficultyNumber: number
  raidId: string
}

export type MarathonListRaidDeckResponse = {
  deckInfos: MarathonDeckInfo[]
  rankedUsers: MarathonRaidSimpleRankedUser[]
  commonResponse: CommonResponse | undefined
}

export type MarathonRaidDeckSaveRequest = {
  marathonId: string
  number: number
  name: string
  userDeckPositions: UserDeckPosition1[]
  difficultyNumber: number
}

export type MarathonRaidDeckSaveResponse = {
  deckInfo: MarathonDeckInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type UserMarathonInfo = {
  currentStamina: number
  staminaUpdatedTime: string
  liveBonusInfos: MarathonLiveBonusInfo[]
  currentRaidStamina: number
  raidStaminaUpdatedTime: string
  ladderProgressInfo: LadderProgressInfo | undefined
  progressingRaidQuestCount: number
  finishedRaidQuestCount: number
  nextRaidHostEnableTime: string
  isRaidHostEnable: boolean
  reachableLadderPanelCount: number
}

export type MarathonQuestDifficultyLevelInfo = {
  marathonQuestDifficultyNumber: number
  cleared: boolean
  rankType: ResultRankType
  plus: number
  opponentInfo: QuestOpponentInfo | undefined
  unlocked: boolean
  highestScore: string
  liveSkipType: LiveSkipType
}

export type MarathonDeckInfo = {
  number: number
  cardDetailInfo: MarathonDeckCardDetailInfo[]
  deckOverallValue: string
}

export type MarathonDeckCardDetailInfo = {
  position: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  accessoryInfos: MarathonAccessoryInfo[]
  photoInfos: MarathonPhotoInfo[]
}

export type MarathonPhotoInfo = {
  photoId: string
  level: number
  abilities: MarathonPhotoAbilityInfo[]
}

export type MarathonRaidResult = {
  isClear: boolean
  score: string
  clearScore: string
  totalScore: string
  elapsedMilliSeconds: number
  rank: number
  joinedUserCount: number
  mvpRewards: RewardResult[]
  rankedUsers: MarathonRaidRankedUser[]
  clearRewards: RewardResult[]
}

export type MarathonRaidSimpleRankedUser = {
  rank: number
  userName: string
  userId: string
}

export type MarathonRaidQuestProgress = {
  raidId: string
  hostUser: MarathonRaidHostUser | undefined
  raidEndTime: string
  joinedUserCount: number
  clearScore: string
  totalScore: string
  difficultyNumber: number
  difficultyLevel: number
  progressType: MarathonRaidProgressType
  liveSkipType: LiveSkipType
}

export type MarketListItemResponse = {
  marketItems: MarketItem[]
  nextResetTime: string
  freeResetRemainCount: number
  resetRemainCount: number
  requiredResetStoneAmount: number
  commonResponse: CommonResponse | undefined
}

export type MarketResetRequest = {
  isFree: boolean
}

export type MarketResetResponse = {
  marketItems: MarketItem[]
  freeResetRemainCount: number
  resetRemainCount: number
  requiredResetStoneAmount: number
  commonResponse: CommonResponse | undefined
}

export type MarketPurchaseRequest = {
  number: number
}

export type MarketPurchaseResponse = {
  marketItems: MarketItem[]
  commonResponse: CommonResponse | undefined
}

export type MasterGetResponse = {
  masterTag: MasterTag | undefined
}

export type MasterFaqResponse = {
  helpCategories: HelpCategory[]
}

export type MasterRuleRequest = {
  ruleType: RuleType
}

export type MasterRuleResponse = {
  text: string
}

export type MasterGetInquiryTemplateRequest = {
  templateType: InquiryTemplateType
}

export type MasterGetInquiryTemplateResponse = {
  text: string
}

export type MasterGetHelpCategoryRequest = {
  helpType: HelpType
}

export type MasterGetHelpCategoryResponse = {
  helpCategories: HelpCategory[]
}

export type MessageListGroupResponse = {
  infos: MessageGroupInfo[]
  commonResponse: CommonResponse | undefined
}

export type MessageTimelineRequest = {
  messageGroupId: string
  timelineId: string
}

export type MessageTimelineResponse = {
  infos: TimelineInfo[]
  hasNext: boolean
  commonResponse: CommonResponse | undefined
}

export type MessageReceiveRequest = {
  messageIds: string[]
}

export type MessageReceiveResponse = {
  commonResponse: CommonResponse | undefined
}

export type MessageSaveRequest = {
  messageGroupId: string
  timelineId: string
  messageDetailId: string
  selectMessageDetailIds: string[]
}

export type MessageSaveResponse = {
  commonResponse: CommonResponse | undefined
}

export type MessageFinishRequest = {
  messageGroupId: string
  timelineId: string
  selectMessageDetailIds: string[]
}

export type MessageFinishResponse = {
  isReliabilityUp: boolean
  commonResponse: CommonResponse | undefined
}

export type MessageSaveHistoryRequest = {
  messageId: string
  selectMessageDetailIds: string[]
}

export type MessageSaveHistoryResponse = {
  commonResponse: CommonResponse | undefined
}

export type MigrationListResponse = {
  apple: boolean
  google: boolean
  facebook: boolean
  twitter: boolean
  password: boolean
  commonResponse: CommonResponse | undefined
}

export type MigrationExecuteRequest = {
  onetimeToken: string
}

export type MigrationExecuteResponse = {
  token: string
}

export type MigrationSetPasswordRequest = {
  password: string
}

export type MigrationSetPasswordResponse = {
  commonResponse: CommonResponse | undefined
}

export type MigrationMigratePasswordRequest = {
  userId: string
  password: string
}

export type MigrationProviderAppleInfo = {
  idToken: string
}

export type MigrationLinkAppleRequest = {
  info: MigrationProviderAppleInfo | undefined
}

export type MigrationMigrateAppleRequest = {
  info: MigrationProviderAppleInfo | undefined
}

export type MigrationProviderGoogleInfo = {
  idToken: string
}

export type MigrationLinkGoogleRequest = {
  info: MigrationProviderGoogleInfo | undefined
}

export type MigrationMigrateGoogleRequest = {
  info: MigrationProviderGoogleInfo | undefined
}

export type RequestTwitterOAuthTokenRequest = {
  bundleId: string
}

export type RequestTwitterOAuthTokenResponse = {
  oauthToken: string
}

export type MigrationProviderTwitterInfo = {
  oauthToken: string
  oauthVerifier: string
}

export type MigrationLinkTwitterRequest = {
  info: MigrationProviderTwitterInfo | undefined
}

export type MigrationMigrateTwitterRequest = {
  info: MigrationProviderTwitterInfo | undefined
}

export type MigrationLinkResponse = {
  success: boolean
  linkedUserId: string
  linkedUser: User2 | undefined
  onetimeToken: string
  commonResponse: CommonResponse | undefined
}

export type MigrationMigrateResponse = {
  success: boolean
  linkedUserId: string
  linkedUser: User2 | undefined
  onetimeToken: string
}

export type MigrationUnlinkRequest = {
  providerType: ProviderType
}

export type MigrationUnlinkResponse = {
  commonResponse: CommonResponse | undefined
}

export type MissionListResponse = {
  userMissions: UserMission[]
  commonResponse: CommonResponse | undefined
}

export type MissionReceiveRequest = {
  missionIds: string[]
}

export type MissionReceiveResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type MissionURLTransitionRequest = {
  url: string
}

export type MissionURLTransitionResponse = {
  commonResponse: CommonResponse | undefined
}

export type MissionEventRequest = {
  eventMissionId: string
}

export type MissionEventResponse = {
  info: EventMissionInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type CheckOption = {
  disableGameAuthToken: boolean
  disableMasterVersion: boolean
  enableResponseCache: boolean
  enableBodyHash: boolean
  disableCheckLoginToday: boolean
  disableCheckMaintenance: boolean
  disableCheckAppVersion: boolean
}

export type ErrorOption = {
  errorCodes: ErrorCode[]
}

export type NoticeListResponse = {
  notices: NoticeInfo[]
  malfunctionNotices: NoticeInfo[]
  prNotices: NoticeInfo[]
  noticeHasNext: boolean
  malfunctionNoticeHasNext: boolean
  prNoticeHasNext: boolean
  roootAssociateToken: string
  commonResponse: CommonResponse | undefined
}

export type NoticeFetchRequest = {
  noticeCategoryType: number
  offset: number
}

export type NoticeFetchResponse = {
  notices: NoticeInfo[]
  hasNext: boolean
  roootAssociateToken: string
  commonResponse: CommonResponse | undefined
}

export type NoticeGetRequest = {
  noticeId: string
}

export type NoticeGetResponse = {
  notice: NoticeInfo | undefined
  roootAssociateToken: string
  commonResponse: CommonResponse | undefined
}

export type PhotoSwitchLockRequest = {
  photoIds: string[]
}

export type PhotoSwitchLockResponse = {
  commonResponse: CommonResponse | undefined
}

export type PhotoDeleteRequest = {
  photoIds: string[]
}

export type PhotoDeleteResponse = {
  rewardResults: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type PhotoEnhanceRequest = {
  photoId: string
  level: number
}

export type PhotoEnhanceResponse = {
  commonResponse: CommonResponse | undefined
}

export type PhotoRerollRequest = {
  photoId: string
}

export type PhotoRerollResponse = {
  commonResponse: CommonResponse | undefined
}

export type PhotoRetouchRequest = {
  photoRecipeId: string
  photoId: string
}

export type PhotoRetouchResponse = {
  commonResponse: CommonResponse | undefined
}

export type PhotoUpdateRequest = {
  photoId: string
  name: string
}

export type PhotoUpdateResponse = {
  commonResponse: CommonResponse | undefined
}

export type PhotoReportResponse = {
  isGift: boolean
  commonResponse: CommonResponse | undefined
}

export type PhotoGetImageUrlRequest = {
  type: PhotoImageRequestType
  assetIds: string[]
}

export type PhotoGetImageUrlResponse = {
  urlList: PhotoImageUrl[]
}

export type PhotoImageUrl = {
  assetId: string
  origUrl: string
  tmbUrl: string
}

export type PhotoCheckShootingRequest = {
  actionType: PhotoShootingActionType
  photoActivityId: string
  photoMusicId: string
  photoStageId: string
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
}

export type PhotoCheckShootingResponse = {
  commonResponse: CommonResponse | undefined
}

export type PhotoCreateShootingsRequest = {
  actionType: PhotoShootingActionType
  photoActivityId: string
  photoMusicId: string
  photoStageId: string
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
  createShootingParams: PhotoCreateShootingParam[]
  manualCount: number
}

export type PhotoCreateShootingParam = {
  photoImageId: string
  itemId: string
  mainCharacterId: string
}

export type PhotoCreateShootingsResponse = {
  photos: UserPhoto[]
  isGift: boolean
  commonResponse: CommonResponse | undefined
}

export type PhotoListShootingResponse = {
  activities: PhotoActivity[]
  musics: PhotoMusic[]
  stages: PhotoStage[]
  commonResponse: CommonResponse | undefined
}

export type PhotoExtendLimitResponse = {
  commonResponse: CommonResponse | undefined
}

export type PhotoSaleRecipeRequest = {
  photoRecipeIds: string[]
}

export type PhotoSaleRecipeResponse = {
  rewardResults: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type PhotoListSpecialShootingRequest = {
  specialPhotoShootingId: string
}

export type PhotoCheckSpecialShootingRequest = {
  actionType: PhotoShootingActionType
  specialPhotoShootingId: string
  musicId: string
  stageId: string
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
}

export type PhotoCheckSpecialShootingResponse = {
  commonResponse: CommonResponse | undefined
}

export type PhotoCreateSpecialShootingsRequest = {
  actionType: PhotoShootingActionType
  specialPhotoShootingId: string
  musicId: string
  stageId: string
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
  createShootingParams: PhotoCreateShootingParam[]
  manualCount: number
}

export type PhotoCreateSpecialShootingsResponse = {
  photos: UserPhoto[]
  isGift: boolean
  snsText: string
  commonResponse: CommonResponse | undefined
}

export type PhotoContestTopRequest = {
  photoContestId: string
}

export type PhotoContestTopResponse = {
  photoContestInfo: PhotoContestInfo | undefined
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse | undefined
}

export type PhotoContestListPhotoRequest = {
  photoContestId: string
}

export type PhotoContestListPhotoResponse = {
  photoInfos: PhotoContestPhotoInfo[]
  commonResponse: CommonResponse | undefined
}

export type PhotoContestRankingRequest = {
  photoContestId: string
}

export type PhotoContestRankingResponse = {
  rankingInfos: PhotoContestRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse | undefined
}

export type PhotoContestReceiveSectionRewardsRequest = {
  photoContestId: string
  sectionRewardIds: string[]
  sectionId: string
}

export type PhotoContestReceiveSectionRewardsResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type PhotoContestCheckShootingRequest = {
  photoContestId: string
  actionType: PhotoShootingActionType
  photoContestActivityId: string
  photoContestQuestMusicId: string
  photoContestQuestStageId: string
  selectedCharacterIds: string[]
  selectedCostumeIds: string[]
  sectionId: string
  selectedHairIds: string[]
}

export type PhotoContestCheckShootingResponse = {
  nextPhotoImageId: string
  commonResponse: CommonResponse | undefined
}

export type PhotoContestSubmitShootingRequest = {
  photoContestId: string
  sectionId: string
  itemId: string
  actionType: PhotoShootingActionType
  photoContestActivityId: string
  photoContestQuestMusicId: string
  photoContestQuestStageId: string
  mainCharacterId: string
  characterIds: string[]
  costumeIds: string[]
  elapsedMilliSeconds: number
  sizeFullPermil: number
  sizeUpperPermil: number
  directionFrontPermil: number
  directionSidePermil: number
  positionPermil: number
  shootingMotionId: string
  selectedCharacterIds: string[]
  selectedCostumeIds: string[]
  hairIds: string[]
  selectedHairIds: string[]
}

export type PhotoContestCreateShootingRequest = {
  photoContestId: string
  assetId: string
  itemId: string
}

export type PhotoContestCreateShootingResponse = {
  photo: UserPhoto | undefined
  isGift: boolean
  commonResponse: CommonResponse | undefined
}

export type PhotoContestSectionBaseGuideInfo = {
  baseEvaluationType: PhotoContestBaseEvaluationType
  baseGuideRankType: PhotoContestBaseGuideRankType
}

export type PhotoContestSectionAdvanceGuideInfo = {
  number: number
  description: string
  isSatisfied: boolean
}

export type ProfileFindUserRequest = {
  userId: string
}

export type ProfileUpdateNameRequest = {
  name: string
}

export type ProfileUpdateNameResponse = {
  commonResponse: CommonResponse | undefined
}

export type ProfileUpdateMessageRequest = {
  message: string
}

export type ProfileUpdateMessageResponse = {
  commonResponse: CommonResponse | undefined
}

export type ProfileUpdateBackgroundRequest = {
  backgroundType: ProfileBackgroundType
  favoriteCardId: string
  favoritePhotoId: string
  favoriteCardDisplayType: CardDisplayType
}

export type ProfileUpdateBackgroundResponse = {
  commonResponse: CommonResponse | undefined
}

export type ProfileUpdateFavoriteCharactersRequest = {
  favoriteCharacterIds: string[]
}

export type ProfileUpdateFavoriteCharactersResponse = {
  commonResponse: CommonResponse | undefined
}

export type ProfileUpdateDecorationRequest = {
  decorationId: string
}

export type ProfileUpdateDecorationResponse = {
  commonResponse: CommonResponse | undefined
}

export type ProfileUpdateEmblemRequest = {
  emblemId: string
}

export type ProfileUpdateEmblemResponse = {
  commonResponse: CommonResponse | undefined
}

export type ProfileUpdateLayoutRequest = {
  layoutType: ProfileLayoutType
  informationType: ProfileInformationType
  colorType: ProfileColorType
}

export type ProfileUpdateLayoutResponse = {
  commonResponse: CommonResponse | undefined
}

export type ProfileClearTwitterMissionResponse = {
  commonResponse: CommonResponse | undefined
}

export type ProfileUpdateBuddyCardRequest = {
  cardId: string
}

export type ProfileUpdateBuddyCardResponse = {
  commonResponse: CommonResponse | undefined
}

export type ProfileUpdateBirthdayRequest = {
  month: number
  day: number
}

export type ProfileUpdateBirthdayResponse = {
  birthdayAdvInfo: BirthdayAdvInfo | undefined
  birthdayRemindInfo: BirthdayRemindInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type PvpTopResponse = {
  topResult: PvpTopResultInfo | undefined
  opponentInfos: PvpOpponentInfo[]
  commonResponse: CommonResponse | undefined
}

export type PvpTopResultInfo = {
  pvpSeason: PvpSeasonInfo | undefined
  pvpRewards: PvpRewardInfo[]
  pvpQuest: LiveBattleQuestInfo | undefined
  userPvpSeason: UserPvpSeasonInfo | undefined
  rank: string
  pvpTicketAvailableAmount: number
}

export type UserPvpSeasonInfo = {
  point: string
  challengeCount: number
}

export type PvpListOpponentRequest = {
  pvpSeasonId: string
}

export type PvpListOpponentResponse = {
  opponentInfos: PvpOpponentInfo[]
  commonResponse: CommonResponse | undefined
}

export type PvpListRankingRequest = {
  pvpSeasonId: string
}

export type PvpListRankingResponse = {
  rankingInfos: LiveRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse | undefined
}

export type PvpStartRequest = {
  pvpSeasonId: string
  opponentId: string
  deckNumber: number
  usePvpTicket: boolean
  isSkip: boolean
}

export type PvpStartResponse = {
  result: LiveResult | undefined
  point: string
  addPoint: string
  rank: number
  musicMasteryRewards: Reward[]
  challengeRewards: RewardResult[]
  profile: AllProfileInfo | undefined
  opponentProfile: AllProfileInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type PvpListAssetRequest = {
  pvpSeasonId: string
  opponentId: string
  deckNumber: number
}

export type PvpListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  opponentCharacterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse | undefined
}

export type QuestListMainResponse = {
  areaGroups: QuestAreaGroupInfo[]
  commonResponse: CommonResponse | undefined
}

export type QuestListDailyResponse = {
  areas: QuestAreaInfo[]
  bulkDailyInfos: QuestBulkDailyInfo[]
  commonResponse: CommonResponse | undefined
}

export type QuestListContestResponse = {
  area: QuestAreaInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type QuestListTowerResponse = {
  area: QuestAreaInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type QuestStartRequest = {
  questId: string
  deckNumber: number
  useDailyTicket: boolean
  isSkip: boolean
  playCount: number
  userBuddyDeckPositions: UserDeckPosition1[]
  buddyDeckName: string
}

export type QuestStartBulkDailyResponse = {
  results: QuestBulkDailyResultInfo[]
  commonResponse: CommonResponse | undefined
}

export type QuestListTowerRankingRequest = {
  areaId: string
}

export type QuestListContestRankingRequest = {
  questId: string
}

export type QuestListContestRankingResponse = {
  selfHighestRank: number
  selfScore: string
  ranks: QuestContestRankInfo[]
  commonResponse: CommonResponse | undefined
}

export type QuestListLatestClearRequest = {
  questId: string
}

export type QuestListLatestClearResponse = {
  clears: QuestClearInfo[]
  commonResponse: CommonResponse | undefined
}

export type QuestListAssetRequest = {
  questId: string
  deckNumber: number
  userBuddyDeckPositions: UserDeckPosition1[]
  buddyDeckName: string
}

export type QuestListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse | undefined
}

export type QuestGetLatestClearLiveResultRequest = {
  questId: string
  userId: string
  isDetail: boolean
}

export type QuestGetLatestClearLiveResultResponse = {
  result: LiveResult | undefined
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse | undefined
}

export type QuestGetRankingLiveResultRequest = {
  questId: string
  userId: string
  isDetail: boolean
}

export type QuestGetRankingLiveResultResponse = {
  result: LiveResult | undefined
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse | undefined
}

export type QuestTowerTopResponse = {
  towerArea: QuestTowerAreaInfo | undefined
  subTowerAreas: QuestTowerAreaInfo[]
  hierarchyNotiInfo: HierarchyNotiInfo | undefined
}

export type QuestTopPvpInfo = {
  rank: number
  remainingChallengeCount: number
  latestPvpSeason: PvpSeasonInfo | undefined
}

export type OutputLiveResultDetailLogRequest = {
  liveResultDetailLogId: string
  cleared: boolean
  score: string
}

export type OutputLiveResultDetailLogResponse = {
  commonResponse: CommonResponse | undefined
}

export type RaceTopRequest = {
  raceId: string
}

export type RaceTopResponse = {
  raceInfo: RaceInfo | undefined
  userRaceInfo: UserRaceInfo | undefined
  liveQuestInfos: RaceLiveQuestInfo[]
  isInitialLogin: boolean
  dokanInfos: DokanInfo[]
  opponentProgressInfos: RaceOpponentProgressInfo[]
  isFirstLoginInDailyAggregationPeriod: boolean
  nextDailyAggregationTime: string
  commonResponse: CommonResponse | undefined
}

export type RaceMovePanelRequest = {
  raceId: string
}

export type RaceMovePanelResponse = {
  rewardResults: RewardResult[]
  userRaceInfo: UserRaceInfo | undefined
  opponentProgressInfos: RaceOpponentProgressInfo[]
  liveQuestInfos: RaceLiveQuestInfo[]
  commonResponse: CommonResponse | undefined
}

export type RaceReceiveActivityLessonRequest = {
  raceId: string
}

export type RaceReceiveActivityLessonResponse = {
  rewards: Reward[]
  userRaceInfo: UserRaceInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type RaceEnhanceLiveBonusRequest = {
  raceId: string
  liveBonusId: string
  level: number
}

export type RaceEnhanceLiveBonusResponse = {
  userRaceInfo: UserRaceInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type RaceResetLiveBonusRequest = {
  raceId: string
}

export type RaceResetLiveBonusResponse = {
  userRaceInfo: UserRaceInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type RaceStartLivePanelQuestRequest = {
  raceId: string
  deckNumber: number
  isSkip: boolean
}

export type RaceStartLivePanelQuestResponse = {
  result: LiveResult | undefined
  userRaceInfo: UserRaceInfo | undefined
  opponentProgressInfos: RaceOpponentProgressInfo[]
  beforeScore: string
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse | undefined
}

export type RaceStartLiveAreaQuestRequest = {
  raceId: string
  raceQuestId: string
  difficultyNumber: number
  deckNumber: number
  isSkip: boolean
}

export type RaceStartLiveAreaQuestResponse = {
  result: LiveResult | undefined
  userRaceInfo: UserRaceInfo | undefined
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse | undefined
}

export type RaceQuestListAssetRequest = {
  raceId: string
  raceQuestId: string
  deckNumber: number
}

export type RaceQuestListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse | undefined
}

export type RaceListDeckRequest = {
  raceId: string
  raceQuestId: string
  difficultyNumber: number
}

export type RaceListDeckResponse = {
  deckInfos: RaceDeckInfo[]
}

export type RaceSaveDeckRequest = {
  raceId: string
  number: number
  name: string
  userDeckPositions: UserDeckPosition1[]
  raceQuestId: string
  difficultyNumber: number
}

export type RaceSaveDeckResponse = {
  deckInfo: RaceDeckInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type RaceResetCardCoolTimeRequest = {
  raceId: string
  cardId: string
}

export type RaceResetCardCoolTimeResponse = {
  userRaceInfo: UserRaceInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type RaceRankingRequest = {
  raceId: string
}

export type RaceRankingResponse = {
  rankingInfos: RaceRankingInfo[]
  selfClearPanelCount: string
  selfRank: number
}

export type RaceAreaInfo = {
  raceAreaId: string
  order: number
  panelCount: number
}

export type RaceRankGradeInfo = {
  id: string
  hierarchyPointFrom: string
  name: string
  topColorCode: string
  bottomColorCode: string
}

export type UserRaceInfo = {
  rankGradeId: string
  rankGradeNumber: number
  currnentRank: number
  currentAreaId: string
  currentPanelNumber: number
  activityLessonProgress: RaceActivityLessonProgress | undefined
  liveBonusInfos: RaceLiveBonusInfo[]
  cardCoolTimeInfos: RaceUserCardCoolTimeInfo[]
  totalClearPanelCount: number
  currentLivePanelScore: string
}

export type RaceActivityLessonProgress = {
  stepRewardRacePoint: number
  stepRewardRaceMedal: number
  lastReceiveTime: string
  maxRewardTime: string
}

export type RaceLiveQuestDifficultyLevelInfo = {
  raceLiveQuestDifficultyNumber: number
  cleared: boolean
  opponentInfo: QuestOpponentInfo | undefined
  highestScore: string
  unlocked: boolean
}

export type RaceDeckInfo = {
  number: number
  cardDetailInfos: RaceDeckCardDetailInfo[]
  deckOverallValue: string
}

export type RaceDeckCardDetailInfo = {
  position: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  accessoryInfos: RaceAccessoryInfo[]
  photoInfos: RacePhotoInfo[]
}

export type RacePhotoInfo = {
  photoId: string
  level: number
  abilities: RacePhotoAbilityInfo[]
}

export type SalaryGetPayslipRequest = {
  yearMonths: number[]
}

export type SalaryGetPayslipResponse = {
  payslips: Payslip[]
  commonResponse: CommonResponse | undefined
}

export type SalaryPayRequest = {
  year: number
  month: number
}

export type SalaryPayResponse = {
  payslip: Payslip | undefined
  commonResponse: CommonResponse | undefined
}

export type ShopListResponse = {
  shops: ShopInfo[]
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse | undefined
}

export type ShopListItemRequest = {
  shopId: string
}

export type ShopListItemResponse = {
  shopItems: ShopItem[]
  commonResponse: CommonResponse | undefined
}

export type ShopGetLoginBonusPackageItemRequest = {
  shopId: string
}

export type ShopGetLoginBonusPackageItemResponse = {
  loginBonusPackageItem: LoginBonusPackageItem | undefined
  commonResponse: CommonResponse | undefined
}

export type ShopGetConditionRewardPackageItemRequest = {
  shopId: string
}

export type ShopGetConditionRewardPackageItemResponse = {
  conditionRewardPackageItem: ConditionRewardPackageItem | undefined
  commonResponse: CommonResponse | undefined
}

export type ShopPurchaseRequest = {
  shopItemId: string
}

export type ShopPurchaseResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type ShopRegisterPurchaseTransactionRequest = {
  shopItemId: string
}

export type ShopRegisterPurchaseTransactionResponse = {
  transactionId: string
  commonResponse: CommonResponse | undefined
}

export type ShopCancelPurchaseTransactionRequest = {
  shopItemId: string
  transactionId: string
}

export type ShopCancelPurchaseTransactionResponse = {
  commonResponse: CommonResponse | undefined
}

export type ShopPurchaseStoneRequest = {
  productId: string
  transactionId: string
  receipt: string
  signature: string
  currencyCode: string
  localizedPricePermyriad: string
}

export type ShopPurchaseStoneResponse = {
  rewards: RewardResult[]
  paidJpy: PaidJpy | undefined
  commonResponse: CommonResponse | undefined
}

export type ShopRecoverPurchaseStoneRequest = {
  productId: string
  receipt: string
  signature: string
  currencyCode: string
  localizedPricePermyriad: string
}

export type ShopRecoverPurchaseStoneResponse = {
  rewards: RewardResult[]
  shopItemName: string
  commonResponse: CommonResponse | undefined
}

export type ShopCheckPurchaseStoneRequest = {
  shopItemId: string
}

export type ShopCheckPurchaseStoneResponse = {
  birthdayNotRegistered: boolean
  exceedMaxStoneAmount: boolean
  exceedPurchaseThreshold: boolean
  exceedAlertThreshold: boolean
  commonResponse: CommonResponse | undefined
}

export type ShopRegisterBirthdayRequest = {
  year: number
  month: number
}

export type ShopRegisterBirthdayResponse = {
  commonResponse: CommonResponse | undefined
}

export type ShopReceiveConditionRewardRequest = {
  shopId: string
  numbers: number[]
}

export type ShopReceiveConditionRewardResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type ShopTryOnRequest = {
  shopItemId: string
  costumeId: string
  hairId: string
}

export type ShopTryOnResponse = {
  commonResponse: CommonResponse | undefined
}

export type StaffTrainRequest = {
  parameterType: ParameterType
}

export type StaffTrainResponse = {
  commonResponse: CommonResponse | undefined
}

export type StoryReadRequest = {
  storyId: string
  isLast: boolean
}

export type StoryReadResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type StoryReleaseEpisodeRequest = {
  storyPartId: string
  chapter: number
  route: number
  episode: number
}

export type StoryReleaseEpisodeResponse = {
  commonResponse: CommonResponse | undefined
}

export type StoryListEventResponse = {
  infos: EventStoryInfo[]
  commonResponse: CommonResponse | undefined
}

export type StoryReadEventRequest = {
  eventStoryId: string
  episode: number
  isLast: boolean
}

export type StoryReadEventResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type StoryListExtraResponse = {
  infos: ExtraStoryPartInfo[]
  commonResponse: CommonResponse | undefined
}

export type StoryReadExtraRequest = {
  extraStoryId: string
  episode: number
  isLast: boolean
}

export type StoryReadExtraResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse | undefined
}

export type StoryReadAnniversaryStoryRequest = {
  anniversaryId: string
  episode: number
}

export type SystemCheckRequest = {
  firebaseIDToken: string
}

export type SystemCheckResponse = {
  maintenanceInfo: MaintenanceInfo | undefined
  reviewInfo: ReviewInfo | undefined
  keepAliveTimeMilliseconds: number
  keepAliveTimeoutMilliseconds: number
  enableCrashlyticsCollection: boolean
  enableUnityLogErrorToLogException: boolean
  enableApiParallelExecutionSuppression: boolean
}

export type MaintenanceInfo = {
  inMaintenance: boolean
  topMessage: string
  bottomMessage: string
  startTime: string
  endTime: string
  isBeforeRelease: boolean
  twitterUrl: string
  mvUrl: string
  gamePvUrl: string
}

export type ReviewInfo = {
  inReview: boolean
  alternativeApiHost: string
}

export type TelephoneReceiveRequest = {
  telephoneIds: string[]
}

export type TelephoneReceiveResponse = {
  commonResponse: CommonResponse | undefined
}

export type TelephoneFinishesRequest = {
  telephoneIds: string[]
}

export type TelephoneFinishesResponse = {
  isReliabilityUp: boolean
  commonResponse: CommonResponse | undefined
}

export type TelephoneCallHistoryRequest = {
  telephoneId: string
}

export type TelephoneCallHistoryResponse = {
  commonResponse: CommonResponse | undefined
}

export type TourTopRequest = {
  tourId: string
}

export type TourTopResponse = {
  tourInfo: TourInfo | undefined
  userTourInfo: UserTourInfo | undefined
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse | undefined
}

export type TourRankingRequest = {
  tourId: string
}

export type TourRankingResponse = {
  rankingInfos: TourRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse | undefined
}

export type TourAreaTopRequest = {
  tourId: string
  isCurrentAreaRestart: boolean
  tourDifficultyNumber: number
}

export type TourAreaTopResponse = {
  areaInfo: TourAreaInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type TourAreaActivityRequest = {
  tourId: string
  step: number
  position: number
}

export type TourAreaActivityResponse = {
  areaInfo: TourAreaInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type TourAreaRefreshRequest = {
  tourId: string
  step: number
  position: number
}

export type TourAreaRefreshResponse = {
  areaInfo: TourAreaInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type TourAreaScoutRequest = {
  tourId: string
  step: number
  position: number
  cardId: string
}

export type TourAreaScoutResponse = {
  areaInfo: TourAreaInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type TourAreaLiveRequest = {
  tourId: string
  step: number
  position: number
  isSkip: boolean
}

export type TourAreaLiveResponse = {
  areaInfo: TourAreaInfo | undefined
  liveInfo: TourLiveInfo | undefined
  resultInfo: TourResultInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type TourAreaLiveBonusRequest = {
  tourId: string
  step: number
  position: number
  liveBonusId: string
}

export type TourAreaLiveBonusResponse = {
  areaInfo: TourAreaInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type TourAreaPvpRequest = {
  tourId: string
  step: number
  position: number
  isSkip: boolean
}

export type TourAreaPvpResponse = {
  areaInfo: TourAreaInfo | undefined
  liveInfo: TourLiveInfo | undefined
  resultInfo: TourResultInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type TourAreaClearRequest = {
  tourId: string
}

export type TourAreaClearResponse = {
  areaInfo: TourAreaInfo | undefined
  areaClearInfo: TourAreaClearInfo | undefined
  resultInfo: TourResultInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type TourAreaNextRequest = {
  tourId: string
}

export type TourAreaNextResponse = {
  areaInfo: TourAreaInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type TourAreaRetireRequest = {
  tourId: string
}

export type TourAreaRetireResponse = {
  areaInfo: TourAreaInfo | undefined
  resultInfo: TourResultInfo | undefined
  commonResponse: CommonResponse | undefined
}

export type TourDeckSaveRequest = {
  tourId: string
  deckInfos: TourDeckInfo[]
}

export type TourDeckSaveResponse = {
  commonResponse: CommonResponse | undefined
}

export type TourInfo = {
  id: string
  name: string
  type: TourType
  enemyType: TourEnemyType
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  areaStaminaRecoveryMinutes: number
  initialAreaStamina: number
  initialLife: number
  eventStoryInfo: EventStoryInfo | undefined
  eventMissionInfo: EventMissionInfo | undefined
  eventExchangeBoothInfo: EventExchangeBoothInfo | undefined
  noticeInfo: NoticeInfo | undefined
  tourRankingRewardInfos: TourRankingRewardInfo[]
  tourDifficultyInfos: TourDifficultyInfo[]
}

export type UserTourInfo = {
  areaStamina: number
  staminaUpdatedTime: string
  highestScore: string
  highestScoreTime: string
  mostProgressArea: number
  mostProgressAreaName: string
  life: number
  currentScore: string
  currentArea: number
  currentAreaName: string
  rank: string
  isRetired: boolean
  isAreaCleared: boolean
  isLastArea: boolean
  clearedDifficultyNumber: number
  currentDifficultyNumber: number
}

export type TourDeckInfo = {
  position: number
  cardId: string
  scoutId: string
}

export type TourAreaInfo = {
  areaStamina: number
  staminaUpdatedTime: string
  highestScore: string
  highestScoreTime: string
  mostProgressArea: number
  mostProgressAreaName: string
  life: number
  score: string
  area: number
  areaName: string
  step: number
  position: number
  areaScore: string
  isAreaCleared: boolean
  isRetired: boolean
  stepInfos: TourStepInfo[]
  areaRewards: Reward[]
  liveBonusInfos: TourLiveBonusInfo[]
  cardInfos: TourCardInfo[]
  scoutInfos: TourScoutInfo[]
  deckInfos: TourDeckInfo[]
  isLastArea: boolean
  tourType: TourType
  tourAreaType: TourAreaType
}

export type TourStepInfo = {
  step: number
  positionInfos: TourPositionInfo[]
}

export type TourPositionInfo = {
  position: number
  type: TourStepType
  activityInfo: TourEffectActivity | undefined
  refreshInfo: TourEffectRefresh | undefined
  scoutInfo: TourEffectScout | undefined
  liveInfo: TourEffectLive | undefined
  pvpInfo: TourEffectPvp | undefined
  liveBonusInfos: TourLiveBonusInfo[]
  isPassed: boolean
}

export type TourEffectScout = {
  scoutInfos: TourScoutInfo[]
}

export type TourOpponentInfo = {
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type TourCardInfo = {
  cardId: string
  staminaPermil: number
}

export type TourScoutInfo = {
  scoutId: string
  cardId: string
  staminaPermil: number
  isRival: boolean
  level: number
  rarity: number
  dance: string
  vocal: string
  visual: string
  stamina: string
  mental: string
  technique: string
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
}

export type TourLiveInfo = {
  result: LiveResult | undefined
  rewards: Reward[]
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
}

export type TourAreaClearInfo = {
  areaRewards: Reward[]
  firstClearRewards: Reward[]
  score: string
  areaScore: string
  rank: string
  isBest: boolean
}

export type TourResultInfo = {
  score: string
  rank: string
  isBest: boolean
}

export type TutorialInitRequest = {
  name: string
}

export type TutorialInitResponse = {
  commonResponse: CommonResponse | undefined
}

export type TutorialProgressRequest = {
  type: TutorialType
  step: number
}

export type TutorialProgressResponse = {
  commonResponse: CommonResponse | undefined
}

export type TutorialStartQuestRequest = {
  questId: string
}

export type TutorialStartQuestResponse = {
  result: LiveResult | undefined
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse | undefined
}

export type TutorialActivityStartFanEventResponse = {
  progress: FanEventProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type TutorialActivityReceivePromotionRewardResponse = {
  rewards: Reward[]
  activityLevelProgress: ActivityLevelProgress | undefined
  commonResponse: CommonResponse | undefined
}

export type TutorialActivityReceiveLessonRewardResponse = {
  rewards: Reward[]
  commonResponse: CommonResponse | undefined
}

export type TutorialPhotoCreateShootingRequest = {
  mainCharacterId: string
  photoImageId: string
}

export type TutorialPhotoCreateShootingResponse = {
  photo: UserPhoto | undefined
  isGift: boolean
  commonResponse: CommonResponse | undefined
}

export type TutorialSkipResponse = {
  commonResponse: CommonResponse | undefined
}

export type UserGetResponse = {
  user: User2 | undefined
  items: UserItem[]
  cards: UserCard[]
  characters: UserCharacter[]
  costumes: UserCostume[]
  accessories: UserAccessory[]
  photos: UserPhoto[]
  decks: UserDeck[]
  deckPositions: UserDeckPosition1[]
  stories: UserStory[]
  points: UserPoint[]
  staffs: UserStaff[]
  messages: UserMessage[]
  telephones: UserTelephone[]
  missions: UserMission[]
  profile: UserProfile | undefined
  emblems: UserEmblem[]
  characterMusics: UserCharacterMusic[]
  balance: UserBalance | undefined
  totalCount: UserTotalCount | undefined
  areas: UserArea[]
  quests: UserQuest[]
  gachaButtons: UserGachaButton[]
  homeTalks: UserHomeTalk[]
  photoReport: UserPhotoReport | undefined
  cardSupports: UserCardSupport[]
  messageSchedules: UserMessageSchedule[]
  notifications: UserNotification[]
  hierarchy: UserHierarchy | undefined
  tutorials: UserTutorial[]
  homePositions: UserHomePosition[]
  musics: UserMusic[]
  decorations: UserDecoration[]
  photoRecipes: UserPhotoRecipe[]
  buddy: UserBuddy | undefined
  invite: UserInvite | undefined
  hairs: UserHair[]
  activityFanEventProgress: UserActivityFanEventProgress | undefined
  loves: UserLove[]
  userPublic: UserPublic | undefined
}

export type UserUpdateRequest = {
  name: string
}

export type UserUpdateResponse = {
  commonResponse: CommonResponse | undefined
}

export type UserProvideExternalRewardRequest = {
  externalRewardId: string
}

export type UserProvideExternalRewardResponse = {
  commonResponse: CommonResponse | undefined
}

