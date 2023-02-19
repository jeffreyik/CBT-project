import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import cam from "../assets/cam.png"
import Webcam from 'react-webcam'
import { useAuthValue } from '../context/AuthContext'

const Questions = () => {
  const { courses } = useAuthValue()
  const { testId } = useParams()
  const course = courses.find(course => course.id === testId)
  const { id, name, link } = course

  return (
    <>
    <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold'>{ name }</h1>
      </div>
    <div className='flex justify-between relative'>
      <div className="question">
      <iframe src={link} width="640" height="792" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
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