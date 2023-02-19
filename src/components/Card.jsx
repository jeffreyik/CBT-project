import { Link } from "react-router-dom"
import { useAuthValue } from "../context/AuthContext"
import img1 from "../assets/laptop.png"

const Card = () => {
    const { courses, loadingCourses } = useAuthValue()

    return (
        <>
          { loadingCourses ? "loading..." :
          courses.map(course => {
            return (
            <Link key={course.id} to={`courses/${course.id}`} className="hover:scale-105 transition-all">
                <article className='w-[320px] shadow-xl rounded-[10px] overflow-hidden'>
                    <div className="thumbnail overflow-hidden">
                        <img src={img1} alt="image of an ipad connected to a monitor" />
                    </div>
                    <div className='p-3'>
                        <div className='flex justify-between py-3'>
                            <h3>{course.name}</h3>
                            <p className="status text-secondary font-bold">{course.time}</p>
                        </div>
                    </div>
                    </article>
            </Link>
            )
        })
           }
        </>

    )
}

export default Card