import styled from 'styled-components'
import { useAppSelector } from 'hooks/useRedux'
import LayoutViewTitle from 'components/LayoutViewTitle'

const ExperienceWrapper = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
`
const CompanyWrapper = styled.a`
  @media screen and (min-width: 767px) {
    min-height: 170px;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: calc((100 / 3 * 1%) - 30px);
  }
`
const CompanyLogo = styled.img``
const CompanyName = styled.h5``
const CompanyPosition = styled.p``
const CompanyDate = styled.span``

const ViewExperience = () => {
  const { experience } = useAppSelector(state => state)
  return (
    <>
      <LayoutViewTitle title="Experience" />
      <section>
        <div className="container">
          <ExperienceWrapper>
            {experience.map(
              ({ url, logo, name, position, startDate, endDate }) => (
                <CompanyWrapper
                  href={url}
                  target="_blank"
                  key={`company-${name}`}
                >
                  <CompanyLogo src={`assets/images/${logo}`} />
                  <CompanyName>{name}</CompanyName>
                  <CompanyPosition>{position}</CompanyPosition>
                  <CompanyDate>Start: {startDate}</CompanyDate>
                  <CompanyDate>End: {endDate}</CompanyDate>
                </CompanyWrapper>
              )
            )}
          </ExperienceWrapper>
        </div>
      </section>
    </>
  )
}

export default ViewExperience
