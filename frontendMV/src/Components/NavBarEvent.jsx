import "../App.css";
import Logo from "../assets/img/white-logo.png";

const NavBarEvent = () => {
  return (
    <header className="bg-gray-800 sticky top-0 z-50 w-full">
      <div
        className={`mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8`}
      >
        <a className="block text-teal-600" href="/">
          <img src={Logo} style={{ height: 32 }}></img>
        </a>
      </div>
    </header>
  );
};

export default NavBarEvent;
