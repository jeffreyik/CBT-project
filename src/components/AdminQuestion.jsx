import { useAuthValue } from "../context/AuthContext"
import img1 from '../assets/laptop.png'

const AdminQuestion = () => {
    const { courses, loadingCourses } = useAuthValue()

    return (
        <>
            { loadingCourses ? 'Loading...' :  courses.map(course => {
        return (
            <div className="my-10 p-4 rounded-lg shadow-md">
                <div className="flex space-x-4">
                    <img className="w-[100px]" src={img1} alt="" />
                    <h2>{course.name}</h2>
                </div>
            </div>
        )
    }) }
        </>
    )
        
}

export default AdminQuestion;