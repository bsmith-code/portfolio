import styled from 'styled-components'

const ExpertiseProfile = (): JSX.Element => {
  return (
    <Wrapper>
      <ProfileName>Brian Matthew Smith</ProfileName>
      <ProfileTitle>Senior Software Developer</ProfileTitle>
      <ProfileImage src="assets/images/brian.png" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  padding: 0 25px;
  @media screen and (min-width: 767px) {
    flex-shrink: 0;
    flex-grow: 0;
  }
`
const ProfileName = styled.h2`
  font-size: 24px;
  margin: 0 0 10px 0;
`
const ProfileTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #7ebaeb;
`
const ProfileImage = styled.img``

export default ExpertiseProfile
