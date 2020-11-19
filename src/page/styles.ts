import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 40px auto;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;

  h1 {
    font-size: 60px;
    font-weight: 900;
    color: #c90739;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    margin: 20px auto;

    img {
      width: 420px;
    }
  }
`;

export const Main = styled.div`
  margin: 40px auto;
  text-align: justify;

  p {
    margin-bottom: 20px;
  }

  span {
    display: flex;
  }

  & + h3 {
    margin-bottom: 40px;
  }
`;

export const Quote = styled.div`
  margin: 40px;
  display: flex;
  gap: 10px;

  img {
    height: 50px;
  }

  p {
    font-style: italic;
    color: ${shade(0.1, '#130325')};
  }

  svg {
    width: 10%;
  }
`;

export const Compare = styled.div`
  div {
    margin-top: 20px;

    strong {
      color: #c90739;
    }
  }
`;
