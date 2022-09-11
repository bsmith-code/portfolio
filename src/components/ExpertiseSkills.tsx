// Common
import { shallowEqual } from 'react-redux'

// Redux
import { selectExpertise } from 'redux/slices/expertise'

// Hooks
import { useAppSelector } from 'hooks/useRedux'

// Styles
import {
  ExpertiseGroupList,
  ExpertiseGroupName,
  ExpertiseSkillName,
  ExpertiseSkillIcon,
  ExpertiseSkillsGrid,
  ExpertiseGroupListItem,
  ExpertiseSkillsGridItem
} from 'styles/components/expertise.styles'

const ExpertiseSkills = () => {
  const expertise = useAppSelector(selectExpertise, shallowEqual)

  return (
    <ExpertiseGroupList>
      {expertise.map(({ name: groupName, skills }) => (
        <ExpertiseGroupListItem key={`expertise-${groupName}`}>
          <ExpertiseGroupName>{groupName}</ExpertiseGroupName>
          <ExpertiseSkillsGrid>
            {skills.map(({ name: skillName, icon }) => (
              <ExpertiseSkillsGridItem key={`skill-${skillName}`}>
                <ExpertiseSkillName>{skillName}</ExpertiseSkillName>
                <ExpertiseSkillIcon className={icon} />
              </ExpertiseSkillsGridItem>
            ))}
          </ExpertiseSkillsGrid>
        </ExpertiseGroupListItem>
      ))}
    </ExpertiseGroupList>
  )
}

export default ExpertiseSkills
