import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
  LayoutAppHeaderLink,
  LayoutAppHeaderLogo,
  LayoutAppHeaderMenu,
  LayoutAppHeaderMenuBtn,
  LayoutAppHeaderWrapper
} from 'styles/components/layout.styles'

import { ROUTES_PUBLIC } from 'constants/routes.constants'

export const LayoutAppHeader = () => {
  // Composition
  const location = useLocation()

  // Local State
  const [isMenuActive, setIsMenuActive] = useState(true)

  // Handlers
  const handleMenuBtnClick = () => setIsMenuActive(isActive => !isActive)

  // Effects
  useEffect(() => {
    setIsMenuActive(false)
  }, [location])

  return (
    <LayoutAppHeaderWrapper>
      <LayoutAppHeaderLogo to="/">Brian M. Smith</LayoutAppHeaderLogo>
      <LayoutAppHeaderMenu isMenuActive={isMenuActive}>
        {ROUTES_PUBLIC.map(
          ({ path, label, isAnchor = false, isIcon = false }) => (
            <LayoutAppHeaderLink
              path={path}
              isAnchor={isAnchor}
              key={`route-${label}`}
            >
              {isIcon ? <i className={label} /> : label}
            </LayoutAppHeaderLink>
          )
        )}
      </LayoutAppHeaderMenu>
      <LayoutAppHeaderMenuBtn onClick={handleMenuBtnClick}>
        <i className="material-icons">{isMenuActive ? 'close' : 'menu'}</i>
      </LayoutAppHeaderMenuBtn>
    </LayoutAppHeaderWrapper>
  )
}
