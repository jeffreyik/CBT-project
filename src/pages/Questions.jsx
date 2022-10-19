import { useState } from 'react'
import { courses } from '../constants/data'
import { useParams, Link } from 'react-router-dom'
import cam from "../assets/cam.png"

const Questions = () => {
  const { testId } = useParams()
  const course = courses.find(course => course.id === testId)
  const { id, name, questions } = course

  return (
    <>
    <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold'>{ name }</h1>
        <h2 className='font-bold text-[18px]'>Time Left <span className='text-secondary'>40:59</span></h2>
      </div>
    <div className='flex justify-between relative'>
      <div className="question">
      
      {
        questions.map(question => {
            return (
              <div key={question.id} className="question-wrapper shadow-md rounded-md p-5 my-10 w-[550px]">
                <h2 className="question text-[20px] font-bold pb-4">{question.question}</h2>
                <div className="options text-secondary flex flex-col gap-4">
                  <label>
                    <input type="checkbox" />
                    {question.options.a}
                  </label>
                  <label>
                  <input type="checkbox" />
                    {question.options.b}
                  </label>
                  <label>
                  <input type="checkbox" />
                    {question.options.c}
                  </label>
                </div>
              </div>
            )
        })
      }
    </div>
    <aside className="fixed ml-[50%] mt-5">
        <div className="cam">
          <img src={cam} alt="" />
        </div>
    </aside>
    </div>
    </>

  )
}

export default Questions