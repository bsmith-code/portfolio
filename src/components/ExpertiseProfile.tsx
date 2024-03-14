import { rem } from 'polished'

import { Box, Typography } from '@mui/material'

export const ExpertiseProfile = () => (
  <Box textAlign="center" flexShrink={0}>
    <Typography fontSize={rem(24)}>Brian Matthew Smith</Typography>
    <Typography color="primary" fontSize={rem(14)} fontWeight={700}>
      Senior Software Engineer
    </Typography>
    <img
      alt="Brian M. Smith"
      src="assets/images/expertise_profile.png"
      style={{ maxWidth: '100%' }}
    />
  </Box>
)
