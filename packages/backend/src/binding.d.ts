declare global {
  const KV: KVNamespace
  const ADMIN_TOKEN: string | undefined
  const DB_PREFIX: string | undefined
  interface CacheStorage {
    default: CacheStorage
  }
}

export {}
