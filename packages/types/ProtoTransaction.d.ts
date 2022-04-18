// Generated from ProtoTransaction.cs

import {
  HomePositionType,
  MessageStatusType,
  MissionStatusType,
  NotificationType,
  ParameterType,
  PhotoImageType,
  PointType,
  ProfileBackgroundType,
  ProfileLayoutType,
  ResourceType,
  ResultRankType,
  StoryStatusType,
  TelephoneStatusType,
  TutorialType,
} from './ProtoEnum'

export type Payslip = {
  // ProtoMember(1)
  managerLevel: number
  // ProtoMember(2)
  loginDays: number
  // ProtoMember(3)
  absenceDays: number
  // ProtoMember(4)
  basicSalary: number
  // ProtoMember(5)
  activityHours: number
  // ProtoMember(6)
  activityBonus: number
  // ProtoMember(7)
  gvgHighestPoint: number
  // ProtoMember(8)
  gvgHighestPointBonus: number
  // ProtoMember(9)
  totalCardLevel: number
  // ProtoMember(10)
  cardLevelBonus: number
  // ProtoMember(11)
  totalFanAmount: number
  // ProtoMember(12)
  fanAmountBonus: number
  // ProtoMember(13)
  totalFanEventScore: number
  // ProtoMember(14)
  fanEventScoreBonus: number
  // ProtoMember(15)
  totalContestScore: number
  // ProtoMember(16)
  contestScoreBonus: number
  // ProtoMember(17)
  loginTimes: number[]
  // ProtoMember(18)
  mostGrownCharacterId: string
  // ProtoMember(19)
  hierarchyDetailGradeId: string
  // ProtoMember(20)
  hierarchyPoint: number
  // ProtoMember(21)
  hierarchyGradeBonus: number
  // ProtoMember(22)
  hierarchyRank: number
  // ProtoMember(23)
  year: number
  // ProtoMember(24)
  month: number
}
export type User = {
  // ProtoMember(1)
  name: string
  // ProtoMember(2)
  managerExp: number
  // ProtoMember(3)
  deckSequence: number
  // ProtoMember(4)
  guildId: string
  // ProtoMember(5)
  lastGuildCheckTime: number
  // ProtoMember(6)
  divisionId: string
  // ProtoMember(7)
  firstDivisionId: string
  // ProtoMember(8)
  emblemId: string
  // ProtoMember(9)
  deckMaxOverallValue: number
  // ProtoMember(10)
  lastCreatedForumThreadDatetime: number
  // ProtoMember(11)
  gameStartTime: number
  // ProtoMember(12)
  lastLoginTime: number
  // ProtoMember(13)
  cardSupportLevel: number
  // ProtoMember(14)
  cardSupportReleaseCount: number
  // ProtoMember(15)
  nextPhotoImageId: string
  // ProtoMember(16)
  divisionMovedTime: number
  // ProtoMember(17)
  isReviewed: boolean
  // ProtoMember(18)
  questMainAreaLastClearCharacterIds: string[]
  // ProtoMember(19)
  highestSalary: number
  // ProtoMember(20)
  tutorialClearedTime: number
  // ProtoMember(100)
  managerLevel: number
  // ProtoMember(101)
  cardSupportMaxNumber: number
}
export type UserAccessory = {
  // ProtoMember(1)
  accessoryId: string
  // ProtoMember(2)
  amount: number
}
export type UserArea = {
  // ProtoMember(1)
  areaId: string
  // ProtoMember(2)
  clearQuestCount: number
  // ProtoMember(3)
  dailyClearCount: number
  // ProtoMember(4)
  lastClearedTime: number
}
export type UserCard = {
  // ProtoMember(1)
  cardId: string
  // ProtoMember(2)
  totalExp: number
  // ProtoMember(3)
  rarityTotalExp: number
  // ProtoMember(4)
  skillLevel1: number
  // ProtoMember(5)
  skillLevel2: number
  // ProtoMember(6)
  skillLevel3: number
  // ProtoMember(7)
  liveAbilityLevel: number
  // ProtoMember(8)
  activityAbilityLevel: number
  // ProtoMember(9)
  obtainedTime: number
  // ProtoMember(10)
  supported: boolean
  // ProtoMember(11)
  lastEnhanceTime: number
  // ProtoMember(100)
  level: number
  // ProtoMember(101)
  rarity: number
  // ProtoMember(102)
  vocal: number
  // ProtoMember(103)
  dance: number
  // ProtoMember(104)
  visual: number
  // ProtoMember(105)
  stamina: number
  // ProtoMember(106)
  mental: number
  // ProtoMember(107)
  technique: number
  // ProtoMember(108)
  skillId1: string
  // ProtoMember(109)
  skillId2: string
  // ProtoMember(110)
  skillId3: string
  // ProtoMember(111)
  liveAbilityId: string
  // ProtoMember(112)
  activityAbilityId: string
  // ProtoMember(113)
  photoEquipableCount: number
  // ProtoMember(114)
  baseLevel: number
  // ProtoMember(115)
  baseVocal: number
  // ProtoMember(116)
  baseDance: number
  // ProtoMember(117)
  baseVisual: number
  // ProtoMember(118)
  baseStamina: number
  // ProtoMember(119)
  baseSkillLevel1: number
  // ProtoMember(120)
  baseSkillLevel2: number
  // ProtoMember(121)
  baseSkillLevel3: number
  // ProtoMember(122)
  baseLiveAbilityLevel: number
  // ProtoMember(123)
  baseActivityAbilityLevel: number
  // ProtoMember(124)
  baseSkillId1: string
  // ProtoMember(125)
  baseSkillId2: string
  // ProtoMember(126)
  baseSkillId3: string
  // ProtoMember(127)
  baseLiveAbilityId: string
  // ProtoMember(128)
  baseActivityAbilityId: string
  // ProtoMember(129)
  basePhotoEquipableCount: number
}
export type UserCharacter = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  activityExp: number
  // ProtoMember(3)
  activityStamina: number
  // ProtoMember(4)
  lightFanAmount: number
  // ProtoMember(5)
  middleFanAmount: number
  // ProtoMember(6)
  heavyFanAmount: number
  // ProtoMember(7)
  favoriteCostumeId: string
  // ProtoMember(8)
  staminaUpdatedTime: number
  // ProtoMember(9)
  inActivity: boolean
  // ProtoMember(10)
  reliability: number
  // ProtoMember(11)
  liveHighestScore: number
  // ProtoMember(12)
  characterOnlyPhotoAmount: number
  // ProtoMember(13)
  liveCostumeId: string
  // ProtoMember(100)
  activityLevel: number
  // ProtoMember(101)
  audienceCandidateAmount: number
}
export type UserCharacterMusic = {
  // ProtoMember(1)
  characterId: string
  // ProtoMember(2)
  musicId: string
  // ProtoMember(3)
  masteryPoint: number
  // ProtoMember(100)
  masteryLevel: number
}
export type UserCostume = {
  // ProtoMember(1)
  costumeId: string
  // ProtoMember(2)
  checked_: boolean
  // ProtoMember(3)
  obtainedTime: number
}
export type UserDecoration = {
  // ProtoMember(1)
  decorationId: string
}
export type UserEmblem = {
  // ProtoMember(1)
  emblemId: string
}
export type UserHierarchy = {
  // ProtoMember(1)
  bestDetailGradeId: string
  // ProtoMember(2)
  currentFixedPoint: number
  // ProtoMember(3)
  currentVariablePoint: number
  // ProtoMember(4)
  bestTotalPoint: number
  // ProtoMember(5)
  currentPointUpdateDatetime: number
  // ProtoMember(6)
  receivedRewardIds: string[]
  // ProtoMember(7)
  receivedDivisionRewardIds: string[]
}
export type UserHomePosition = {
  // ProtoMember(1)
  homePositionType: HomePositionType
  // ProtoMember(2)
  characterId: string
}
export type UserHomeTalk = {
  // ProtoMember(1)
  homeTalkId: string
}
export type UserItem = {
  // ProtoMember(1)
  itemId: string
  // ProtoMember(2)
  expiredTime: number
  // ProtoMember(3)
  amount: number
}
export type UserLoginBonus = {
  // ProtoMember(1)
  loginBonusId: string
  // ProtoMember(2)
  lastLoginTime: number
  // ProtoMember(3)
  loginCount: number
  // ProtoMember(4)
  receiveCount: number
  // ProtoMember(5)
  loginBonusTextId: string
}
export type UserMessage = {
  // ProtoMember(1)
  messageId: string
  // ProtoMember(2)
  messageStatusType: MessageStatusType
  // ProtoMember(3)
  selectMessageDetailIds: string[]
  // ProtoMember(4)
  arrivedTime: number
}
export type UserMessageSchedule = {
  // ProtoMember(1)
  messageId: string
  // ProtoMember(2)
  scheduledTime: number
}
export type UserMission = {
  // ProtoMember(1)
  missionId: string
  // ProtoMember(2)
  currentThreshold: number
  // ProtoMember(3)
  progress: number
  // ProtoMember(4)
  statusType: MissionStatusType
  // ProtoMember(5)
  lastUpdateTime: number
}
export type UserMusic = {
  // ProtoMember(1)
  musicId: string
}
export type UserPhoto = {
  // ProtoMember(1)
  photoId: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  imageType: PhotoImageType
  // ProtoMember(4)
  characterIds: string[]
  // ProtoMember(5)
  name: string
  // ProtoMember(6)
  rarity: number
  // ProtoMember(7)
  placeName: string
  // ProtoMember(8)
  eventName: string
  // ProtoMember(9)
  locked: boolean
  // ProtoMember(10)
  level: number
  // ProtoMember(11)
  rerollable: boolean
  // ProtoMember(12)
  abilities: UserPhotoAbility[]
  // ProtoMember(13)
  shootingTime: number
  // ProtoMember(14)
  focusCharacterId: string
}
export type UserPhotoAbility = {
  // ProtoMember(1)
  photoAbilityId: string
  // ProtoMember(2)
  effectValue: number
  // ProtoMember(3)
  missionId: string
  // ProtoMember(4)
  grade: number
  // ProtoMember(5)
  isAvailable: boolean
}
export type UserPhotoGift = {
  // ProtoMember(1)
  photoId: string
  // ProtoMember(2)
  assetId: string
  // ProtoMember(3)
  imageType: PhotoImageType
  // ProtoMember(4)
  characterIds: string[]
  // ProtoMember(5)
  name: string
  // ProtoMember(6)
  rarity: number
  // ProtoMember(7)
  placeName: string
  // ProtoMember(8)
  eventName: string
  // ProtoMember(9)
  level: number
  // ProtoMember(10)
  abilities: UserPhotoGiftAbility[]
  // ProtoMember(11)
  shootingTime: number
  // ProtoMember(12)
  focusCharacterId: string
}
export type UserPhotoGiftAbility = {
  // ProtoMember(1)
  photoAbilityId: string
  // ProtoMember(2)
  effectValue: number
  // ProtoMember(3)
  missionId: string
  // ProtoMember(4)
  grade: number
}
export type UserProfile = {
  // ProtoMember(1)
  favoriteCardId: string
  // ProtoMember(2)
  favoritePhotoId: string
  // ProtoMember(3)
  favoriteCharacterIds: string[]
  // ProtoMember(4)
  message: string
  // ProtoMember(5)
  birthMonth: number
  // ProtoMember(6)
  birthDay: number
  // ProtoMember(7)
  backgroundType: ProfileBackgroundType
  // ProtoMember(8)
  layoutType: ProfileLayoutType
  // ProtoMember(9)
  twitterInfo: TwitterInfo
  // ProtoMember(10)
  decorationId: string
}
export type UserQuest = {
  // ProtoMember(1)
  questId: string
  // ProtoMember(2)
  dailyClearCount: number
  // ProtoMember(3)
  lastClearedTime: number
  // ProtoMember(4)
  highestScore: number
  // ProtoMember(5)
  highestScoreTime: number
  // ProtoMember(6)
  highestRank: number
  // ProtoMember(7)
  currentRankingHighestScore: number
  // ProtoMember(8)
  currentRankingHighestScoreTime: number
  // ProtoMember(9)
  currentRankingHighestRank: number
  // ProtoMember(100)
  highestScoreRank: ResultRankType
}
export type UserStory = {
  // ProtoMember(1)
  storyId: string
  // ProtoMember(2)
  statusType: StoryStatusType
  // ProtoMember(3)
  isInvalid: boolean
}
export type UserTelephone = {
  // ProtoMember(1)
  telephoneId: string
  // ProtoMember(2)
  unlockedTime: number
  // ProtoMember(3)
  scheduledTime: number
  // ProtoMember(4)
  telephoneStatusType: TelephoneStatusType
}
export type ConsumptionResult = {
  // ProtoMember(1)
  resourceType: ResourceType
  // ProtoMember(2)
  resourceId: string
  // ProtoMember(3)
  amount: number
  // ProtoMember(4)
  beforeAmount: number
  // ProtoMember(5)
  afterAmount: number
}
export type MasterTag = {
  // ProtoMember(1)
  version: string
  // ProtoMember(2)
  masterTagPacks: MasterTagPack[]
}
export type MasterTagPack = {
  // ProtoMember(1)
  type: string
  // ProtoMember(2)
  fileName: string
  // ProtoMember(3)
  fileSize: number
  // ProtoMember(4)
  cryptoKey: string
  // ProtoMember(5)
  downloadUrl: string
}
export type Reward = {
  // ProtoMember(1)
  resourceType: ResourceType
  // ProtoMember(2)
  resourceId: string
  // ProtoMember(3)
  amount: number
}
export type RewardResult = {
  // ProtoMember(1)
  resourceType: ResourceType
  // ProtoMember(2)
  resourceId: string
  // ProtoMember(3)
  amount: number
  // ProtoMember(4)
  beforeAmount: number
  // ProtoMember(5)
  afterAmount: number
  // ProtoMember(6)
  isNew: boolean
  // ProtoMember(7)
  isTruncate: boolean
  // ProtoMember(8)
  isGift: boolean
  // ProtoMember(9)
  duplicateRewardResults: RewardResult[]
  // ProtoMember(10)
  additionalGifts: Reward[]
}
export type UserBalance = {
  // ProtoMember(1)
  freeBalance: number
  // ProtoMember(2)
  paidBalance: number
}
export type UserCardSupport = {
  // ProtoMember(1)
  number: number
  // ProtoMember(2)
  cardId: string
  // ProtoMember(4)
  removableTime: number
}
export type UserDeck = {
  // ProtoMember(1)
  number: number
  // ProtoMember(2)
  name: string
}
export type UserDeckPosition = {
  // ProtoMember(1)
  number: number
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
export type UserGachaButton = {
  // ProtoMember(1)
  gachaButtonId: string
  // ProtoMember(2)
  drawTime: number
  // ProtoMember(3)
  todayCount: number
  // ProtoMember(4)
  totalCount: number
}
export type UserGift = {
  // ProtoMember(1)
  giftId: string
  // ProtoMember(2)
  resourceType: ResourceType
  // ProtoMember(3)
  resourceId: string
  // ProtoMember(4)
  amount: number
  // ProtoMember(5)
  message: string
  // ProtoMember(6)
  postedTime: number
  // ProtoMember(7)
  limitTime: number
  // ProtoMember(8)
  photoGift: PhotoGift
}
export type PhotoGift = {
  // ProtoMember(1)
  name: string
}
export type UserGiftHistory = {
  // ProtoMember(1)
  giftId: string
  // ProtoMember(2)
  resourceType: ResourceType
  // ProtoMember(3)
  resourceId: string
  // ProtoMember(4)
  amount: number
  // ProtoMember(5)
  message: string
  // ProtoMember(6)
  postedTime: number
  // ProtoMember(7)
  receivedTime: number
  // ProtoMember(8)
  photoGift: PhotoGiftHistory
}
export type PhotoGiftHistory = {
  // ProtoMember(1)
  name: string
}
export type UserNotification = {
  // ProtoMember(1)
  notificationType: NotificationType
  // ProtoMember(2)
  valid: boolean
  // ProtoMember(3)
  startTime: number
}
export type UserPhotoReport = {
  // ProtoMember(1)
  photos: UserPhoto[]
  // ProtoMember(2)
  received: boolean
}
export type UserPoint = {
  // ProtoMember(1)
  pointType: PointType
  // ProtoMember(2)
  amount: number
}
export type TwitterInfo = {
  // ProtoMember(1)
  twitterUserID: string
  // ProtoMember(2)
  twitterScreenName: string
}
export type UserPublic = {
  // ProtoMember(1)
  serverUserId: string
  // ProtoMember(2)
  publicUserId: string
}
export type UserStaff = {
  // ProtoMember(1)
  parameterType: ParameterType
  // ProtoMember(2)
  level: number
}
export type UserTotalCount = {
  // ProtoMember(1)
  loginCount: number
  // ProtoMember(3)
  marketExchangeCount: number
  // ProtoMember(4)
  photoShootCount: number
  // ProtoMember(5)
  staffTrainCount: number
  // ProtoMember(6)
  pointGoldAmount: number
  // ProtoMember(7)
  forumLikeCount: number
  // ProtoMember(8)
  forumCreateReplyCount: number
  // ProtoMember(9)
  activityFanEventCount: number
  // ProtoMember(10)
  activityPromotionMinutes: number
  // ProtoMember(11)
  activityRefreshCount: number
  // ProtoMember(12)
  guildCheckInCount: number
}
export type UserTutorial = {
  // ProtoMember(1)
  tutorialType: TutorialType
  // ProtoMember(2)
  step: number
}
