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
import AuthService from "./services/auth.service";
import Profile from "./Components/Profile";
import NavBarProfile from "./Components/NavBarProfile";
import ChangePass from "./Components/ChangePassword";

const App = () => {
  const contactRef = useRef(null);
  const navigate = useNavigate();
  const user = !AuthService.getCurrentUser();

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
        <Route
          path="/customer/event"
          element={user ? <></> : <NavBar2 />}
        ></Route>
        <Route path="/customer/about" element={<NavBar2 />}></Route>
        <Route path="/customer/password" element={<NavBar2 />}></Route>
        <Route path="/customer/profile" element={<NavBarProfile />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<CTASection></CTASection>}></Route>
        <Route
          path="/customer/password"
          element={user ? <></> : <ChangePass />}
        ></Route>
        <Route
          path="/customer/login"
          element={user ? <LogIn /> : <></>}
        ></Route>
        <Route
          path="/customer/register"
          element={user ? <Register></Register> : <></>}
        ></Route>
        <Route
          path="/customer/event"
          element={user ? <LogIn /> : <HeadEvent />}
        ></Route>
        <Route path="/customer/about" element={<About />}></Route>
        <Route path="/customer/profile" element={<Profile />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Features></Features>}></Route>
        <Route
          path="/customer/event"
          element={user ? <></> : <EventTabs />}
        ></Route>
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
