import { Container } from "postcss";
import "./App.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Register from "./Components/Register";
import LogIn from "./Components/LogIn";
import CTASection from "./Components/CTASection";
import Features from "./Components/Features";
import { Route, Routes } from "react-router-dom";
import Team from "./Components/Team";
import Review from "./Components/Review";
import QnA from "./Components/QnA";
import Footer from "./Components/Footer";
import HeadEvent from "./Components/HeadEvent";
import EventTabs from "./Components/EventTabs";
import NavBar2 from "./Components/NavBar2";
import About from "./Components/About";
import Contact from "./Components/Contact";

const App = () => {
  const contactRef = useRef(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Navbar onContactClick={handleContactClick} />}
        ></Route>
        <Route path="/customer/login" element={<></>}></Route>
        <Route path="/customer/register" element={<></>}></Route>
        <Route path="/customer/event" element={<NavBar2 />}></Route>
        <Route path="/customer/about" element={<NavBar2 />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<CTASection></CTASection>}></Route>
        <Route path="/customer/login" element={<LogIn />}></Route>
        <Route path="/customer/register" element={<Register />}></Route>
        <Route path="/customer/event" element={<HeadEvent></HeadEvent>}></Route>
        <Route path="/customer/about" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Features></Features>}></Route>
        <Route path="/customer/event" element={<EventTabs></EventTabs>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Team></Team>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Review></Review>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<QnA></QnA>}></Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={<Contact ref={contactRef} id="contact"></Contact>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
