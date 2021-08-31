import { Route, useLocation } from 'react-router-dom'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

interface IProps {
  component: any
  path?: string
  exact?: boolean
}

const LayoutDefault = ({
  component: Component,
  ...rest
}: IProps): JSX.Element => {
  const location = useLocation()
  const isHomeView = location.pathname === '/'

  return (
    <Route
      {...rest}
      render={props => (
        <>
          <AppHeader />
          <main>
            <Component {...props} />
          </main>
          {!isHomeView ? <AppFooter /> : null}
        </>
      )}
    ></Route>
  )
}

export default LayoutDefault
