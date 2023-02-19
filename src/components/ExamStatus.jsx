import { courses } from "../constants/data"

const ExamStatus = () => {
  const courseName = courses.map(course => <h3 className="font-bold py-3" key={course.id}>{course.name}</h3>)
  const courseStatus = courses.map(course => <h3 className="font-bold py-3 text-greenStatus" key={course.id}>{course.status + "%"}</h3>)

  return (
    <div className="flex justify-between exam-status shadow-md rounded-[10px] mt-20 p-7">
        <div className="exam-paper w-[60%]">
            <h2 className="head font-bold text-secondary pb-4">Exam Paper</h2>
            <div>
                { courseName }
            </div>
        </div>
        <div className="status w-[30%]">
            <h2 className="head font-bold text-secondary pb-4">Status</h2>
            <div>
                { courseStatus }
            </div>
        </div>
    </div>
  )
}

export default ExamStatus