import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "./firebase";
import { AuthProvider } from "./context/AuthContext";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions"
import ErrorPage from "./pages/ErrorPage";
import Courses from "./pages/Courses";
import CourseLayout from "./pages/CourseLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import { useState, useEffect } from "react";
import VerifyEmail from "./pages/VerifyEmail";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(true)
  const [users, setUsers] = useState([{}])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
         
    const unsubscribe = await getDocs(collection(db, "users"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setUsers(newData);          
            setLoading(false)      
            console.log(users, newData);
        })
   
}

useEffect(()=>{
    fetchUsers();
}, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      fetchUsers();
     })
  }, [])

  return (
    <div className="app font-poppins">
    <Router>
      <AuthProvider value={{loading, users, setUsers, currentUser, timeActive, setTimeActive}}>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <SharedLayout/>
          </ProtectedRoute>
          }>
          <Route index element={<Dashboard/>} />
          <Route path="settings" element={<Settings/>} />
          <Route path="courses" element={<CourseLayout/>}>
            <Route index element={<Courses/>} />
            <Route path=":testId" element={<Questions/>} />
          </Route>
          <Route path="*" element={<ErrorPage/>} />
        </Route>
        <Route path="login" element={
          !currentUser?.emailVerified ? <Login /> : <Navigate to='/' replace />
        } />
        <Route path='admin' element={<Admin />} >
          <Route index element={<AdminDashboard />} />
        </Route>

        <Route path="signup" element={<Signup />} />
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
      </AuthProvider>
    </Router>
  </div>
  ) 
};

export default App;
