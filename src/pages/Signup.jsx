import { auth } from "../firebase"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase"
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from '../context/AuthContext'
import { useRef } from "react"
import bg from "../assets/splash.jpg"
import PrimaryBtn from "../components/PrimaryBtn"
import { useState } from "react"

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()


  const navigate = useNavigate()

  const validatePassword = () => {
    let isValid = true
    if (passwordRef.current.value !== '' && confirmPasswordRef.current.value !== ''){
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      setLoading(true)
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then(() => {
          console.log(auth.currentUser)
          sendEmailVerification(auth.currentUser)
          .then(() => {
            const userObj = {
              id: auth.currentUser.uid,
              email: auth.currentUser.email
            }
            const docRef = addDoc(collection(db, 'users'), {
              user: userObj
            })
            setLoading(false)
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => {
            setLoading(false)
            alert(err.message)
          })
        })
    }
  }

  return (
    <div className="login flex h-screen">
        <img src={bg} alt="" className="w-[50%] fixed top-0" />
        <div className="max-w-[50%] ml-[50%] w-[70em] m-auto login-container flex justify-center items-center">
            <form className="border-2 rounded-[10px] flex flex-col p-10 w-[60%]">
                <h1 className="text-3xl font-bold pb-10">Create an Account</h1>
                <input ref={emailRef} className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="email" placeholder="email" />
                <input ref={passwordRef} className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="password" placeholder="password" />
                <input ref={confirmPasswordRef} className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="password" placeholder="confirm password" />
                <PrimaryBtn text="Sign Up" handleClick={register} disabled={loading} />
                <p className="text-secondary pt-10">Already have an account? <Link to="/login" className="text-primary font-bold">Log In</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Signup