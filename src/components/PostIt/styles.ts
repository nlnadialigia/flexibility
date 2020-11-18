import styled from 'styled-components';

export const Container = styled.div`
  /* margin-bottom: 20px; */
  position: relative;

  p {
    color: #120325;
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    position: relative;
    height: 400px;
    width: 500px;
    margin: auto;
    align-self: center;
    text-align: center;
    border: 3px solid #120325;
    box-shadow: 0 10px 10px 2px #120325;
    background: transparent;

    blockquote {
      margin: 20px;
    }
  }

  i {
    background-color: #aaa;
    display: block;
    height: 24px;
    width: 2px;
    position: absolute;
    left: 50%;
    top: -10px;
    z-index: 1;
  }

  i:after {
    content: '';
    background-color: #c90739;
    background-image: radial-gradient(
      25% 25%,
      circle,
      hsla(0, 0%, 100%, 0.3),
      hsla(0, 0%, 0%, 0.3)
    );
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.1),
      inset 3px 3px 3px hsla(0, 0%, 100%, 0.2),
      inset -3px -3px 3px hsla(0, 0%, 0%, 0.2),
      23px 20px 3px hsla(0, 0%, 0%, 0.15);
    height: 12px;
    left: -5px;
    position: absolute;
    top: -10px;
    width: 12px;
  }

  i:before {
    content: '';
    background-color: hsla(0, 0%, 0%, 0.1);
    box-shadow: 0 0 0.25em hsla(0, 0%, 0%, 0.1);

    height: 24px;
    width: 2px;
    left: 0;
    position: absolute;
    top: 0px;

    transform: rotate(57.5deg);
    transform-origin: 50% 100%;
  }
`;
