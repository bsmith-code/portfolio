import { Route } from 'react-router-dom'

import { LayoutAppFooter } from 'components/LayoutAppFooter'
import { LayoutAppHeader } from 'components/LayoutAppHeader'
import { LayoutViewHeader } from 'components/LayoutViewHeader'

import { StyledLayoutView } from 'styles/components/layout.styles'

import { ROUTES_PATH_TO_LABEL_MAP } from 'constants/index'

interface IProps {
  path: string
  exact?: boolean
  component: () => JSX.Element
  isWideLayout?: boolean
}

export const LayoutDefault = ({
  path,
  component: Component,
  isWideLayout = false,
  ...rest
}: IProps) => {
  const isHomeView = path === '/'
  const viewTitle = ROUTES_PATH_TO_LABEL_MAP?.[path] ?? '404 - Not Found'

  return (
    <Route
      {...rest}
      render={() =>
        isHomeView ? (
          <>
            <LayoutAppHeader />
            <main>
              <Component />
            </main>
            <LayoutAppFooter />
          </>
        ) : (
          <>
            <LayoutAppHeader />
            <StyledLayoutView>
              <LayoutViewHeader title={viewTitle} />
              <section className="content__wrapper">
                <div className={isWideLayout ? '' : 'container'}>
                  <Component />
                </div>
              </section>
            </StyledLayoutView>
            <LayoutAppFooter />
          </>
        )
      }
    />
  )
}
