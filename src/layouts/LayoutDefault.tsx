import { FC } from 'react'
import { Route, useLocation } from 'react-router-dom'
import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'

interface IProps {
  component: FC<any>
  path?: string
  exact?: boolean
}

const LayoutDefault = ({ component: Component, ...rest }: IProps) => {
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
    />
  )
}

export default LayoutDefault
