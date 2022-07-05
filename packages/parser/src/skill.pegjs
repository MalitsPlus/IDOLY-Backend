EffectDescription
  = "ef" "-" e:EffectWithTarget {
    return e
}

File = EffectItem*

// "ef-{type}-{value}-target-{user/chart}-{user.value}-{length?}"
EffectItem
  = desc:EffectDescription "\n"? { return desc }

EffectWithTarget =
  obj:EffectTargetChart { return obj }
  / obj:EffectTargetCharacterWithLen { return obj }
  / obj:EffectTargetCharacterWithoutLen { return obj }

EffectTargetChart =
  effect:EffectChart "-" target:TargetChart { return {effect, target} }

EffectTargetCharacterWithLen =
  effect:EffectCharacterWithLength "-" target:TargetCharacterWithLength "-" len:Number { return {effect: {...effect, len}, target} }

EffectTargetCharacterWithoutLen =
  effect:EffectCharacterWithoutLength "-" target:TargetCharacterWithoutLength { return {effect, target} }

EffectChart = EffectScoreGet / EffectScoreGetByStaEff / EffectScoreGetByTrigExtra

EffectCharacterWithLength = EffectCharacterLengthLevel / EffectCharacterLengthOnly
EffectCharacterWithoutLength = EffectCharacterLevelOnly / EffectCharacterSimple

EffectCharacterLengthLevel = typ:EffectCharacterLengthLevelTyp "-" lvl:Number  { return {typ, lvl} }
EffectCharacterLevelOnly = typ:EffectCharacterLevelOnlyTyp "-" lvl:Number { return {typ, lvl} }
EffectCharacterLengthOnly = typ:EffectCharacterLengthOnlyTyp { return {typ} }
EffectCharacterSimple = typ:EffectCharacterSimpleTyp { return {typ} }

// num (level) - num (length)
EffectCharacterLengthLevelTyp
  = "vocal_up" / "dance_up" / "visual_up"
  / "skill_score_up" / "active_skill_score_up" / "passive_skill_score_up" / "special_skill_score_up"
  / "score_up" / "beat_score_up" / "combo_score_up"
  / "skill_success_rate_up" / "tension_up"
  / "critical_rate_up" / "critical_bonus_permil_up"
  / "stamina_consumption_reduction" / "stamina_consumption_increase" / "stamina_continuous_recovery"
  / "audience_amount_reduction" / "audience_amount_increase"
  / "weakness_effect_prevention"
  / "vocal_down" / "dance_down" / "visual_down"
  / "visual_boost"
// num (level) - no num
EffectCharacterLevelOnlyTyp
  = "fix_stamina_recovery" / "target_stamina_recovery"
  / "cool_time_reduction" / "stamina_consumption"
  / "strength_effect_count_increase" / "strength_effect_value_increase" 
// no num - num (length)
EffectCharacterLengthOnlyTyp = "skill_impossible" / "combo_continuation"
// non-non dayo!
EffectCharacterSimpleTyp
  = "weakness_effect_recovery"
  / "weakness_effect_inversion"
  / "strength_effect_migration_before_special_skill"
  / "strength_effect_migration_before_active_skill"
  / "strength_effect_erasing_all"

EffectScoreGet
  = typ:EffectScoreGetTyp "-" typ2:Number {
    return {typ, typ2}
  }

EffectScoreGetByStaEff
  = typ:"score_get_by_status_effect_type_grade" "-" prt:EffectCharacterLengthLevelTyp "-" lvl:Number { return {typ, prt, lvl} }

// "score_get_by_trigger-9000-tg-combo-80-16000"
EffectScoreGetByTrigExtra
  = typ:"score_get_by_trigger" "-" lvl:Number "-" cond:TriggerCond "-" condLvl:Number {
    return {typ, lvl, cond, condLvl}
  }

TriggerCond
  = "tg" "-" typ:"combo" "-" len:Number {
    return {typ, len}
  }

EffectScoreGetTyp
  = "score_get_by_less_fan_amount" / "score_get_by_more_fan_engage"
  / "score_get_by_more_combo_count" / "score_get_by_skill_activation_count" / "score_get_by_strength_effect_count"
  / "score_get_by_more_stamina_use" / "score_get_by_more_stamina" / "score_get_by_less_stamina"
  / "score_get_and_stamina_consumption_by_more_stamina_use"
  / "score_get"

TargetChart = typ:"chart_dependence" {
  return {typ}
}

TargetCharacter
  = TargetCharacterSpecial / TargetCharacterWithProps
  / TargetCharacterWithType / TargetCharacterTrigger
  / TargetCharacterWithStatus

TargetCharacterWithLength
  = chr:TargetCharacter x:("-" cnt:Number &("-" Number))? {
    return {...chr, cnt: x?.[1] ?? 1}
  }

TargetCharacterWithoutLength
  = chr:TargetCharacter x:("-" cnt:Number)? {
    return {...chr, cnt: x?.[1] ?? 1}
  }

TargetCharacterSpecial
  = "target" "-" typ:TargetCharacterSpecialType {
    return {typ}
  }
  
TargetCharacterSpecialType
  = "self" / "all" / "center" / "neighbor"
  / "opponent_same_position" / "opponent_center"

// "target-stamina_lower-1"
TargetCharacterWithProps
  = "target" "-" typ:TargetChPropsType {
    return {typ}
  }

TargetChPropsType
  = "vocal_higher" / "dance_higher" / "visual_higher" / "stamina_higher"
  / "vocal" / "dance" / "visual"
  / "position_attribute_vocal" / "position_attribute_visual"
  / "stamina_lower"

// "target-character_type-1(-2)"
TargetCharacterWithType
  = "target" "-" typ:TargetCharacterWithTypeType "-" typ2:Number {
    return {typ, typ2}
  }

TargetCharacterWithTypeType
  = "character_type" / "opponent_character_type"

// Check sk-ktn-02-casl-00-1 (出発の時)
TargetCharacterTrigger
  = "target" "-" typ:"trigger" {
    return {typ}
  }

// "target-status-dance_up(-1)"
TargetCharacterWithStatus
  = "target" "-" typ:"status" "-" typ2:EffectCharacterLengthLevelTyp {
    return {typ, typ2}
  }

Number = 
  [0-9]+ {
    return parseInt(text())
}