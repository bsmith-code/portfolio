import styled from 'styled-components'
import LayoutViewTitle from 'components/LayoutViewTitle'
import ExpertiseSkills from 'components/ExpertiseSkills'
import ExpertiseProfile from 'components/ExpertiseProfile'

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

const ViewExpertise = () => (
  <>
    <LayoutViewTitle title="Expertise" />
    <section>
      <div className="container">
        <ExpertiseWrapper>
          <ExpertiseProfile />
          <ExpertiseSkills />
        </ExpertiseWrapper>
      </div>
    </section>
  </>
)

export default ViewExpertise
