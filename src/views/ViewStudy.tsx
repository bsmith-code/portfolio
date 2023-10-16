// Common
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useMemo, useState } from 'react'

// Constants
import { STUDY_GUIDE } from 'constants/index'

// Styles
import {
  StyledFlashCard,
  StyledStudyTitle,
  StyledStudyGuide,
  StyledPagination,
  StyledStudyCategory
} from 'styles/components/study.styles'
import { StyledButtonSubmit } from 'styles/components/contact.styles'

// Utils
import { shuffleArray } from 'helpers'

const ViewStudy = () => {
  const [showAnswer, setShowAnswer] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('')

  const preparedQuestions = useMemo(
    () => shuffleArray(STUDY_GUIDE?.[selectedCategory] ?? []),
    [selectedCategory]
  )

  const { question, answer } = preparedQuestions?.[currentIndex] ?? {}

  const handleNextQuestion = () => {
    setCurrentIndex(prev => {
      const preparedIndex = prev === preparedQuestions.length - 1 ? 0 : prev + 1

      return preparedIndex
    })
  }

  const handlePrevQuestion = () => {
    setCurrentIndex(prev => {
      const preparedIndex = prev === 0 ? preparedQuestions.length - 1 : prev - 1

      return preparedIndex
    })
  }

  useEffect(() => {
    if (!showAnswer) {
      handleNextQuestion()
    }
  }, [showAnswer])

  useEffect(() => {
    setShowAnswer(false)
  }, [currentIndex])

  useEffect(() => {
    setShowAnswer(false)
    setCurrentIndex(0)
  }, [selectedCategory])

  return selectedCategory ? (
    <>
      <StyledFlashCard
        onClick={() => setShowAnswer(prev => !prev)}
        showAnswer={showAnswer}
      >
        <div className="question">{question}</div>
        <div className="answer">{answer}</div>
        {/* <Markdown className="answer" remarkPlugins={[remarkGfm]}>
          {answer}
        </Markdown> */}
      </StyledFlashCard>
      <StyledPagination>
        <button type="button" onClick={handlePrevQuestion}>
          ❮
        </button>
        <span>
          {currentIndex + 1} / {preparedQuestions.length}
        </span>
        <button type="button" onClick={handleNextQuestion}>
          ❯
        </button>
      </StyledPagination>
      <StyledButtonSubmit
        center
        type="button"
        onClick={() => setSelectedCategory('')}
      >
        Back to categories
      </StyledButtonSubmit>
    </>
  ) : (
    <StyledStudyGuide>
      <StyledStudyTitle>Study Guide Categories</StyledStudyTitle>
      {Object.keys(STUDY_GUIDE).map(category => (
        <StyledStudyCategory
          type="button"
          key={`category-${category}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </StyledStudyCategory>
      ))}
    </StyledStudyGuide>
  )
}

export default ViewStudy
