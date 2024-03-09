import { Dispatch, SetStateAction } from 'react'

import {
  TimelineYearsBtn,
  TimelineYearsWrapper
} from 'styles/components/timeline.styles'

import { TIMELINE } from 'constants/timeline.constants'

interface IProps {
  activeYear: string
  setActiveYear: Dispatch<SetStateAction<string>>
}

export const TimelineYears = ({ activeYear, setActiveYear }: IProps) => (
  <TimelineYearsWrapper>
    {Object.keys(TIMELINE).map(year => (
      <TimelineYearsBtn
        key={`timeline-${year}`}
        onClick={() => setActiveYear(year)}
        className={activeYear === year ? 'active' : ''}
      >
        {year}
      </TimelineYearsBtn>
    ))}
  </TimelineYearsWrapper>
)
