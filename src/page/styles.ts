import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 20px auto;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  place-items: center;

  img {
    margin: 20px auto;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: baseline;
    gap: 40px;
    margin-top: 40px;

    img {
      width: 350px;
    }
  }
`;
