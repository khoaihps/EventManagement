import "../App.css";
import MDA from "../assets/img/MaiDucAn.jpeg";
import TA from "../assets/img/TranAnh.jpeg";
import DAK from "../assets/img/DoanAnhKhoa.jpeg";

const Review = () => {
  return (
    <div className="flex items-center justify-center px-5 py-5">
      <div className="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
        <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
          <a href="#" className="relative block">
            <img
              alt="profil"
              src={TA}
              className="mx-auto object-cover rounded-full h-20 w-20 "
            />
          </a>
        </div>
        <div className="w-full mb-10">
          <div className="h-3 text-3xl leading-tight text-left text-indigo-500">
            “
          </div>
          <p className="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
            Eventist is an exceptional event planning company that goes above
            and beyond to create unforgettable experiences. Their attention to
            detail, creativity, and seamless execution make them the go-to
            choice for any event, big or small.
          </p>
          <div className="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="font-bold text-center text-indigo-500 text-md">
            Anh Chan
          </p>
          <p className="text-xs text-center text-gray-500 dark:text-gray-300">
            @anh.chan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
