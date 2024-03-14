import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { rem } from 'polished'

import { AppBar, Box, styled, Toolbar } from '@mui/material'

import { ROUTES_PUBLIC } from 'constants/routes.constants'

const StyledLink = styled(NavLink)<{ isLogo?: boolean }>(
  ({ theme, isLogo }) => ({
    fontWeight: 700,
    letterSpacing: 2,
    fontSize: rem(12),
    textDecoration: 'none',
    padding: theme.spacing(0, 2),
    color: theme.palette.primary.main,
    ...(!isLogo && {
      '&.active': {
        color: theme.palette.text.primary,
      },
    }),
  })
)

export const LayoutAppHeader = () => {
  const location = useLocation()

  const [isMenuActive, setIsMenuActive] = useState(true)

  const handleToggleMenu = () => {
    setIsMenuActive(isActive => !isActive)
  }

  const handleCloseMenu = () => {
    setIsMenuActive(false)
  }

  return (
    <AppBar sx={theme => ({ bgcolor: theme.palette.common.white })}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <StyledLink isLogo to="/">
          Brian M. Smith
        </StyledLink>
        <Box component="nav">
          {ROUTES_PUBLIC.map(({ path, label, isAnchor, isIcon }) => (
            <StyledLink
              to={path}
              target={isAnchor ? '_blank' : '_self'}
              onClick={handleCloseMenu}
              key={`route-${label}`}
            >
              {isIcon ? <i className={label} /> : label}
            </StyledLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
