import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { rem } from 'polished'

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
  background: var(--white);
  box-shadow: 0px 7px 25px -6px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 767px) {
    padding: 16px 50px;
  }
`
const MenuWrapper = styled.nav`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  transition: transform 0.2s ease;
  transform: ${(props: { isMenuActive: boolean }) =>
    props.isMenuActive ? 'translateX(0)' : 'translateX(100%)'};
  background: var(--white);
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
  color: var(--blue);
  padding: 0;
  @media screen and (min-width: 767px) {
    color: var(--blue);
    &:hover {
      color: #000;
    }
  }
`
const sharedLinkStyles = css`
  padding: 10px;
  color: var(--blue);
  font-weight: 700;
  letter-spacing: 2.5px;
  line-height: 1;
  display: block;
  @media screen and (min-width: 767px) {
    padding: 0 15px;
    display: inline-block;
    font-size: ${rem(12)};
    &:hover {
      color: #000;
    }
  }
`
const StyledLink = styled(Link)`
  ${sharedLinkStyles}
`
const StyledHref = styled.a`
  ${sharedLinkStyles}
`
const sharedBtnStyles = css`
  @media screen and (min-width: 767px) {
    display: none;
  }
`
const MenuClose = styled.button`
  position: absolute;
  top: 15px;
  right: 25px;
  z-index: 500;
  ${sharedBtnStyles}
`
const MenuOpen = styled.button`
  ${sharedBtnStyles}
`

const AppHeader = () => {
  // Composition
  const location = useLocation()

  // Menu
  const [isMenuActive, setIsMenuActive] = useState(false)
  const menuItems = [
    {
      path: 'about',
      label: 'About'
    },
    {
      path: 'expertise',
      label: 'Expertise'
    },
    {
      path: 'experience',
      label: 'Experience'
    },
    {
      path: 'portfolio',
      label: 'Portfolio'
    },
    {
      path: 'contact',
      label: 'Contact'
    }
  ]

  useEffect(() => {
    setIsMenuActive(false)
  }, [location])

  return (
    <Wrapper>
      <Logo to="/">Brian M. Smith</Logo>
      <MenuWrapper isMenuActive={isMenuActive}>
        <MenuClose onClick={() => setIsMenuActive(false)}>
          <i className="material-icons">close</i>
        </MenuClose>
        {menuItems.map(({ path, label }) => (
          <StyledLink key={`link-${path}`} to={path}>
            {label}
          </StyledLink>
        ))}
        <StyledHref href="/images/resume.pdf" target="_blank">
          Resume
        </StyledHref>
      </MenuWrapper>
      <MenuOpen onClick={() => setIsMenuActive(true)}>
        <i className="material-icons">menu</i>
      </MenuOpen>
    </Wrapper>
  )
}

export default AppHeader
