import styled from 'styled-components'

export const StyledFormResponse = styled.div`
  margin: 30px 0 0 0;
`

export const StyledFormWrapper = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 25px;
`

export const StyledInputError = styled.span`
  color: red;
  font-size: 12px;
  position: absolute;
  margin-top: 2px;
`

export const StyledButtonSubmit = styled.button<{ center: boolean }>`
  transition: all 0.2s ease;
  line-height: 1;
  font-weight: 700;
  font-size: 14px;
  padding: 10px 30px;
  display: block;
  text-align: center;
  vertical-align: middle;
  border-radius: 4px;
  background: #7ebaeb;
  color: #fff;
  margin: ${props => (props.center ? `16px auto` : `16px 0`)};
  &:hover {
    background: #5e9ed2;
  }
`
