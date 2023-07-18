import "../App.css";
import MDA from "../assets/img/MaiDucAn.jpeg";
import TA from "../assets/img/TranAnh.jpeg";
import DAK from "../assets/img/DoanAnhKhoa.jpeg";

const Team = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow dark:bg-white">
      <p className="text-3xl font-bold text-center text-black dark:text-yellow-500">
        Professional team
      </p>
      <p className="mb-12 text-xl font-normal text-center text-black dark:text-black">
        Meat the best team in wolrd
      </p>
      <div className="flex flex-col items-center md:flex-row justify evenly">
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src={DAK}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-black">
              Patrick Sebastien
            </p>
            <p className="text-xl font-light text-gray-500 dark:text-black">
              Developpeur
            </p>
            <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-black">
              Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde,
              is an imitator.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src={MDA}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-black">
              Jean Castux
            </p>
            <p className="text-xl font-light text-gray-500 dark:text-black">
              Founder
            </p>
            <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-black">
              Jean Castux is an imitator, humorist, actor, born November 14,
              1953 in Pontivy.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src={TA}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-black">
              Thierry Halliday
            </p>
            <p className="text-xl font-light text-gray-500 dark:text-black">
              CTO
            </p>
            <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-black">
              Thierry Halliday, born November 4, 1993 in Saint hilaire de riez,
              is css specialist.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src={TA}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-black">
              Thierry Halliday
            </p>
            <p className="text-xl font-light text-gray-500 dark:text-black">
              CTO
            </p>
            <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-black">
              Thierry Halliday, born November 4, 1993 in Saint hilaire de riez,
              is css specialist.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src={TA}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-black">
              Thierry Halliday
            </p>
            <p className="text-xl font-light text-gray-500 dark:text-black">
              CTO
            </p>
            <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-black">
              Thierry Halliday, born November 4, 1993 in Saint hilaire de riez,
              is css specialist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
