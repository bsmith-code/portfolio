import styled from 'styled-components'

interface IProps {
  title: string
}

const LayoutViewTitle = ({ title }: IProps): JSX.Element => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
)

const Wrapper = styled.section`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
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
const Title = styled.h1`
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
  @media screen and (min-width: 767px) {
    font-size: 30px;
  }
`

export default LayoutViewTitle
