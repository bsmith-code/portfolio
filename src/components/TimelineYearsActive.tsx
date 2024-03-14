import { rem } from 'polished'

import { Box, Chip, Divider, Grid, Paper, Typography } from '@mui/material'

import { TIMELINE } from 'constants/timeline.constants'

interface IProps {
  activeYear: string
}

export const TimelineYearsActive = ({ activeYear }: IProps) => (
  <Grid container justifyContent="center" px={2} py={10} spacing={3}>
    {TIMELINE[activeYear].map(({ date, title, description }) => (
      <Grid item sm={6} md={6} lg={3} xs={12} key={`event-${title}`}>
        <Box
          p={3}
          elevation={10}
          minHeight={450}
          component={Paper}
          textAlign="center"
        >
          <Chip
            label={date}
            color="primary"
            sx={{
              mb: 3,
              borderRadius: 1,
              fontWeight: 700,
              fontSize: rem(10),
              textTransform: 'uppercase',
            }}
          />
          <Typography fontSize={rem(24)} fontWeight={300}>
            {title}
          </Typography>
          <Divider
            sx={theme => ({
              my: 3,
              width: 100,
              mx: 'auto',
              borderColor: theme.palette.primary.main,
            })}
          />
          <Typography fontSize={rem(14)}>{description}</Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
)
