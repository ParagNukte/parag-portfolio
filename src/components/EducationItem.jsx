
import PropTypes from "prop-types";
import styled from "styled-components";

const EducationContainer = styled.div`
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
`;

const EducationDetails = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
  }
  p {
    margin: 0rem 1rem;
  }
    span{
    margin: 0rem 1rem;
    color: grey;
    }
`;

const Year = styled.p`
  color: #4a5568; /* Tailwind's text-gray-600 */
`;

function EducationItem({ level, year, institution, course }) {
  return (
    <EducationContainer>
      <EducationDetails>
        <h3>{level}</h3>
        <p>{institution}</p>
        <span>{course}</span>
      </EducationDetails>
      <Year>{year}</Year>
    </EducationContainer>
  );
}

EducationItem.propTypes = {
  level: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
};

export default EducationItem;
