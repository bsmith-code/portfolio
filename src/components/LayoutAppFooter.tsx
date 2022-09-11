// Styles
import {
  LayoutAppFooterWrapper,
  LayoutAppFooterCopyright
} from 'styles/components/layout.styles'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <LayoutAppFooterWrapper>
      <LayoutAppFooterCopyright>
        &copy; Brian Matthew Smith, {year}. All Rights Reserved.
      </LayoutAppFooterCopyright>
    </LayoutAppFooterWrapper>
  )
}

export default Footer
