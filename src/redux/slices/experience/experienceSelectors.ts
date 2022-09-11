import { IRootState } from 'types'

export const selectExperience = (state: IRootState) => state?.experience ?? []
