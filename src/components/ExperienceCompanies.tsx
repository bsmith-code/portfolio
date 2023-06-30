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

// Constants
import { EXPERIENCE } from 'constants/index'

const ExperienceCompanies = () => (
  <>
    {EXPERIENCE.map(({ url, logo, name, position, startDate, endDate }) => (
      <ExperienceCompanyWrapper
        href={url}
        target="_blank"
        rel="noreferrer"
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

export default ExperienceCompanies
