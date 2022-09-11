// Common
import { FC } from 'react'
import { Route, useLocation } from 'react-router-dom'

// Constants
import { ROUTES_PATH_TO_LABEL_MAP } from 'constants/index'

// Components
import LayoutViewTitle from 'components/LayoutViewTitle'
import LayoutAppHeader from 'components/LayoutAppHeader'
import LayoutAppFooter from 'components/LayoutAppFooter'

interface IProps {
  component: FC<any>
  path?: string
  exact?: boolean
}

const LayoutDefault = ({ component: Component, ...rest }: IProps) => {
  const { pathname } = useLocation()
  const isHomeView = pathname === '/'
  const viewTitle = ROUTES_PATH_TO_LABEL_MAP?.[pathname] ?? '404 - Not Found'

  return (
    <Route
      {...rest}
      render={props => (
        <>
          <LayoutAppHeader />
          <main>
            <LayoutViewTitle title={viewTitle} />
            <Component {...props} />
          </main>
          {!isHomeView ? <LayoutAppFooter /> : null}
        </>
      )}
    />
  )
}

export default LayoutDefault
