import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Tooltip as ReactTooltip } from "react-tooltip";

function ContactMeForm() {
  const hoverIcon =
    "hover:scale-125 hover:delay-25 hover:drop-shadow-glow bg-transparent text-white font-bold py-2 px-4 rounded";

  const handleMailClick = () => {
    window.location.href = `mailto:paragnuktek@gmail.com`;
  };

  const sendMessage = () => {
    const url = `https://wa.me/+917744889906?text=${encodeURIComponent(
      "Hello, this is a test message!"
    )}`;
    window.open(url, "_blank");
  };

  const socialLinks = [
    {
      icon: faEnvelope,
      bgColor: "bg-red-500 hover:bg-red-700",
      onClick: handleMailClick,
      tooltip: "paragnuktek@gmail.com",
    },
    {
      icon: faGithub,
      bgColor: "bg-gray-600 hover:bg-gray-900", // Adjust hover color to be more visible
      onClick: () =>
        window.open(
          "https://github.com/ParagNukte/",
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      icon: faLinkedin,
      bgColor: "bg-blue-500 hover:bg-blue-700",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/paragnukte/",
          "_blank",
          "noopener,noreferrer"
        ),
    },
    {
      icon: faWhatsapp,
      bgColor: "bg-green-500 hover:bg-green-700",
      onClick: sendMessage,
    },
  ];

  return (
    <div className="flex gap-8 w-3/6 justify-center flex-wrap my-16">
      {socialLinks.map((link, index) => (
        <button
          key={index}
          data-tooltip-id={link.tooltip ? "my-tooltip" : undefined}
          data-tooltip-content={link.tooltip}
          onClick={link.onClick}
        >
          <div className={`${link.bgColor} ${hoverIcon}`}>
            <FontAwesomeIcon
              className="bg-transparent hover:drop-shadow-glow"
              icon={link.icon}
              size="2xl"
            />
          </div>
        </button>
      ))}
      {socialLinks.some((link) => link.tooltip) && (
        <ReactTooltip
          id="my-tooltip"
          type="dark"
          effect="solid"
          className="rounded-xl"
        />
      )}
    </div>
  );
}

export default ContactMeForm;
