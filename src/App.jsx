import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions"
import ErrorPage from "./pages/ErrorPage";
import Courses from "./pages/Courses";
import CourseLayout from "./pages/CourseLayout";
import Login from "./pages/Login";

const App = () => (
  <div className="app font-poppins">
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path="settings" element={<Settings/>} />
          <Route path="courses" element={<CourseLayout/>}>
            <Route index element={<Courses/>} />
            <Route path=":testId" element={<Questions/>} />
          </Route>
          <Route path="*" element={<ErrorPage/>} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  </div>
);

export default App;
