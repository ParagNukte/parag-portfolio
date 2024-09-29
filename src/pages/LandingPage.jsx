
import { Spotlight } from '../components/ui/Spotlight';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 2rem;
`;

const DesktopCentric = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
  margin-left: 0.5rem;
`;

const TitleContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  line-height: 1;
`;

const Title = styled.span`
  font-family: 'Bruno Ace', sans-serif;
  font-size: 8rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  transform: scaleY(1.25);
  background-color: transparent;
`;

const Year = styled.span`
  margin-left: 1rem;
  font-size: 1.25rem;
  background-color: #f87171; /* Tailwind's bg-red-400 */
  padding: 0.25rem 1.75rem;
  border-radius: 1.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
 font-family:'Bruno Ace', sans-serif;
  font-size: 1.1rem;
  width: 75%;
  flex-shrink: 0;
  font-weight: 300;
  margin-left:0.5rem;
`;

const Divider = styled.div`
  width: 55.33%; /* Tailwind's w-7/12 */
  height: 1px;
  background-color: white;
  margin: 1rem 0;
`;

const LandingPage = () => {
  return (
    <>
      <Container>
        <DesktopCentric className='font-brunoace'>Desktop Centric</DesktopCentric>
        <TitleContainer>
          <Title>portfolio</Title>
          <Year>2024</Year>
        </TitleContainer>
        <InfoContainer>
          <div className='font-brunoace'>Frontend Developer</div>
          <Divider />
          <div className='font-brunoace'>Parag Nukte</div>
        </InfoContainer>
      </Container>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
    </>
  );
};

export default LandingPage;
