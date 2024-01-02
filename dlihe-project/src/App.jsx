import { Route, Routes } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Internship from "./Pages/Internship /Internship";
import Contact from "./Pages/Contact/Contact";
import Affiliation from "./Pages/affiliation/Affiliation";
import Academic from "./Pages/academic /Academic";
import About from "./Pages/aboutdlihe/About";
import Admission from "./Pages/Admission/Admission";
import { Schopage } from "./Pages/Scholarship/Schopage";
import News from "./Pages/News";
import NewsDetail from "./Pages/NewsDetail";
import EventDetail from "./Pages/EventDetail";
import Announcement from "./Pages/AllAnouncement";
import Lowerfoot from "./Pages/Footers/Lowerfoot";
import AdministrationPage from "./Pages/Administration/AdministrationPage";
import Campus from "./Pages/Campus/Campus";
import Student from "./Pages/StudentCouncil/Student"

import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intern" element={<Internship />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/affiliation" element={<Affiliation />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/about" element={<About />} />
        <Route path="/scholarship" element={<Schopage />} />
        <Route path="/news" element={<News />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/student" element={<Student/>}/>
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/campus" element={<Campus/>}/>
        <Route path="/administration" element={<AdministrationPage />} />
      </Routes>
      <Lowerfoot />
    </div>
  );
}

export default App;
