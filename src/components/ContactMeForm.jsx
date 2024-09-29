import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Tooltip as ReactTooltip } from "react-tooltip";

function ContactMeForm() {
  const hoverIcon =
    "hover:scale-125 hover:delay-25 hover:drop-shadow-glow bg-transparent text-white font-bold py-2 px-4 rounded";
  const sendMessage = () => {
    const phoneNumber = "+917744889906"; // Replace with the recipient's phone number
    const message = "Hello, this is a test message!"; // Replace with your message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const handleMailClick = () => {
    const email = "paragnuktek@gmail.com";
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="flex gap-8 w-3/6 justify-center flex-wrap my-16 ">
      <button
        data-tooltip-id="my-tooltip"
        data-tooltip-content="paragnuktek@gmail.com"
      >
        <div
          className={`${hoverIcon} bg-red-500  hover:bg-red-700`}
          onClick={handleMailClick}
        >
          <FontAwesomeIcon
            className="bg-transparent hover:drop-shadow-glow"
            size="2xl"
            icon={faEnvelope}
          />
        </div>
      </button>
      <ReactTooltip
        style={{ borderRadius: "25px" }}
        id="my-tooltip"
        type="dark"
        effect="solid"
      />
      <button
        onClick={() =>
          window.open(
            "https://github.com/ParagNukte/",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <div className={`${hoverIcon} bg-gray-700   `}>
          <FontAwesomeIcon
            className="bg-transparent hover:drop-shadow-glow"
            icon={faGithub}
            size="2xl"
          />
        </div>
      </button>

      <button
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/paragnukte/",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <div className={`${hoverIcon} bg-blue-500`}>
          <FontAwesomeIcon
            className="bg-transparent hover:drop-shadow-glow"
            icon={faLinkedin}
            size="2xl"
          />
        </div>
      </button>

      <button>
        <div
          className={`${hoverIcon} bg-green-500 hover:bg-green-700 `}
          onClick={sendMessage}
        >
          <FontAwesomeIcon
            className="bg-transparent hover:drop-shadow-glow"
            size="2xl"
            icon={faWhatsapp}
          />
        </div>
      </button>
    </div>
  );
}

export default ContactMeForm;
