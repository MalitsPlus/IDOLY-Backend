/**
 * Describes a music chart.
 * @member id Music chart id
 * @member desc Description
 * @member beats Beat count of the chart
 * @member chart an 5-element array describing A or SP skill points.
 */
export type MusicChart = {
  id: string
  desc: string
  beats: number
  /**
   * Positive value for A skill;
   * negative value for SP skill at its absolute value
   */
  chart: Record<1 | 2 | 3 | 4 | 5, number[]>
}
