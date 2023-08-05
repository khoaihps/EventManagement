import { Container } from "postcss";
import "./App.css";
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
import NavBarEvent from "./Components/NavBarEvent";
import HeadEvent from "./Components/HeadEvent";
import EventTabs from "./Components/EventTabs";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/customer/login" element={<></>}></Route>
        <Route path="/customer/register" element={<></>}></Route>
        <Route path="/customer/event" element={<NavBarEvent />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<CTASection></CTASection>}></Route>
        <Route path="/customer/login" element={<LogIn />}></Route>
        <Route path="/customer/register" element={<Register />}></Route>
        <Route path="/customer/event" element={<HeadEvent></HeadEvent>}></Route>
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
      <Footer></Footer>
    </div>
  );
};

export default App;
