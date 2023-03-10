import styled from 'styled-components'
import { rem } from 'polished'

const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 50px);
  background: url('../assets/images/view_page-bg.jpg') no-repeat center;
  background-size: cover;
  background-position: center;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(21, 21, 21, 0.2) 10%,
    rgba(255, 255, 255, 0.4) 40%
  );
  z-index: 0;
`
const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  max-width: 600px;
  padding: 0 25px;
  z-index: 800;
`
const Logo = styled.img`
  width: 160px;
  margin: 0 0 20px 0;
  display: inline-block;
`
const Title = styled.h1`
  font-size: ${rem(22)};
  color: var(--white);
  margin: 0 0 10px 0;
  font-weight: 700;
  line-height: 1.4;
  @media screen and (min-width: 767px) {
    font-size: 36px;
    font-weight: 400;
  }
`
const Copy = styled.p`
  color: var(--white);
  margin: 0;
  font-weight: 700;
  line-height: 1.6;
`

const ViewHome = () => (
  <Wrapper>
    <ContentWrapper>
      <Title>Senior Software Developer</Title>
      <Copy>10+ years of professional &amp; enterprise-level experience</Copy>
    </ContentWrapper>
    <Overlay />
  </Wrapper>
)

export default ViewHome
