export type OctoData = {
  assetBundleList: AssetBundle[]
}

type AssetBundle = {
  crc: number
  generation: string
  id: number
  md5: string
  name: string
  objectName: string
  size: number
  state: string
  type: string
  uploadVersionId: number
}
