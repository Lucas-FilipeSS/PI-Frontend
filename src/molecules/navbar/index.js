import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import fertilizerLogo from '../../assets/fertilizerLogo.svg';

const StyledNavbar = styled(Navbar)`
  &&& {
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
    background: transparent;
    transition: background 0.2s, border-bottom 0.2s;
    background: #424242;
    border-bottom: 2px solid #4caf50;
  }
`;

const Login = styled(Link)`
  &&& {
    background: transparent;
    font-size: 18px;
    height: 55px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s;
    width: 122px;

    color: #4caf50;
    &:hover {
      color: #fff;
    }
  }
`;
const Register = styled(Link)`
  &&& {
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    height: 100%;
    padding: 15px;
    margin: 0 30px;
    text-align: center;
    text-decoration: none;
    transition: background 0.2s, color 0.2s, border 0.2s;
    width: 122px;
    color: #4caf50;
    &:hover {
      color: #fff;
      background: #4caf50;
    }
    border: 2px solid #4caf50;
  }
`;

const Btns = styled.div`
  margin-left: auto;
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    margin-left: 30px;
    max-height: auto;
    max-width: 60px;
  }
  &:hover {
    & > p {
      color: #f5f5f6;
      transition: color 0.2s;
    }
  }
`;
const LogoName = styled.p`
  color: #4caf50;
  font-size: 24px;
  font-family: 'Roboto Slab', serif;
  font-weight: 500;
  margin: 0;
`;

function NavbarDefault() {
  return (
    <>
      <StyledNavbar fixed="top">
        <Logo to="/">
          <img src={fertilizerLogo} alt="Logo" />
          <LogoName>RE ALIMENTE</LogoName>
        </Logo>
        <Btns>
          <Login to="/login">Login</Login>
          <Register to="/register">Cadastre-se</Register>
        </Btns>
      </StyledNavbar>
    </>
  );
}

export default NavbarDefault;
