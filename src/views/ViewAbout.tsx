import { useState } from 'react'

import { TimelineYears } from 'components/TimelineYears'
import { TimelineYearsActive } from 'components/TimelineYearsActive'

import { TimelineWrapper } from 'styles/components/timeline.styles'

export const ViewAbout = () => {
  const [activeYear, setActiveYear] = useState('2021')

  return (
    <TimelineWrapper>
      <TimelineYearsActive activeYear={activeYear} />
      <TimelineYears activeYear={activeYear} setActiveYear={setActiveYear} />
    </TimelineWrapper>
  )
}
