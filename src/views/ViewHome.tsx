import { differenceInYears } from 'date-fns'
import { rem } from 'polished'

import { Box, Stack, styled, Typography } from '@mui/material'
// import styled from 'styled-components'

// const Wrapper = styled.section`
//   width: 100%;
//   height: 100%;
//   background: url('../assets/images/view_home-bg.jpg') no-repeat center;
//   background-size: cover;
//   background-position: center;
// `
// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background: radial-gradient(
//     ellipse at center,
//     rgba(21, 21, 21, 0.2) 10%,
//     rgba(255, 255, 255, 0.3) 40%
//   );
//   z-index: 0;
// `
// const ContentWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   width: 100%;
//   max-width: 600px;
//   padding: 0 25px;
//   z-index: 800;
// `
// const Logo = styled.img`
//   width: 160px;
//   margin: 0 0 20px 0;
//   display: inline-block;
// `
// const Title = styled.h1`
//   font-size: ${rem(22)};
//   color: var(--white);
//   margin: 0 0 10px 0;
//   font-weight: 700;
//   line-height: 1.4;
//   @media screen and (min-width: 767px) {
//     font-size: 36px;
//     font-weight: 400;
//   }
// `
// const Copy = styled.p`
//   color: var(--white);
//   margin: 0;
//   font-weight: 700;
//   line-height: 1.6;
// `
const StyledStack = styled(Stack)`
  height: 100%;
  background: url('../assets/images/view_home-bg.jpg') no-repeat center;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  &:after: {
    display: 'block';
    content: '""';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(21, 21, 21, 0.2) 10%,
      rgba(255, 255, 255, 0.3) 40%
    );
    z-index: 0;
  }
`

export const ViewHome = () => {
  const elapsedYears = differenceInYears(new Date(), new Date('2010-01-01'))

  return (
    <StyledStack>
      <Box>
        <Typography>Senior Software Engineer</Typography>
        <Typography>
          {elapsedYears} years of professional &amp; enterprise-level experience
        </Typography>
      </Box>
      {/* <Overlay /> */}
    </StyledStack>
  )
}
