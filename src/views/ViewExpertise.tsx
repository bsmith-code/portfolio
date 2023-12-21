import { ExpertiseProfile } from 'components/ExpertiseProfile'
import { ExpertiseSkills } from 'components/ExpertiseSkills'

import { ExpertiseWrapper } from 'styles/components/expertise.styles'

export const ViewExpertise = () => (
  <ExpertiseWrapper>
    <ExpertiseProfile />
    <ExpertiseSkills />
  </ExpertiseWrapper>
)
