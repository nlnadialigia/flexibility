import styled from 'styled-components';

export const FlipCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;

  div {
    width: 300px;
    min-height: 120px;
    font-size: 18px;
    background-color: transparent;
    border: 1px solid #120325;
    box-shadow: 0 10px 10px 2px #120325;
    display: flex;
    flex-direction: column;
    place-items: center;
    position: relative;

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 20px auto;

      color: #c90739;
    }

    p {
      display: flex;
      margin: 20px;
    }
  }
`;
