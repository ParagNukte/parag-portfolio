// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const hoverIcon =
    "hover:scale-125 hover:delay-25 hover:drop-shadow-glow bg-transparent";

  const pdfUrl = `/ParagNukte_Resume_FrontendDev.pdf`;

  return (
    <div className=" w-screen h-screen section  flex justify-between">
      <div className="flex flex-col w-1/2 items-center justify-center ">
        <video width="90%" loop autoPlay muted>
          <source src="/parag-portfolio/welcome_vid.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>

      <div className="flex flex-col w-1/2  text-balance  mt-20 ">
        <div className=" font-brunoace text-3xl mx-4">Introduction</div>
        <div className="flex mt-10 mx-4 w-10/12 text-balance ">
          Dedicated Front-End Developer skilled in JavaScript, React, and
          Bootstrap. Experienced in creating dynamic, responsive websites and
          mobile apps, with a focus on API integration and user-friendly
          features. Known for building reusable UI components, optimizing
          performance, and committed to writing clean code and enhancing user
          engagement. Strong problem-solver and team player, recognized for
          mentoring teammates and demonstrating leadership qualities.
          Consistently delivers high-quality, professional results.
        </div>
        <div className="flex w-10/12 justify-end">
          <a href={pdfUrl} download="ParagNukte_Resume_FrontendDev.pdf">
            <button className="mt-12 border-2 border-white animate-borderRotate p-2 rounded-xl hover:scale-110 transition-transform text-md ">
              Download Resume
              <FontAwesomeIcon
                icon={faDownload}
                size="lg"
                beat
                className="ml-4"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
