import bg from "../assets/splash.jpg"
import PrimaryBtn from "../components/PrimaryBtn"
import { useRef, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuthValue } from "../context/AuthContext"
import { auth } from "../firebase"
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth"

const AdminLogin = () => {
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    setLoading(true)
    console.log(loading)
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then(() => {
      console.log(auth.currentUser)
      setLoading(false)
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
        .catch(err => alert(err.message))
      } else {
        navigate('/admin')
      }
    })
    .catch(err => {
      setLoading(false)
      alert(err.message)
    })
    console.log(loading)
  }

  return (
    <div className="login flex h-screen">
        <img src={bg} alt="" className="w-[50%] fixed top-0 hidden md:block" />
        <div className="md:max-w-[50%] w-[100%] md:w-[70em] m-auto login-container flex justify-center items-center md:ml-[50%]">
            <form className="border-2 rounded-[10px] flex flex-col p-10 w-[60%]">
                <h1 className="text-3xl font-bold pb-10">Admin Login</h1>
                <input ref={emailRef} className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="email" placeholder="email" />
                <input ref={passwordRef} className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="password" placeholder="password" />
                <PrimaryBtn disabled={loading} text={'Log In'} handleClick={login} />
                <Link to="/login" className="text-primary font-medium text-center underline pt-4">Login as student</Link>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin