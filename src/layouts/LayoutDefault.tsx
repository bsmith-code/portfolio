import { Fragment } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Box, Container as MuiContainer, styled } from '@mui/material'

import { LayoutAppFooter } from 'components/LayoutAppFooter'
import { LayoutAppHeader } from 'components/LayoutAppHeader'
import { LayoutViewHeader } from 'components/LayoutViewHeader'

import {
  ROUTE_PATH_ABOUT,
  ROUTES_PATH_TO_LABEL_MAP
} from 'constants/routes.constants'

const StyledMain = styled(Box)`
  min-height: calc(100% - 48px);
`

export const LayoutHome = () => (
  <>
    <LayoutAppHeader />
    <StyledMain component="main">
      <Outlet />
    </StyledMain>
    <LayoutAppFooter />
  </>
)

export const LayoutDefault = () => {
  const { pathname } = useLocation()

  const isWideLayout = [ROUTE_PATH_ABOUT].includes(pathname)
  const viewTitle = ROUTES_PATH_TO_LABEL_MAP?.[pathname] ?? '404 - Not Found'

  const Container = isWideLayout ? Fragment : MuiContainer

  return (
    <>
      <LayoutAppHeader />
      <StyledMain component="main">
        <LayoutViewHeader title={viewTitle} />
        <Container sx={{ py: 10 }}>
          <Outlet />
        </Container>
      </StyledMain>
      <LayoutAppFooter />
    </>
  )
}
