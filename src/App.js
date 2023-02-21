import Header from "./component/Header";
import Footer from "./component/Footer";
import Contact from "./pages/contact";
import Home from "./pages/home";
import List from "./pages/list";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { JobListProvider } from "./context/jobList";

function App() {
  return (
    <>
      <JobListProvider>
        <Header />

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/list"} element={<List />} />
        </Routes>

        <Footer />
      </JobListProvider>
    </>
  );
}

export default App;
