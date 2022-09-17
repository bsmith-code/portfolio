// Common
import { shallowEqual } from 'react-redux'

// Redux
import { selectTimelineActiveYear } from 'redux/slices/timeline'

// Hooks
import { useAppSelector } from 'hooks/useRedux'

// Styles
import {
  TimelineYearsActiveEvent,
  TimelineYearsActiveWrapper,
  TimelineYearsActiveEventDate,
  TimelineYearsActiveEventDesc,
  TimelineYearsActiveEventTitle,
  TimelineYearsActiveEventDivider
} from 'styles/components/timeline.styles'

interface IProps {
  activeYear: number
}

const TimelineYearsActive = ({ activeYear }: IProps) => {
  const activeYearEvents = useAppSelector(
    state => selectTimelineActiveYear(state, activeYear),
    shallowEqual
  )

  return (
    <TimelineYearsActiveWrapper>
      {activeYearEvents.map(({ date, title, description }) => (
        <TimelineYearsActiveEvent key={`event-${title}`}>
          <TimelineYearsActiveEventDate>{date}</TimelineYearsActiveEventDate>
          <TimelineYearsActiveEventTitle>{title}</TimelineYearsActiveEventTitle>
          <TimelineYearsActiveEventDivider />
          <TimelineYearsActiveEventDesc>
            {description}
          </TimelineYearsActiveEventDesc>
        </TimelineYearsActiveEvent>
      ))}
    </TimelineYearsActiveWrapper>
  )
}

export default TimelineYearsActive
