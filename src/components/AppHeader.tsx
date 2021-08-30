import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AppHeader = (): JSX.Element => {
  const [isMenuActive, toggleMenu] = useState(false)
  const menuItems = [
    {
      path: 'about',
      label: 'About',
      component: StyledLink
    },
    {
      path: 'expertise',
      label: 'Expertise',
      component: StyledLink
    },
    {
      path: 'experience',
      label: 'Experience',
      component: StyledLink
    },
    {
      path: 'portfolio',
      label: 'Portfolio',
      component: StyledLink
    },
    {
      path: 'contact',
      label: 'Contact',
      component: StyledLink
    },
    {
      label: 'Resume',
      component: StyledHref,
      path: '/images/resumed.pdf'
    }
  ]
  return (
    <Wrapper>
      <Logo to="/">Brian M. Smith</Logo>
      <Nav isMenuActive={isMenuActive}>
        {isMenuActive && (
          <CloseMenu onClick={() => toggleMenu(!isMenuActive)}>
            <img alt="Close Menu" src="/images/close.svg" />
          </CloseMenu>
        )}
        <StyledLink onClick={() => toggleMenu(!isMenuActive)} to="about">
          About
        </StyledLink>
        <StyledLink onClick={() => toggleMenu(!isMenuActive)} to="expertise">
          Expertise
        </StyledLink>
        <StyledLink onClick={() => toggleMenu(!isMenuActive)} to="portfolio">
          Portfolio
        </StyledLink>
        <StyledLink onClick={() => toggleMenu(!isMenuActive)} to="contact">
          Contact
        </StyledLink>
        <StyledHref
          onClick={() => toggleMenu(!isMenuActive)}
          href="/images/resume.pdf"
          target="_blank"
        >
          Resume
        </StyledHref>
      </Nav>
      <OpenMenu onClick={() => toggleMenu(!isMenuActive)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
        </svg>
      </OpenMenu>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 32px;
  background: #fff;
  box-shadow: 0px 7px 25px -6px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 767px) {
    padding: 16px 50px;
  }
`
const Nav = styled.nav`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  transition: transform 0.2s ease;
  transform: ${(props: { isMenuActive: boolean }) =>
    props.isMenuActive ? 'translateX(0)' : 'translateX(100%)'};
  background: #fff;
  padding: 65px 25px;
  @media screen and (min-width: 767px) {
    background: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: initial;
    top: initial;
    bottom: initial;
    transform: none;
    padding: 0;
  }
`

const Logo = styled(Link)`
  font-weight: 800;
  color: #7ebaeb;
  padding: 0;
  @media screen and (min-width: 767px) {
    color: #7ebaeb;
    &:hover {
      color: #000;
    }
  }
`

const StyledLink = styled(Link)`
  padding: 10px;
  color: #7ebaeb;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2.5px;
  line-height: 2;
  display: block;
  text-align: center;
  @media screen and (min-width: 767px) {
    padding: 0 15px;
    display: inline-block;
    font-size: 12px;
    &:hover {
      color: #000;
    }
  }
`
const StyledHref = styled.a`
  padding: 10px;
  color: #7ebaeb;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2.5px;
  line-height: 2;
  display: block;
  text-align: center;
  @media screen and (min-width: 767px) {
    padding: 0 15px;
    display: inline-block;
    font-size: 12px;
    &:hover {
      color: #000;
    }
  }
`

const CloseMenu = styled.button`
  display: block;
  background: transparent;
  padding: 0;
  position: absolute;
  top: 15px;
  right: 25px;
  z-index: 500;
  img {
    width: 40px;
    height: 40px;
    float: left;
    line-height: 1;
  }
  @media screen and (min-width: 767px) {
    display: none;
  }
`

const OpenMenu = styled.button`
  display: block;
  background: transparent;
  padding: 0;
  svg {
    width: 40px;
    height: 40px;
    float: left;
    line-height: 1;
    fill: #7ebaeb;
  }
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export default AppHeader
