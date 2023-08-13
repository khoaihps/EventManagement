import "../App.css";
import "../assets/css/PopUp.css";

const PopUp = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn text-gray-500 transition hover:text-gray-600"
          onClick={() => props.setTrigger(true)}
        >
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};
export default PopUp;
