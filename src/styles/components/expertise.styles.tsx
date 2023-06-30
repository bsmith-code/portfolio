import styled from 'styled-components'
import { rem } from 'polished'

export const ExpertiseWrapper = styled.div`
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

export const ExpertiseGroupList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const ExpertiseGroupListItem = styled.li`
  margin: 0 0 40px 0;
`

export const ExpertiseGroupName = styled.p`
  font-weight: 700;
  font-size: ${rem(12)};
  margin: 0 0 15px 0;
  line-height: 1;
`

export const ExpertiseSkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const ExpertiseSkillName = styled.p`
  margin: 0;
  opacity: 0;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--charcoal);
  border-radius: 8px;
  font-size: ${rem(12)};
  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 6px 20px;
  margin-bottom: 8px;
  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--charcoal);
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const ExpertiseSkillsGridItem = styled.div`
  flex-shrink: 0;
  margin: 0 45px 25px 0;
  position: relative;
  &:hover {
    ${ExpertiseSkillName} {
      opacity: 1;
    }
  }
`
export const ExpertiseSkillIcon = styled.i`
  font-size: ${rem(55)};
  color: #7ebaeb;
`

export const ExpertiseProfileWrapper = styled.div`
  text-align: center;
  padding: 0 25px;
  @media screen and (min-width: 767px) {
    flex-shrink: 0;
    flex-grow: 0;
  }
`

export const ExpertiseProfileName = styled.h2`
  font-size: 24px;
  margin: 0 0 10px 0;
`

export const ExpertiseProfileTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #7ebaeb;
  margin: 0;
`

export const ExpertiseProfileImg = styled.img`
  max-width: 100%;
`
