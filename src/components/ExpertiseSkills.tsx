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

// Constants
import { EXPERTISE } from 'constants/index'

const ExpertiseSkills = () => (
  <ExpertiseGroupList>
    {EXPERTISE.map(({ name: groupName, skills }) => (
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

export default ExpertiseSkills
