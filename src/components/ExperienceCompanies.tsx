// Common
import { shallowEqual } from 'react-redux'

// Redux
import { selectExperience } from 'redux/slices/experience'

// Hooks
import { useAppSelector } from 'hooks/useRedux'

// Helpers
import { formatDate, getDuration } from 'helpers'

// Styles
import {
  ExperienceCompanyDate,
  ExperienceCompanyWrapper,
  ExperienceCompanyPosition,
  ExperienceCompanyDuration,
  ExperienceCompanyLogoWrapper
} from 'styles/components/experience.styles'

const ExperienceCompanies = () => {
  const experience = useAppSelector(selectExperience, shallowEqual)

  return (
    <>
      {experience.map(({ url, logo, name, position, startDate, endDate }) => (
        <ExperienceCompanyWrapper
          href={url}
          target="_blank"
          key={`company-${name}`}
        >
          <ExperienceCompanyLogoWrapper>
            <img src={`assets/images/${logo}`} alt={name} />
          </ExperienceCompanyLogoWrapper>
          <ExperienceCompanyPosition>{position}</ExperienceCompanyPosition>
          <ExperienceCompanyDate>
            {formatDate(startDate)} - {formatDate(endDate)}
          </ExperienceCompanyDate>
          <ExperienceCompanyDuration>
            {getDuration({ startDate, endDate })}
          </ExperienceCompanyDuration>
        </ExperienceCompanyWrapper>
      ))}
    </>
  )
}

export default ExperienceCompanies
