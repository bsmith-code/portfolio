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
  const { expertise } = useAppSelector(state => state)

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
const ExpertiseWrapper = styled.li`
  margin: 0 0 40px 0;
`
const ExpertiseName = styled.p`
  font-weight: 700;
  font-size: ${rem(12)};
  margin: 0 0 15px 0;
  line-height: 1;
`
const ExpertiseSkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const ExpertiseSkillName = styled.p`
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
const ExpertiseSkillFont = styled.i`
  font-size: ${rem(55)};
  color: #7ebaeb;
`
const ExpertiseSkillImg = styled.img``
const ExpertiseSkill = styled.div`
  flex-shrink: 0;
  margin: 0 45px 25px 0;
  position: relative;
  &:hover {
    ${ExpertiseSkillName} {
      opacity: 1;
    }
  }
`

export default ExpertiseSkills
