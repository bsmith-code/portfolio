import { Dispatch, SetStateAction } from 'react'
import { rem } from 'polished'

import { Button, Stack, styled } from '@mui/material'

import { TIMELINE } from 'constants/timeline.constants'

interface IProps {
  activeYear: string
  setActiveYear: Dispatch<SetStateAction<string>>
}

const StyledButton = styled(Button)`
  position: initial;
  font-size: ${rem(14)};
  line-height: 1;
  border-radius: 0;
  background: ${props => props.theme.palette.common.white};
  padding: ${props => props.theme.spacing(2)};
  @media screen and (min-width: 767px) {
    width: 150px;
    border-top: none;
  }
  &:hover,
  &.active {
    color: ${props => props.theme.palette.common.white};
    background: ${props => props.theme.palette.primary.main};
  }
  &:before {
    @media screen and (min-width: 767px) {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgba(255, 255, 255, 0.7);
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.2),
        rgba(255, 255, 255, 1)
      );
      z-index: -1;
    }
  }
`
export const TimelineYears = ({ activeYear, setActiveYear }: IProps) => (
  <Stack
    overflow="auto"
    direction="row"
    justifyContent="center"
    sx={theme => ({ borderTop: `1px solid ${theme.palette.primary.main}` })}
  >
    {Object.keys(TIMELINE).map(year => (
      <StyledButton
        variant="text"
        disableRipple
        key={`timeline-${year}`}
        onClick={() => setActiveYear(year)}
        className={activeYear === year ? 'active' : ''}
      >
        {year}
      </StyledButton>
    ))}
  </Stack>
)
