import { courses } from "../constants/data"


const AdminQuestion = () => {
    const cards = courses.map(course => {
        return (
            <div className="my-10 p-4 rounded-lg shadow-md">
                <div className="flex space-x-4">
                    <img className="w-[100px]" src={course.img} alt="" />
                    <h2>{course.name}</h2>
                </div>
            </div>
        )
    })

    return (
        <>
            { cards }
        </>
    )
        
}

export default AdminQuestion;