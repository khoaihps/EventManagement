import "../App.css";
import Carousel1 from "../assets/img/carousel1.png";
import Carousel3 from "../assets/img/carousel3.jpeg";
import LogoImg from "../assets/img/logo-img.png";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center h-screen">
      <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">Create your event with EVENTIST!</span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
          With EVENTIST, your event will not only meet your expectations but
          surpass them, leaving a lasting impression on everyone in attendance.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <Link to="/customer/event">
              <div className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
                <span className="absolute rounded-lg inset-0 border border-yellow-500 group-active:border-yellow-500"></span>
                <span className="block border rounded-lg border-yellow-500 bg-yellow-500 px-5 py-2.5 transition-transform active:border-yellow-500 active:bg-yellow-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Get started
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 lg:p-24">
        <img src={LogoImg} className="w-1/2 rounded-lg" alt="Logo" />
        <div>
          <img src={Carousel1} className="mb-8 rounded-lg" alt="Party" />
          <img src={Carousel3} className="rounded-lg" alt="Wedding" />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
