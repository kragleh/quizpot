"use client"
import { EditorCurrentQuestionContext, EditorQuizFileContext } from '@/app/editor/page'
import React, { useContext } from 'react'

const QuestionEditor = () => {
  const quizFileContext = useContext(EditorQuizFileContext)
  const currentQuestionIndexContext = useContext(EditorCurrentQuestionContext)

  if (!quizFileContext) {
    throw new Error("No quiz file context found")
  }

  if (!currentQuestionIndexContext) {
    throw new Error("No current question index context found")
  }

  return (
    <section className='h-full w-full'>
      <div className='h-full w-full'
        style={
          quizFileContext.quizFile.theme.background.includes('base64') ? 
            { backgroundImage: `url(${quizFileContext.quizFile.theme.background})` }
            :
            { backgroundColor: `${quizFileContext.quizFile.theme.background}` }
        }
      >
        {
          quizFileContext.quizFile.questions[currentQuestionIndexContext.currentQuestionIndex].question
        }
      </div>
      {/** add a question editor on the side */}
    </section>
  )
}

export default QuestionEditor