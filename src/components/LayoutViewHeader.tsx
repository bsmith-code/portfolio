import { rem } from 'polished'

import { Stack, styled, Typography } from '@mui/material'

interface IProps {
  title: string
}

const StyledStack = styled(Stack)`
  height: 280px;
  flex-shrink: 0;
  margin-top: 64px;
  position: relative;
  background-size: cover;
  justify-content: center;
  background-position: center;
  background-image: url('public/assets/images/view_page-bg.jpg');
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
  }
  @media screen and (min-width: 767px) {
    height: 320px;
  }
`

const StyledTypography = styled(Typography)<{ component: string }>`
  margin: 0;
  z-index: 500;
  font-weight: 400;
  text-align: center;
  letter-spacing: 15px;
  font-size: ${rem(24)};
  text-transform: uppercase;
  @media screen and (min-width: 767px) {
    font-size: ${rem(30)};
  }
`

export const LayoutViewHeader = ({ title }: IProps) => (
  <StyledStack>
    <StyledTypography component="h1">{title}</StyledTypography>
  </StyledStack>
)
