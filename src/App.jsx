import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Project from "./pages/Project";
import ProjectDetails from "./pages/Project Details";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/projectDetails" element={<ProjectDetails/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
