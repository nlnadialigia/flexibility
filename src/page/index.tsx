import React from 'react';
import { FcIdea } from 'react-icons/fc';
import { Compare, Container, Header, Main, Quote } from './styles';
import headerImage from '../assets/undraw_in_thought_gjsf.svg';
import PostIt from '../components/PostIt';
import smileThinking from '../assets/emoji.png';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>O assunto é: Flexibilidade!!!</h1>
        {/* <img src={logo} alt="O assunto é flexibilidade" /> */}
        <div>
          <img src={headerImage} alt="Imagem de alguém pensando" />
          <PostIt />
        </div>
      </Header>
      <Main>
        <h3>
          Agora que já conhecemos a definição de flexibilidade, vamos analisar a
          importância dela nas nossas soft skills?
        </h3>
        <Quote>
          <FcIdea size={40} />
          <p>
            As “soft skills” são habilidades subjetivas, de difícil
            identificação e diretamente relacionadas à inteligência emocional
            das pessoas. Estas capacidades são, normalmente, adquiridas por meio
            das experiências vivenciadas ao longo do tempo – e não em livros e
            cursos.
          </p>
        </Quote>
        <p>
          O mercado de trabalho vem sofrendo alterações, e, com isso, as pessoas
          têm tido que se adaptar à essas mudanças. Caso contrário, elas não se
          destacam da concorrência e, consequentemente, perdem oportunidades.
        </p>
        <p>
          Por conta disso, eu considero a flexibilidade uma das soft skills mais
          importante. Com ela, as pessoas são capazes de se adaptar as mudanças.
        </p>
        <p>
          Pessoas flexíveis são empáticas, ou seja, são capazes de se colocar no
          lugar da outra pessoa e olhar além do ponto de vista individual. Tal
          característica facilita as relações interpessoais e, consequentemente,
          o trabalho em equipe. Além disso, elas compartilham novos
          conhecimentos e são capazes de ouvir opiniões distintas. Logo, as
          informações são difundidas e os atritos são evitados.
        </p>
        <p>
          Por isso, ser uma pessoa flexível no ambiente de trabalho é essencial
          para um bom convívio e uma atuação de destaque em qualquer que seja a
          área.
        </p>
        <h3>
          Ainda não te convenci? Então vamos analisar a flexibilidade em
          conjunto com outras soft skills.
        </h3>
        <Compare>
          <div>
            <strong>Comunicação: </strong>
            <p>
              Capacidade de se fazer entender de maneira clara e eficaz, sempre
              levando em consideração seu público-alvo. Para uma comunicação
              eficaz é extremamente importante não só saber falar, mas também
              saber ouvir.
            </p>
            <Quote>
              <img src={smileThinking} alt="Smile Pensando" />
              <p>
                Agora pensa comigo.... quantas pessoas inflexíveis que vocês
                conhecem que sabem ouvir?
              </p>
            </Quote>
          </div>
          <div>
            <strong>Colaboração: </strong>
            <p>
              Trabalhar bem em grupo é essencial para construir um grupo de alto
              rendimento. É nesse momento que temos várias cabeças pensando
              juntas para um objetivo em comum, os que faz com que as
              habilidades de cada um se complementem.
            </p>
            <Quote>
              <img src={smileThinking} alt="Smile Pensando" />
              <p>
                Dessa vez ficou fácil... se ninguém ceder... onde é que entra o
                trabalho em grupo????
              </p>
            </Quote>
          </div>
          <div>
            <strong>Liderança: </strong>
            <p>
              Exercer uma boa gestão de pessoas implica saber motivar e engajar
              as pessoas do seu time, identificando as melhores competências de
              cada um, sabendo aplicá-las em prol das metas estabelecidas. Ser
              um bom líder também significa mostrar segurança e dar exemplo.
            </p>
            <Quote>
              <img src={smileThinking} alt="Smile Pensando" />
              <p>
                Não consigo nem imaginar como um bom líder pode ser inflexível.
                Como ele vai conseguir identificar competências que divergem do
                seu ponto de vista?
              </p>
            </Quote>
          </div>
        </Compare>
      </Main>
    </Container>
  );
};

export default LandingPage;
