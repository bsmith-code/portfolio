import { Chip, Divider, Grid, Paper, Stack, Typography } from '@mui/material'

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
  <Grid container justifyContent="center">
    {TIMELINE[activeYear].map(({ date, title, description }) => (
      <Grid
        item
        md={6}
        lg={4}
        xs={12}
        elevation={10}
        component={Paper}
        key={`event-${title}`}
      >
        <Chip label={date} color="primary" size="small" />
        <Typography>{title}</Typography>
        <Divider />
        <Typography>{description}</Typography>
      </Grid>
    ))}
  </Grid>
)
