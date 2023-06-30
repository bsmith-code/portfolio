// Styles
import {
  ExpertiseProfileImg,
  ExpertiseProfileName,
  ExpertiseProfileTitle,
  ExpertiseProfileWrapper
} from 'styles/components/expertise.styles'

const ExpertiseProfile = () => (
  <ExpertiseProfileWrapper>
    <ExpertiseProfileName>Brian Matthew Smith</ExpertiseProfileName>
    <ExpertiseProfileTitle>Senior Software Developer</ExpertiseProfileTitle>
    <ExpertiseProfileImg src="assets/images/expertise_profile.png" />
  </ExpertiseProfileWrapper>
)

export default ExpertiseProfile
