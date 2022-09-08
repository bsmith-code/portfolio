import styled from 'styled-components'
import { rem } from 'polished'

const Wrapper = styled.footer`
  width: 100%;
  z-index: 900;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  background: var(--off-white);
  text-align: center;
`

const Copyright = styled.p`
  margin: 0;
  font-size: ${rem(10)};
  font-weight: 400;
  letter-spacing: 2px;
`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <Copyright>
        &copy; Brian Matthew Smith, {year}. All Rights Reserved.
      </Copyright>
    </Wrapper>
  )
}

export default Footer
