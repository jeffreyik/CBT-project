import { Link } from "react-router-dom"
import bg from "../assets/splash.jpg"
import PrimaryBtn from "../components/PrimaryBtn"

const Login = () => {
  return (
    <div className="login flex h-screen">
        <img src={bg} alt="" className="w-[50%]" />
        <div className="max-w-[50%] w-[70em] m-auto login-container flex justify-center items-center">
            <form className="border-2 rounded-[10px] flex flex-col p-10 w-[60%]">
                <h1 className="text-3xl font-bold pb-10">Log In</h1>
                <input className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="email" placeholder="email" />
                <input className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="password" placeholder="password" />
                <PrimaryBtn text="Log In" />
                <p className="text-secondary pt-10">Don't have an account? <Link to="/signup" className="text-primary font-bold">Sign Up</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login