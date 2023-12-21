import { rem } from 'polished'
import styled from 'styled-components'

export const ExperienceWrapper = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
`

export const ExperienceCompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 24px;
  border-radius: 8px;
  margin: 0 15px 30px 15px;
  background: #ffffff;
  border: 1px solid #efefef;
  transition: all 0.15s ease;
  &:hover {
    background: #efefef;
  }
  @media screen and (min-width: 767px) {
    min-height: 170px;
    flex-grow: 0;
    flex-shrink: 1;
    max-width: calc(${`${100 / 3}%`} - 30px);
    flex-basis: calc(${`${100 / 3}%`} - 30px);
  }
`

export const ExperienceCompanyLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  margin: 0 0 24px 0;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`

export const ExperienceCompanyPosition = styled.h2`
  font-size: ${rem(14)};
  font-weight: 700;
  color: var(--blue-sky);
  margin: 0 0 24px 0;
`

export const ExperienceCompanyDate = styled.p`
  font-size: ${rem(14)};
  color: var(--charcoal);
  margin: 0 0 8px 0;
`

export const ExperienceCompanyDuration = styled.p`
  font-size: ${rem(12)};
  font-weight: 300;
  color: var(--charcoal);
  margin: 0;
`
