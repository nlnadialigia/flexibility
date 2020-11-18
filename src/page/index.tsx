import React from 'react';
import { Container, Header } from './styles';
import logo from '../assets/logo.png';
import headerImage from '../assets/undraw_in_thought_gjsf.svg';
import PostIt from '../components/PostIt';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="O assunto é flexibilidade" />
        <div>
          <img src={headerImage} alt="Imagem de alguém pensando" />
          <PostIt />
        </div>
      </Header>
    </Container>
  );
};

export default LandingPage;
