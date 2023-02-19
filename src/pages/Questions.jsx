import { useState } from 'react'
import { courses } from '../constants/data'
import { useParams, Link } from 'react-router-dom'
import cam from "../assets/cam.png"
import Webcam from 'react-webcam'

const Questions = () => {
  const { testId } = useParams()
  const course = courses.find(course => course.id === testId)
  const { id, name, questionsLink } = course

  return (
    <>
    <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold'>{ name }</h1>
      </div>
    <div className='flex justify-between relative'>
      <div className="question">
      
      {/* {
        questions.map(question => {
            return (
              <div key={question.id} className="question-wrapper shadow-md rounded-md p-5 my-10 w-[550px]">
                <h2 className="question text-[20px] font-bold pb-4">{question.question}</h2>
                  <form id="question" className="options text-secondary flex flex-col gap-4">
                    <label>
                      <input type="checkbox" name="question" />
                      {question.options.a}
                    </label>
                    <label>
                    <input type="checkbox" name="question" />
                      {question.options.b}
                    </label>
                    <label>
                    <input type="checkbox" name="question" />
                      {question.options.c}
                    </label>
                  </form>
              </div>
            )
        })
      } */}
      <iframe src={questionsLink} width="640" height="792" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    </div>
    <aside className="fixed ml-[50%] mt-5">
        <div className="cam rounded-lg overflow-hidden w-[300px] h-[300px]">
          <Webcam />
        </div>
    </aside>
    </div>
    </>

  )
}

export default Questions