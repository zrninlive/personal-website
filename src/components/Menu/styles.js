import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #f5f5f5;
  width: 100%;
  max-width: 350px;
  height: 100vh;
  padding: 30px 0 60px 0;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 20px 10px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  h1 {
    margin: 10px 0;
    font-weight: normal;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const LinkPage = styled(Link)`
  margin: 15px 0;
  font-size: 2rem;
  transition: hover 0.2s;

  &:hover {
    color: #ff7777;
  }

  ${props =>
    props.active &&
    css`
      font-weight: bold;
      color: #ff7777;
    `}
`;

export const Contact = styled.div`
  margin-top: 5%;
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Footer = styled.footer`
  display: flex;

  align-items: center;
  justify-content: center;

  svg {
    margin: 0 5px;
  }
`;
