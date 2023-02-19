import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const AddQuestions = () => {
    const nameRef = useRef()
    const linkRef = useRef()

    const add = e => {
        e.preventDefault()
          const docRef = addDoc(collection(db, 'courses'), {
            name: nameRef.current.value,
            link: linkRef.current.value
          })
        console.log(nameRef.current.value)
        console.log(linkRef.current.value)
    }

    return (
        <div>
            <h1 className="text-2xl font-bold pb-10">Add a Course</h1>
            <form className="flex flex-col w-[50%]">
                <input ref={nameRef} className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="text" placeholder="Enter name of course here" />
                <input ref={linkRef} className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="text" placeholder="Enter course link" />
                <button onClick={add} className='bg-primary text-white py-3 rounded-[10px] font-bold hover:bg-neutral-900'>Save Course</button>
            </form>
        </div>
    )
}

export default AddQuestions;