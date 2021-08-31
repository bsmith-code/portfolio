import { useState } from 'react'
import LayoutViewTitle from './LayoutViewTitle'
import TimelineAllYears from './TimelineAllYears'
import TimelineSelectedYear from './TimelineSelectedYear'
import styled from 'styled-components'

const ViewAbout = (): JSX.Element => {
  const [selectedYear, setSelectedYear] = useState(1989)

  return (
    <>
      <LayoutViewTitle title="About" />
      <TimelineWrapper>
        <TimelineSelectedYear selectedYear={selectedYear} />
        <TimelineAllYears
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </TimelineWrapper>
    </>
  )
}

const TimelineWrapper = styled.section`
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 767px) {
    overflow: scroll;
  }
`

export default ViewAbout
