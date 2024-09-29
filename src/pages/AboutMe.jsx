
import ContactMeForm from "../components/ContactMeForm";
import EducationItem from "../components/EducationItem";
import styled from "styled-components";

const Section = styled.section` 
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "Bruno Ace", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
  width: 100%;
`;

const BorderDiv = styled.div`
  border-bottom: 2px solid white;
  padding: 1.25rem;
  border-radius: 1.5rem;
`;

const educationData = [
  {
    level: "Graduation",
    year: "2020",
    institution: "MIT Academy Of Engg. Pune",
    course: "BTech EnTC",
  },
  {
    level: "12th",
    year: "2015",
    institution: "SJ Shah Junior College, Navapur",
    course: "Science",
  },
  {
    level: "10th",
    year: "2013",
    institution: "SMT SM Chokhawala Little Angles' Academy, Navapur",
    course: "General Education",
  },
];

const AboutMe = () => {
  return (
    <div className="w-screen flex">
      <aside className="w-1/2 h-screen flex items-center justify-center">
        <Section>
          <Title>Education History</Title>
          <div className="space-y-4">
            {educationData.map((edu, index) => (
              <EducationItem
                key={index}
                level={edu.level}
                year={edu.year}
                institution={edu.institution}
                course={edu.course}
              />
            ))}
          </div>
        </Section>
      </aside>
      <aside className="w-1/2 h-screen flex items-center justify-center">
        <Section className="h-full w-full flex flex-col items-center justify-center">
          <BorderDiv>
            <Title>Get In Touch</Title>
          </BorderDiv>
          <ContactMeForm />
        </Section>
      </aside>
    </div>
  );
};

export default AboutMe;
