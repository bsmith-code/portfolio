import { useMemo, useState } from 'react'
import { rem } from 'polished'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {
  Button,
  Card,
  IconButton,
  Stack,
  styled,
  Typography,
} from '@mui/material'

import { shuffleArray } from 'utils/arrays.utils'

import { STUDY_GUIDE } from 'constants/study.constants'

const StyledCard = styled(Card)<{ showAnswer: boolean }>`
  width: 100%;
  display: flex;
  max-width: 600px;
  min-height: 300px;
  overflow: visible;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform-style: preserve-3d;
  padding: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  transition: ${({ showAnswer }) => (showAnswer ? '0.5s' : '0s')};
  transform: ${({ showAnswer }) => (showAnswer ? 'rotateY(-180deg)' : '')};
  & > div {
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

export const ViewStudy = () => {
  const [showAnswer, setShowAnswer] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('')

  const preparedQuestions = useMemo(
    () => shuffleArray(STUDY_GUIDE?.[selectedCategory] ?? []),
    [selectedCategory]
  )

  const { question, answer } = preparedQuestions?.[currentIndex] ?? {}

  const handleNextQuestion = () => {
    setShowAnswer(false)
    setCurrentIndex(prev => {
      const preparedIndex = prev === preparedQuestions.length - 1 ? 0 : prev + 1

      return preparedIndex
    })
  }

  const handlePrevQuestion = () => {
    setShowAnswer(false)
    setCurrentIndex(prev => {
      const preparedIndex = prev === 0 ? preparedQuestions.length - 1 : prev - 1

      return preparedIndex
    })
  }

  const handleChangeCategory = (category: string) => {
    setCurrentIndex(0)
    setShowAnswer(false)
    setSelectedCategory(category)
  }

  const handleToggleAnswer = () => {
    setShowAnswer(prev => !prev)
    if (showAnswer) {
      handleNextQuestion()
    }
  }

  if (selectedCategory) {
    return (
      <Stack alignItems="center">
        <StyledCard
          elevation={10}
          showAnswer={showAnswer}
          onClick={handleToggleAnswer}
        >
          <div className="question">{question}</div>
          <div className="answer">{answer}</div>
        </StyledCard>
        <Stack mb={4} direction="row" gap={3} alignItems="center">
          <IconButton onClick={handlePrevQuestion}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography fontSize={rem(14)}>
            {currentIndex + 1} / {preparedQuestions.length}
          </Typography>
          <IconButton onClick={handleNextQuestion}>
            <ChevronRightIcon />
          </IconButton>
        </Stack>
        <Button onClick={() => handleChangeCategory('')} variant="contained">
          Back to categories
        </Button>
      </Stack>
    )
  }

  return (
    <Stack alignItems="center">
      <Typography fontWeight={700} sx={{ mb: 3 }}>
        Study Guide Categories
      </Typography>

      {Object.keys(STUDY_GUIDE).map(category => (
        <Button
          fullWidth
          variant="outlined"
          key={`category-${category}`}
          sx={{ mb: 2, maxWidth: '300px' }}
          onClick={() => handleChangeCategory(category)}
        >
          {category}
        </Button>
      ))}
    </Stack>
  )
}
