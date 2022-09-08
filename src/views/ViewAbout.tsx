import { useState } from 'react'
import styled from 'styled-components'
import LayoutViewTitle from 'layouts/LayoutViewTitle'
import TimelineAllYears from 'components/TimelineAllYears'
import TimelineSelectedYear from 'components/TimelineSelectedYear'

const TimelineWrapper = styled.section`
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 767px) {
    overflow: scroll;
  }
`

const ViewAbout = () => {
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

export default ViewAbout
