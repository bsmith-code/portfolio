import { Outlet, useLocation } from 'react-router-dom'

import { Box } from '@mui/material'

import { LayoutAppFooter } from 'components/LayoutAppFooter'
import { LayoutAppHeader } from 'components/LayoutAppHeader'
import { LayoutViewHeader } from 'components/LayoutViewHeader'

import { StyledLayoutView } from 'styles/components/layout.styles'

import {
  ROUTE_PATH_ABOUT,
  ROUTES_PATH_TO_LABEL_MAP
} from 'constants/routes.constants'

export const LayoutDefault = () => {
  const { pathname } = useLocation()

  const isHomeView = pathname === '/'
  const isWideLayout = [ROUTE_PATH_ABOUT].includes(pathname)
  const viewTitle = ROUTES_PATH_TO_LABEL_MAP?.[pathname] ?? '404 - Not Found'

  if (isHomeView) {
    return (
      <>
        <LayoutAppHeader />
        <Box component="main" height="calc(100% - 48px)">
          <Outlet />
        </Box>
        <LayoutAppFooter />
      </>
    )
  }

  return (
    <>
      <LayoutAppHeader />
      <StyledLayoutView>
        <LayoutViewHeader title={viewTitle} />
        <section className="content__wrapper">
          <div className={isWideLayout ? '' : 'container'}>
            <Outlet />
          </div>
        </section>
      </StyledLayoutView>
      <LayoutAppFooter />
    </>
  )
}
