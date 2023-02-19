import { courses } from "../constants/data"
import { Link } from "react-router-dom"
import ProgressBar from "./ProgressBar"

const Card = () => {

    const cardEl = courses.map(course => {
        return (
        <Link key={course.id} to={`courses/${course.id}`} className="hover:scale-105 transition-all">
            <article className='w-[320px] shadow-xl rounded-[10px] overflow-hidden'>
                <div className="thumbnail overflow-hidden">
                    <img src={course.img} alt="image of an ipad connected to a monitor" />
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

    return (
        <>
          { cardEl }
        </>
    )
}

export default Card