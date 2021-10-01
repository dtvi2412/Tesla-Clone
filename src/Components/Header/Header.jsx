import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../../features/carSilce/carSilce';
import { useSelector } from 'react-redux';
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a href="#logo">
        <img
          src="https://banner2.cleanpng.com/20190417/eoa/kisspng-logo-font-tesla-inc-typography-car-5cb7a2524c8954.3957115715555385143135.jpg"
          alt=""
        />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href="#12">
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="#shop">Shop</a>
        <a href="#acc">Account</a>
        <a href="#Menu">Menu</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BugerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => {
            return (
              <li>
                <a key={index} href="#12">
                  {car}
                </a>
              </li>
            );
          })}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Use Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BugerNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  img {
    width: 100%;

    height: 60px;
    object-fit: cover;
  }
  @media (max-width: 565px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;
const Menu = styled.div`
  display: flex;

  a {
    margin: 0 10px;
    text-decoration: none;
    font-weight: 900;
    cursor: pointer;
    padding: 10px;
    transition: all 0.5s;

    &:hover {
      background: #c4c3c3;
      border-radius: 15px;
    }
  }
  @media (max-width: 1268px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 10px;
    text-decoration: none;
    font-weight: 900;
    cursor: pointer;
    padding: 10px;
    transition: all 0.5s;
    &:hover {
      background: #c4c3c3;
      border-radius: 15px;
    }
  }
  @media (max-width: 565px) {
    a {
      /* display: none; */
    }
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BugerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 300;

  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;

  text-align: start;
  transform: ${(props) => (props.show ? 'translate(0)' : 'translate(100%)')};
  transition: transform 0.3s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      text-decoration: none;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
