import styled from 'styled-components'
import { rem } from 'polished'

export const StyledStudyGuide = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledStudyTitle = styled.h3`
  margin-bottom: 32px;
`

export const StyledStudyCategory = styled.button`
  display: block;
  font-size: ${rem(18)};
  margin-bottom: 20px;
`

export const StyledFlashCard = styled.div<{ showAnswer: boolean }>`
  display: flex;
  margin: 0 auto 40px auto;
  padding: 24px;
  max-width: 600px;
  transition: ${props => (props.showAnswer ? '0.5s' : '0s')};
  min-height: 300px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform-style: preserve-3d;
  box-shadow: 0px 0px 34px -3px rgba(0, 0, 0, 0.5);
  transform: ${props => (props.showAnswer ? 'rotateY(-180deg)' : '')};
  & > div {
    margin: auto;
    text-align: center;
    backface-visibility: hidden;
  }
  .answer {
    transform: rotateY(180deg);
    max-width: 100%;
  }
  .question {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  & > button {
    color: var(--charcoal);
    margin: 0 30px 30px;
    font-size: ${rem(20)};
  }
`
