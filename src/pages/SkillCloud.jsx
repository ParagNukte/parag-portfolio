import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import SkillSet from '../components/SkillSet';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin-left: 3rem;
`;

const Aside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.span`
  font-family: 'Bruno Ace', sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.1rem;
`;

const WordCloud = () => {
  const containerRef = useRef(null);

  const texts = [
    'HTML',
    'CSS',
    'JavaScript',
    'Bootstrap',
    'React',
    'React-Router',
    'Redux-toolkit',
    'Bootstrap',
    'Tailwind CSS',
    'NextJs',
    'API',
  ];

  const options = {
    radius: 290,
    maxSpeed: 'fast',
    initSpeed: 'slow',
    direction: 135,
    keep: true,
  };

  useEffect(() => {
    const tagCloudInstance = TagCloud(containerRef.current, texts, options);

    return () => {
      if (tagCloudInstance) {
        tagCloudInstance.destroy();
      }
    };
  }, []);

  return (
    <Container>
      <Aside>
        <Content ref={containerRef} />
      </Aside>
      <Aside>
        <SkillsContainer>
          <Title>SKILLS</Title>
          <SkillSet />
        </SkillsContainer>
      </Aside>
    </Container>
  );
};

export default WordCloud;
