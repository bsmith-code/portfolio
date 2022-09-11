// Common
import { useState } from 'react'

// Components
import TimelineYears from 'components/TimelineYears'
import TimelineYearsSelected from 'components/TimelineYearsSelected'

// Styles
import { TimelineWrapper } from 'styles/components/timeline.styles'

const ViewAbout = () => {
  const [selectedYear, setSelectedYear] = useState(1989)

  return (
    <TimelineWrapper>
      <TimelineYearsSelected selectedYear={selectedYear} />
      <TimelineYears
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
    </TimelineWrapper>
  )
}

export default ViewAbout
