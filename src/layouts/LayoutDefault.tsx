import { FC } from 'react'
import { Route, useLocation } from 'react-router-dom'
import LayoutAppHeader from 'components/LayoutAppHeader'
import LayoutAppFooter from 'components/LayoutAppFooter'

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
          <LayoutAppHeader />
          <main>
            <Component {...props} />
          </main>
          {!isHomeView ? <LayoutAppFooter /> : null}
        </>
      )}
    />
  )
}

export default LayoutDefault
