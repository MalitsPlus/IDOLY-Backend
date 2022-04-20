import type { Card, CardLevel, Character } from './ProtoMaster'

export type AcceptableKey = 'Card' | 'CardLevel' | 'Character'

export type TypeMapping = {
  CardLevel: CardLevel[]
  Card: Card[]
  Character: Character[]
}
