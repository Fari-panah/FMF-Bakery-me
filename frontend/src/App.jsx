import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Home Page (Without UsersList) */}
      <Route path="/" element={
        <>
        <Navbar />
        <Hero />
        <Menu />
        <Footer />
        </>
      }/>
        
        
    </Routes>
  </BrowserRouter>
  )
}

export default App