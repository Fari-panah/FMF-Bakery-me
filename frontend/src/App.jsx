import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import UserLayout from "./components/UserLayout/UserLayout";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<LogIn />} />
        <Route path="profile" element={<Profile />}/>

      </Route>
      
      
    </Routes>
  </BrowserRouter>
  )
}

export default App