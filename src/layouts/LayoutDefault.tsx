import { Outlet, useLocation } from 'react-router-dom'

import { Box, Container, Stack, styled } from '@mui/material'

import { LayoutAppFooter } from 'components/LayoutAppFooter'
import { LayoutAppHeader } from 'components/LayoutAppHeader'
import { LayoutViewHeader } from 'components/LayoutViewHeader'

import {
  ROUTE_PATH_ABOUT,
  ROUTES_PATH_TO_LABEL_MAP
} from 'constants/routes.constants'

export const LayoutHome = () => (
  <>
    <LayoutAppHeader />
    <Stack component="main" height="100%">
      <Outlet />
      <LayoutAppFooter />
    </Stack>
  </>
)

export const LayoutDefault = () => {
  const { pathname } = useLocation()

  const isWideLayout = [ROUTE_PATH_ABOUT].includes(pathname)
  const viewTitle = ROUTES_PATH_TO_LABEL_MAP?.[pathname] ?? '404 - Not Found'

  const Component = isWideLayout ? Box : Container

  return (
    <>
      <LayoutAppHeader />
      <Stack component="main" height="100%">
        <LayoutViewHeader title={viewTitle} />
        <Component sx={{ py: 10, flexGrow: 1 }}>
          <Outlet />
        </Component>
        <LayoutAppFooter />
      </Stack>
    </>
  )
}
