import {
  TimelineYearsActiveEvent,
  TimelineYearsActiveEventDate,
  TimelineYearsActiveEventDesc,
  TimelineYearsActiveEventDivider,
  TimelineYearsActiveEventTitle,
  TimelineYearsActiveWrapper
} from 'styles/components/timeline.styles'

import { TIMELINE } from 'constants/timeline.constants'

interface IProps {
  activeYear: string
}

export const TimelineYearsActive = ({ activeYear }: IProps) => (
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
