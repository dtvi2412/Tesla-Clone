import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fade from 'react-reveal/Fade';
function Section({ title, description, bgImage, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage={bgImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Button>
        <Fade bottom>
          <ButtonGroup>
            <ButtonLeft>{leftBtnText}</ButtonLeft>
            {rightBtnText && <ButtonRight>{rightBtnText}</ButtonRight>}
          </ButtonGroup>
        </Fade>
        <DownArrow>
          <KeyboardArrowDownIcon />
        </DownArrow>
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: orange;
  /* background-image: url('/images/red-tesla-model-x.jpg'); */
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
  h1 {
    color: #17181a;
    font-weight: 600;
    font-size: 3rem;
  }
  p {
    color: #332e2e;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
  @media (max-width: 565px) {
    padding-top: 20vh;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ButtonLeft = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;

  color: white;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  cursor: pointer;
  opacity: 0.85;
  text-transform: uppercase;
  margin: 10px;
  @media (max-width: 565px) {
    width: 200px;
    height: 30px;
  }
`;
const ButtonRight = styled(ButtonLeft)`
  background: #fff;
  color: #000;
  opacity: 0.65;
`;
const DownArrow = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  color: #fff;
  & > .MuiSvgIcon-root {
    font-size: 3rem;
    color: #fff;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
