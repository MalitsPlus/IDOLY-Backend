import type { APIMapping } from 'hoshimi-types/'
import { dbGet } from '@utils/dbGet.ts'
import apiWrapper from '@utils/apiWrapper.ts'
import pick from 'lodash/pick'
import createErrStatus from '@utils/createErrStatus.ts'

const responder: APIMapping['Photo/AIO'] = async ({ id }) => {
  const photo = (
    await dbGet('PhotoAllInOne', {
      id: {
        $eq: id,
      },
    })
  )?.[0]
  if (!photo) {
    return createErrStatus('Not found', 404)
  }

  const photoAbilities = await Promise.all(
    photo.abilities
      .map((x) => x.photoAbilityId)
      .map((x) =>
        dbGet('PhotoAbility', {
          id: {
            $eq: x,
          },
        }).then((x) => x?.[0])
      )
  )

  return {
    ...pick(photo, ['id', 'name', 'assetId', 'rarity']),
    abilities: photoAbilities.map((x, index) => ({
      ...pick(x, [
        'name',
        'description',
        'abilityType',
        'photoAbilityLevels',
        'skillId',
      ]),
      abilityEffectValue: photo.abilities[index].effectValue,
    })),
  }
}

export const handler = apiWrapper(responder)
