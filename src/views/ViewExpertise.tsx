// Components
import ExpertiseSkills from 'components/ExpertiseSkills'
import ExpertiseProfile from 'components/ExpertiseProfile'

// Styles
import { ExpertiseWrapper } from 'styles/components/expertise.styles'

const ViewExpertise = () => (
  <section>
    <div className="container">
      <ExpertiseWrapper>
        <ExpertiseProfile />
        <ExpertiseSkills />
      </ExpertiseWrapper>
    </div>
  </section>
)

export default ViewExpertise
