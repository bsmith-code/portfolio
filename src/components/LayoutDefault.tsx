import { Route } from 'react-router-dom'
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
}: IProps): JSX.Element => (
  <Route
    {...rest}
    render={props => (
      <>
        <AppHeader />
        <Component {...props} />
        <AppFooter />
      </>
    )}
  ></Route>
)

export default LayoutDefault
