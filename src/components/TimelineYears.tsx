// Common
import { Dispatch, SetStateAction } from 'react'

// Styles
import {
  TimelineYearsBtn,
  TimelineYearsWrapper
} from 'styles/components/timeline.styles'

// Constants
import { TIMELINE } from 'constants/index'

interface IProps {
  activeYear: string
  setActiveYear: Dispatch<SetStateAction<string>>
}

const TimelineYears = ({ activeYear, setActiveYear }: IProps) => (
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

export default TimelineYears
