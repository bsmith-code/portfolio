import { Switch, BrowserRouter as Router } from 'react-router-dom'
import ViewHome from './ViewHome'
import ViewAbout from './ViewAbout'
import ViewContact from './ViewContact'
import LayoutDefault from './LayoutDefault'
import ViewExpertise from './ViewExpertise'
import ViewPortfolio from './ViewPortfolio'
import ViewExperience from './ViewExperience'

const AppRoutes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <LayoutDefault exact path="/" component={ViewHome} />
        <LayoutDefault path="/about" component={ViewAbout} />
        <LayoutDefault path="/expertise" component={ViewExpertise} />
        <LayoutDefault path="/experience" component={ViewExperience} />
        <LayoutDefault path="/portfolio" component={ViewPortfolio} />
        <LayoutDefault path="/contact" component={ViewContact} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
