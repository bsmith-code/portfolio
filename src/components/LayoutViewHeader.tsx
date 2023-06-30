// Styles
import {
  LayoutViewHeaderTitle,
  LayoutViewHeaderWrapper
} from 'styles/components/layout.styles'

interface IProps {
  title: string
}

const LayoutViewHeader = ({ title }: IProps) => (
  <LayoutViewHeaderWrapper>
    <LayoutViewHeaderTitle>{title}</LayoutViewHeaderTitle>
  </LayoutViewHeaderWrapper>
)

export default LayoutViewHeader
