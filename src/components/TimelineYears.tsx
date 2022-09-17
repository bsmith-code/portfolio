// Common
import { Dispatch, SetStateAction } from 'react'
import { shallowEqual } from 'react-redux'

// Redux
import { selectTimelineYears } from 'redux/slices/timeline'

// Hooks
import { useAppSelector } from 'hooks/useRedux'

// Styles
import {
  TimelineYearsBtn,
  TimelineYearsWrapper
} from 'styles/components/timeline.styles'

interface IProps {
  activeYear: number
  setActiveYear: Dispatch<SetStateAction<number>>
}

const TimelineYears = ({ activeYear, setActiveYear }: IProps) => {
  const timelineYears = useAppSelector(selectTimelineYears, shallowEqual)

  return (
    <TimelineYearsWrapper>
      {timelineYears.map(year => (
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
}

export default TimelineYears
