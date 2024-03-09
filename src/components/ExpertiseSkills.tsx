import {
  ExpertiseGroupList,
  ExpertiseGroupListItem,
  ExpertiseGroupName,
  ExpertiseSkillIcon,
  ExpertiseSkillName,
  ExpertiseSkillsGrid,
  ExpertiseSkillsGridItem
} from 'styles/components/expertise.styles'

import { EXPERTISE } from 'constants/expertise.constants'

export const ExpertiseSkills = () => (
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
