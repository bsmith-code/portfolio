// Common
import { Route } from 'react-router-dom'

// Constants
import { ROUTES_PATH_TO_LABEL_MAP } from 'constants/index'

// Components
import LayoutAppHeader from 'components/LayoutAppHeader'
import LayoutAppFooter from 'components/LayoutAppFooter'
import LayoutViewHeader from 'components/LayoutViewHeader'

interface IProps {
  path: string
  exact?: boolean
  component: () => JSX.Element
  isWideLayout?: boolean
}

const LayoutDefault = ({
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
          </>
        ) : (
          <>
            <LayoutAppHeader />
            <main>
              <LayoutViewHeader title={viewTitle} />
              <section className="content__wrapper">
                <div className={!isWideLayout ? 'container' : ''}>
                  <Component />
                </div>
              </section>
            </main>
            <LayoutAppFooter />
          </>
        )
      }
    />
  )
}

export default LayoutDefault
