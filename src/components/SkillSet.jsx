import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillSet() {
  const skills = [
    {
      skillName: "HTML",
      skillIcon: faHtml5, // Use actual icon
    },
    {
      skillName: "CSS",
      skillIcon: faCss3Alt,
    },
    {
      skillName: "JavaScript",
      skillIcon: faJsSquare,
    },
    {
      skillName: "Bootstrap",
      skillIcon: faBootstrap,
    },
    {
      skillName: "React",
      skillIcon: faReact,
    },
    {
      skillName: "React-Router",
      skillIcon: "/parag-portfolio/reactrouter.svg",
    },
    {
      skillName: "Redux-Toolkit",
      skillIcon: "/parag-portfolio/redux.svg",
    },
    {
      skillName: "Rest-API",
      skillIcon: "/parag-portfolio/restapi.svg",
    },
    {
      skillName: "Tailwind CSS",
      skillIcon: "/parag-portfolio/tailwind.svg",
    },
    {
      skillName: "Next JS",
      skillIcon: "/parag-portfolio/nextjs.svg",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {" "}
        {/* Add grid layout */}
        {skills.map((skill, index) => {
          return (
            <div
              className="flex items-center gap-4 hover:scale-105 cursor-default w-full p-3 border-2 rounded-xl shadow-md shadow-white  "
              key={index}
            >
              <span>
                {typeof skill.skillIcon === "string" ? ( // Check if skillIcon is a string
                  <img
                    src={skill.skillIcon} // Use <img> for custom SVGs
                    alt={skill.skillName}
                    className="w-6 h-6" // Adjust size as needed
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={skill.skillIcon} // Use FontAwesome icon
                    size="xl"
                    style={{ color: "#B197FC", padding: "2px" }}
                  />
                )}
              </span>
              {skill.skillName}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SkillSet;
