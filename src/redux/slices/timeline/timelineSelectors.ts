import { IRootState } from 'types'

export const selectTimeline = (state: IRootState) => state?.timeline ?? {}

export const selectTimelineYears = (state: IRootState) => {
  const timeline = selectTimeline(state)

  return Object.keys(timeline).map(year => Number.parseInt(year, 10))
}

export const selectTimelineActiveYear = (
  state: IRootState,
  activeYear: number
) => {
  const timeline = selectTimeline(state)

  return timeline[activeYear]
}
