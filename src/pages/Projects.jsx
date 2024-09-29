import InfoCard from "../components/InfoCard";
import WorkExperience from "../components/WorkExp";
const projects = [
  {
    projectName: "Blog Post Application",
    projectDesc: `Create and share your thoughts effortlessly with our blog post app!
          Whether you’re a seasoned writer or just starting out, our intuitive
          platform offers customizable templates, seamless multimedia
          integration, and powerful SEO tools to help your content shine.
          Connect with readers, track engagement, and grow your audience—all in
          one place. Start blogging today and make your voice heard!`,
  },
  {
    projectName: "Todo List",
    projectDesc: `Create and share your thoughts effortlessly with our blog post app!
          Whether you’re a seasoned writer or just starting out, our intuitive
          platform offers customizabl!`,
  },
  {
    projectName: "Next JS ",
    projectDesc: `Create and shseamless multimedia
          integration, and powerful SEO tools to help your content shine.
          Connect with readers, track engagement, and grow your audience—all in
          one place. Start blogging today and make your voice heard!`,
  },
  {
    projectName: "QR comp",
    projectDesc: `Create and share your thoughts effortlessly with our blog post app!
          Whether you’re a seasoned writer or just starting out, our intuitive
          platform offers customizable templates, seamless multimedia
          integration, and  to help your content shine.
          Connect with readers, track engagement, and grow your audience—all in
          one place. Start blogging today and make your voice heard!`,
  },
];
function Projects() {
  return (
    <>
      <div className="w-screen flex">
        <aside className="w-1/2 flex items-center flex-wrap h-screen overflow-scroll gap-8 p-8">
          {projects.map((project, index) => (
            <InfoCard
              key={index}
              projectName={project.projectName}
              projectDesc={project.projectDesc}
            />
          ))}
        </aside>
        <div className="flex w-1/2 ">
          <WorkExperience />
        </div>
      </div>
    </>
  );
}

export default Projects;
