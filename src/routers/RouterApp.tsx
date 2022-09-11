// Common
import { Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'

// Constants
import {
  ROUTE_PATH_ABOUT,
  ROUTE_PATH_CONTACT,
  ROUTE_PATH_PORTFOLIO,
  ROUTE_PATH_EXPERTISE,
  ROUTE_PATH_EXPERIENCE
} from 'constants/index'

// Components
import ViewHome from 'views/ViewHome'
import ViewAbout from 'views/ViewAbout'
import ViewContact from 'views/ViewContact'
import ViewExpertise from 'views/ViewExpertise'
import ViewPortfolio from 'views/ViewPortfolio'
import ViewExperience from 'views/ViewExperience'
import LayoutDefault from 'layouts/LayoutDefault'

const AppRoutes = () => (
  <Router>
    <Switch>
      <LayoutDefault exact path="/" component={ViewHome} />
      <LayoutDefault path={ROUTE_PATH_ABOUT} component={ViewAbout} />
      <LayoutDefault path={ROUTE_PATH_EXPERTISE} component={ViewExpertise} />
      <LayoutDefault path={ROUTE_PATH_EXPERIENCE} component={ViewExperience} />
      <LayoutDefault path={ROUTE_PATH_PORTFOLIO} component={ViewPortfolio} />
      <LayoutDefault path={ROUTE_PATH_CONTACT} component={ViewContact} />

      <Redirect exact from="/*" to="/" />
    </Switch>
  </Router>
)

export default AppRoutes
