import styled from 'styled-components'
import LayoutViewTitle from './LayoutViewTitle'
import ExpertiseSkills from './ExpertiseSkills'
import ExpertiseProfile from './ExpertiseProfile'

const ViewExpertise = (): JSX.Element => {
  return (
    <>
      <LayoutViewTitle title="Expertise" />
      <Wrapper>
        <div className="container">
          <ExpertiseWrapper>
            <ExpertiseProfile />
            <ExpertiseSkills />
          </ExpertiseWrapper>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section``
const ExpertiseWrapper = styled.div`
  @media screen and (min-width: 767px) {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    margin: 0;
  }
`

export default ViewExpertise
