import "../App.css";
import MDA from "../assets/img/AnMai.jpg";
import TA from "../assets/img/AnhTran.jpg";
import DAK from "../assets/img/KhoaDoan.jpg";
import DHH from "../assets/img/HaiDo.jpg";
import VDM from "../assets/img/MinhVu.jpg";

const Team = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow dark:bg-white">
      <p className="text-3xl font-bold text-center text-black dark:text-yellow-500">
        Professional team
      </p>
      <p className="mb-12 text-xl font-normal text-center text-black dark:text-black">
        Meet the best team in world
      </p>
      <div className="flex flex-col items-center md:flex-row justify-evenly">
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <div className="relative block">
              <img
                alt="profil"
                src={DAK}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-black">Khoa Doan</p>
            <p className="text-xl font-light text-gray-500 dark:text-black">
              Back-end Developer
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <div className="relative block">
              <img
                alt="profil"
                src={MDA}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-black">An Mai</p>
            <p className="text-xl font-light text-gray-500 dark:text-black">
              Back-end Developer
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <div className="relative block">
              <img
                alt="profil"
                src={DHH}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-black">Hai Do</p>
            <p className="text-xl font-light text-gray-500 dark:text-black">
              Leader
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <div className="relative block">
              <img
                alt="profil"
                src={VDM}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-black">Minh Vu</p>
            <p className="text-xl font-light text-gray-500 dark:text-black">
              Front-end developer
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <div className="relative block">
              <img
                alt="profil"
                src={TA}
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-black">Anh Tran</p>
            <p className="text-xl font-light text-gray-500 dark:text-black">
              Front-end developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
