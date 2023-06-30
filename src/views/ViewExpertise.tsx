// Components
import ExpertiseSkills from 'components/ExpertiseSkills'
import ExpertiseProfile from 'components/ExpertiseProfile'

// Styles
import { ExpertiseWrapper } from 'styles/components/expertise.styles'

const ViewExpertise = () => (
  <ExpertiseWrapper>
    <ExpertiseProfile />
    <ExpertiseSkills />
  </ExpertiseWrapper>
)

export default ViewExpertise
