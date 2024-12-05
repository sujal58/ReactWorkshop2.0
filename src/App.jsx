import "./App.css";
import Layout from "./HOC/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Instructor from "./Pages/Instructor";
import Pages from "./Pages/Pages";
import Courses from "./Pages/Courses";

import { Route, Routes } from "react-router";
import Mainbody from "./Components/PageComponent/Mainbody";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Mainbody />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
