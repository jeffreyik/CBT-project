import { useAuthValue } from "../context/AuthContext"
import img1 from '../assets/laptop.png'
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase"

const AdminQuestion = () => {
    const { courses, loadingCourses } = useAuthValue()

    const deleteCourse = (id) => {
        const docRef = doc(db, "courses", id);
            deleteDoc(docRef)
            .then(() => {
                console.log("Entire Document has been deleted successfully.")
                signOut(auth)
            })
            .catch(error => {
            console.log(error);
            })
            console.log(id)
    }

    return (
        <>
            { loadingCourses ? 'Loading...' :  courses.map(course => {
        return (
            <div className="my-10 p-4 rounded-lg shadow-md flex items-center justify-between">
                <div className="flex space-x-4">
                    <img className="w-[100px]" src={img1} alt="" />
                    <h2>{course.name}</h2>
                </div>
                <button onClick={() => deleteCourse(course.id)} className="bg-red-600 text-white p-2 rounded-md cursor-pointer hover:bg-red-400">Delete</button>
            </div>
        )
    }) }
        </>
    )
        
}

export default AdminQuestion;