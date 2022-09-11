// Common
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Constants
import { ROUTES_PUBLIC } from 'constants/index'

// Styles
import {
  LayoutAppHeaderMenu,
  LayoutAppHeaderLogo,
  LayoutAppHeaderLink,
  LayoutAppHeaderWrapper,
  LayoutAppHeaderMenuBtn
} from 'styles/components/layout.styles'

const LayoutAppHeader = () => {
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
        {ROUTES_PUBLIC.map(({ path, label, isAnchor = false }) => (
          <LayoutAppHeaderLink
            path={path}
            isAnchor={isAnchor}
            key={`route-${label}`}
          >
            {label}
          </LayoutAppHeaderLink>
        ))}
      </LayoutAppHeaderMenu>
      <LayoutAppHeaderMenuBtn onClick={handleMenuBtnClick}>
        <i className="material-icons">{isMenuActive ? 'close' : 'menu'}</i>
      </LayoutAppHeaderMenuBtn>
    </LayoutAppHeaderWrapper>
  )
}

export default LayoutAppHeader
