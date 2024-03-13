import { useState } from 'react'

import { Box } from '@mui/material'

import { TimelineYears } from 'components/TimelineYears'
import { TimelineYearsActive } from 'components/TimelineYearsActive'

export const ViewAbout = () => {
  const [activeYear, setActiveYear] = useState('2021')

  return (
    <Box position="relative">
      <TimelineYearsActive activeYear={activeYear} />
      <TimelineYears activeYear={activeYear} setActiveYear={setActiveYear} />
    </Box>
  )
}
