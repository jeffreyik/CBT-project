import Card from "../components/Card"
import ExamStatus from "../components/ExamStatus"

const Dashboard = () => {
  return (
    <div className="">
        <div>
            <h2 className='text-2xl font-bold pb-10 h-[100%]'>Exam Dashboard</h2>
            <div className="courses flex justify-between flex-wrap gap-10">
                <Card />
            </div>
            <ExamStatus />
        </div>
    </div>
  )
}

export default Dashboard