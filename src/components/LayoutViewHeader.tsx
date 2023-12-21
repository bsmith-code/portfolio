import {
  LayoutViewHeaderTitle,
  LayoutViewHeaderWrapper
} from 'styles/components/layout.styles'

interface IProps {
  title: string
}

export const LayoutViewHeader = ({ title }: IProps) => (
  <LayoutViewHeaderWrapper>
    <LayoutViewHeaderTitle>{title}</LayoutViewHeaderTitle>
  </LayoutViewHeaderWrapper>
)
