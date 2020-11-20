import React from 'react';
import { FlipCard } from './styles';

const Cards: React.FC = () => {
  const tips = [
    {
      title: 'Pratique a resiliência',
      content:
        'A resiliência é a habilidade que o indivíduo tem de compreender as dificuldades e experiências negativas pelas quais passa, buscando aprendizado em todas elas e não se deixando abater, pelo contrário, seguindo em frente, sabendo que, com certeza, algo de positivo vai surgir, em breve, em sua jornada. Neste sentido, para que você desenvolva a sua flexibilidade não se apegue a situações difíceis e busque crescer perante as mesmas, encontrando mecanismos para transformá-las a seu favor.',
    },
    {
      title: 'Aprimore seus conhecimentos',
      content:
        'A busca por novos conhecimentos sempre nos traz a oportunidade de enxergar o mundo ao nosso redor com outros olhos e de expandir nossos horizontes e a nossa realidade, de forma efetiva. Assim, é importante que você busque sempre fazer novos cursos, treinamentos, participar de palestras, workshops, reuniões, entre outros momentos, que vão lhe permitir ter uma nova visão sobre as coisas e, com isso, se tornar cada vez mais flexível.',
    },
    {
      title: 'Desenvolva novas estratégias',
      content:
        'Muitas vezes acabamos insistindo no mesmo método de execução de uma tarefa, ainda que ele não esteja trazendo o resultado desejado. No entanto, é importante expandir os horizontes e investir em novas ferramentas e estratégias que lhe auxiliem na conquista de suas metas.',
    },
    {
      title: 'Feedbacks construtivos',
      content:
        'Quando descobrimos em quais pontos estamos falhando e quais têm sido positivos, identificamos as mudanças que devemos realizar. Para que feedbacks sejam eficazes, é necessário recebê-los como algo construtivo, e não como uma crítica. ',
    },
    {
      title: 'Livre-se da postura defensiva',
      content:
        'Muitas pessoas sentem-se atacadas quando são sugeridas algumas mudanças no método de execução do trabalho ou nas tarefas que devem ser realizadas. Para exercer a flexibilidade, é ideal que a pessoa encare as mudanças como uma nova oportunidade de autodesenvolvimento e crescimento da empresa.',
    },
    {
      title: 'Trabalhe o autoconhecimento',
      content:
        'As soft skills estão muito ligadas à inteligência emocional e para desenvolver esse aspecto é necessário ter autoconhecimento. Só assim, você consegue reconhecer as suas habilidades e perceber em que precisa melhorar. Além disso, consegue identificar o que desencadeia as suas emoções e evita agir por impulso.',
    },
  ];

  return (
    <FlipCard>
      {tips.map((tip) => (
        <div key={tip.title} id="card">
          <h2>{tip.title}</h2>
          <p id="content">{tip.content}</p>
        </div>
      ))}
    </FlipCard>
  );
};

export default Cards;
