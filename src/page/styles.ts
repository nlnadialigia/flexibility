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
  flex-wrap: wrap;
  place-items: center;

  h1 {
    font-size: 60px;
    line-height: 70px;
    text-align: center;
    font-weight: 900;
    color: #c90739;
  }

  div {
    display: flex;
    flex-wrap: wrap;
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
  margin: 60px auto;
  margin-left: 30px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

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
  margin: 40px 60px 20px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 5px;

  img {
    height: 40px;
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
  margin-top: 40px;
  div {
    margin-top: 40px;

    strong {
      color: #c90739;
    }
  }
`;

export const Tips = styled.div`
  margin-bottom: 30px;
`;
