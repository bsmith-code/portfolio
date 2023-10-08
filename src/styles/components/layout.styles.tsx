import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { rem } from 'polished'
import { ReactNode } from 'react'

export const LayoutAppHeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  background: var(--white);
  box-shadow: 0px 7px 25px -6px rgba(0, 0, 0, 0.5);
  height: 64px;
  @media screen and (min-width: 767px) {
    padding: 0px 64px;
  }
`

export const StyledLayoutView = styled.main`
  min-height: calc(100vh - 128px);
`

export const LayoutAppHeaderMenu = styled.nav`
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
  padding: 48px 32px;
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

export const LayoutAppHeaderLogo = styled(Link)`
  font-weight: 800;
  color: var(--blue-sky);
  padding: 0;
  @media screen and (min-width: 767px) {
    color: var(--blue-sky);
    &:hover {
      color: #000;
    }
  }
`

export const LayoutAppHeaderLink = styled(
  ({
    isAnchor,
    path,
    children,
    ...restProps
  }: {
    isAnchor: boolean
    path: string
    children: ReactNode
  }) =>
    isAnchor ? (
      <a href={path} {...restProps} target="_blank" rel="noreferrer">
        {children}
      </a>
    ) : (
      <NavLink to={path} {...restProps}>
        {children}
      </NavLink>
    )
)`
  padding: 10px;
  color: var(--blue-sky);
  font-weight: 700;
  letter-spacing: 2.5px;
  line-height: 1;
  display: block;
  &.active {
    color: var(--charcoal);
  }
  @media screen and (min-width: 767px) {
    padding: 0 15px;
    display: inline-block;
    font-size: ${rem(12)};
    &:hover {
      color: #000;
    }
  }
`

export const LayoutAppHeaderMenuBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 25px;
  z-index: 500;
  i {
    color: var(--blue-sky);
  }
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const LayoutAppFooterWrapper = styled.footer`
  width: 100%;
  z-index: 900;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  background: var(--white-off);
  text-align: center;
`

export const LayoutAppFooterCopyright = styled.p`
  margin: 0;
  font-size: ${rem(10)};
  font-weight: 400;
  letter-spacing: 2px;
`

export const LayoutViewHeaderWrapper = styled.section`
  height: 280px;
  background-image: url('../assets/images/view_page-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  margin-top: 64px;
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
    height: 400px;
  }
`

export const LayoutViewHeaderTitle = styled.h1`
  color: #333333;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 15px;
  font-weight: 400;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  text-align: center;
  @media screen and (min-width: 767px) {
    font-size: 30px;
  }
`
