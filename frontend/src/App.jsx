import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <>
        <Navbar />
        <Hero />
        <Menu />
        <Footer />
        </>
      }/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/login" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App