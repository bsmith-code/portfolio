import styled from 'styled-components'
import { rem } from 'polished'
import { useAppSelector } from '../store'

const getExpertiseSkillIcon = (icon: string): JSX.Element =>
  icon.indexOf('.') === -1 ? (
    <ExpertiseSkillFont className={icon} />
  ) : (
    <ExpertiseSkillImg src={`assets/icons/${icon}`} />
  )

const ExpertiseSkills = (): JSX.Element => {
  const expertise = useAppSelector(state => state.expertise)

  return (
    <Wrapper>
      {expertise.map(({ name, skills }, idx) => (
        <ExpertiseWrapper key={`expertise-${idx}`}>
          <ExpertiseName>{name}</ExpertiseName>
          <ExpertiseSkillsWrapper>
            {skills.map(({ name, icon }, idx) => {
              const ExpertiseSkillIcon = () => getExpertiseSkillIcon(icon)
              return (
                <ExpertiseSkill key={`skill-${idx}`}>
                  <ExpertiseSkillName>{name}</ExpertiseSkillName>
                  <ExpertiseSkillIcon />
                </ExpertiseSkill>
              )
            })}
          </ExpertiseSkillsWrapper>
        </ExpertiseWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const ExpertiseWrapper = styled.li``
const ExpertiseName = styled.p``
const ExpertiseSkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ExpertiseSkill = styled.div`
  flex-shrink: 0;
  margin: 0 45px 25px 0;
  &:last-child {
    margin: 0;
  }
`
const ExpertiseSkillName = styled.p`
  margin: 0;
  display: none;
`
const ExpertiseSkillFont = styled.i`
  font-size: ${rem(55)};
  color: #7ebaeb;
`
const ExpertiseSkillImg = styled.img``

export default ExpertiseSkills
