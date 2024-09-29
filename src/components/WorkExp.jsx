import React from "react";

const WorkExperience = () => {
  return (
    <div className="flex w-full h-screen">
      <aside className=" h-full flex flex-col items-center justify-start my-8">
        <div className="w-[90%] flex flex-col items-center">
          <h2 className="font-brunoace text-3xl font-bold mb-8">Work Experience</h2>
          <div className="w-full flex justify-between items-center mb-4">
            <span className="text-2xl font-semibold">
              Digital Specialist Engineer
            </span>
            <span className="text-sm">10/2021 - Present</span>
          </div>
          <div className="w-full text-md space-y-4 ml-2">
            <p>
             - Developed a responsive, component-based website, reducing development time by 30% and enhancing cross-device UX.
            </p>
            <p>
              - Designed a secure mobile banking app UI with an OTP timer, boosting security by 20%.
            </p>
            <p>
              - Created reusable React JS components, improving client satisfaction by 15%.
            </p>
            <p>
              - Built a grid-based asset page and notification system for efficient data display.
            </p>
            <p>
              - Resolved UI issues in the attendance system, improving accuracy and maintainability.
            </p>
            <p>
              - Integrated APIs for dynamic data visualization, increasing accuracy by 20%.
            </p>
            <p>- Mentored the team, boosting productivity by 15%.</p>
            
          </div>
        </div>
      </aside>
    </div>
  );
};

export default WorkExperience;
