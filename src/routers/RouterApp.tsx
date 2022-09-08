import { Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
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
      <LayoutDefault path="/about" component={ViewAbout} />
      <LayoutDefault path="/expertise" component={ViewExpertise} />
      <LayoutDefault path="/experience" component={ViewExperience} />
      <LayoutDefault path="/portfolio" component={ViewPortfolio} />
      <LayoutDefault path="/contact" component={ViewContact} />

      <Redirect exact from="/*" to="/" />
    </Switch>
  </Router>
)

export default AppRoutes
