import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { LayoutDefault } from 'layouts/LayoutDefault'

import { ViewAbout } from 'views/ViewAbout'
import { ViewContact } from 'views/ViewContact'
import { ViewExperience } from 'views/ViewExperience'
import { ViewExpertise } from 'views/ViewExpertise'
import { ViewHome } from 'views/ViewHome'
import { ViewProjects } from 'views/ViewProjects'
import { ViewStudy } from 'views/ViewStudy'

import {
  ROUTE_PATH_ABOUT,
  ROUTE_PATH_CONTACT,
  ROUTE_PATH_EXPERIENCE,
  ROUTE_PATH_EXPERTISE,
  ROUTE_PATH_PROJECTS,
  ROUTE_PATH_STUDY
} from 'constants/index'

const AppRoutes = () => (
  <Router>
    <Switch>
      <LayoutDefault exact path="/" component={ViewHome} />
      <LayoutDefault
        path={ROUTE_PATH_ABOUT}
        component={ViewAbout}
        isWideLayout
      />
      <LayoutDefault path={ROUTE_PATH_EXPERTISE} component={ViewExpertise} />
      <LayoutDefault path={ROUTE_PATH_EXPERIENCE} component={ViewExperience} />
      <LayoutDefault path={ROUTE_PATH_PROJECTS} component={ViewProjects} />
      <LayoutDefault path={ROUTE_PATH_CONTACT} component={ViewContact} />
      <LayoutDefault path={ROUTE_PATH_STUDY} component={ViewStudy} />

      <Redirect exact from="/*" to="/" />
    </Switch>
  </Router>
)

export default AppRoutes
