import Header from "./component/Header";
import Footer from "./component/Footer";
import Contact from "./pages/contact";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
       <Header />

       <Routes>
        
        <Route path={'/'} element={<Home />}/>
        <Route path={'/contact'} element={<Contact />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App;
