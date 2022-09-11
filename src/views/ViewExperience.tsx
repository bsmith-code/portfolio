// Components
import ExperienceCompanies from 'components/ExperienceCompanies'

// Styles
import { ExperienceWrapper } from 'styles/components/experience.styles'

const ViewExperience = () => (
  <section>
    <div className="container">
      <ExperienceWrapper>
        <ExperienceCompanies />
      </ExperienceWrapper>
    </div>
  </section>
)

export default ViewExperience
