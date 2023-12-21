import {
  LayoutAppFooterCopyright,
  LayoutAppFooterWrapper
} from 'styles/components/layout.styles'

export const LayoutAppFooter = () => {
  const year = new Date().getFullYear()

  return (
    <LayoutAppFooterWrapper>
      <LayoutAppFooterCopyright>
        &copy; Brian Matthew Smith, {year}. All Rights Reserved.
      </LayoutAppFooterCopyright>
    </LayoutAppFooterWrapper>
  )
}
