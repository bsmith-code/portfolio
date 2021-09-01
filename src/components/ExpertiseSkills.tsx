import styled from 'styled-components'
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
const ExpertiseSkillsWrapper = styled.div``
const ExpertiseSkill = styled.div``
const ExpertiseSkillName = styled.p``
const ExpertiseSkillFont = styled.i``
const ExpertiseSkillImg = styled.img``

export default ExpertiseSkills
