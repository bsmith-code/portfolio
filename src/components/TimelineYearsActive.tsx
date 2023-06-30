// Styles
import {
  TimelineYearsActiveEvent,
  TimelineYearsActiveWrapper,
  TimelineYearsActiveEventDate,
  TimelineYearsActiveEventDesc,
  TimelineYearsActiveEventTitle,
  TimelineYearsActiveEventDivider
} from 'styles/components/timeline.styles'

// Constants
import { TIMELINE } from 'constants/index'

interface IProps {
  activeYear: string
}

const TimelineYearsActive = ({ activeYear }: IProps) => (
  <TimelineYearsActiveWrapper>
    {TIMELINE[activeYear].map(({ date, title, description }) => (
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

export default TimelineYearsActive
