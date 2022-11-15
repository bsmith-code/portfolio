// Common
import { useState } from 'react'

// Components
import TimelineYears from 'components/TimelineYears'
import TimelineYearsActive from 'components/TimelineYearsActive'

// Styles
import { TimelineWrapper } from 'styles/components/timeline.styles'

const ViewAbout = () => {
  const [activeYear, setActiveYear] = useState(2021)

  return (
    <TimelineWrapper>
      <TimelineYearsActive activeYear={activeYear} />
      <TimelineYears activeYear={activeYear} setActiveYear={setActiveYear} />
    </TimelineWrapper>
  )
}

export default ViewAbout
