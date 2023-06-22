import { IRootState } from 'types'

export const selectExpertise = (state: IRootState) => state?.expertise ?? []