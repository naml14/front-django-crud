import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Mainpage.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  height: 100vh;
  text-align: center;
  background-color: white;
  font-family: "Montserrat", sans-serif;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 6em;
  font-weight: bold;
  color: #00249c;
  position: absolute;
  top: 30%;
  z-index: 1;
`;

const Subtitle = styled.h2`
  font-size: 4.5em;
  color: #00249c;
  position: absolute;
  top: 50%;
  z-index: 3;
  text-shadow: 3px 3px 0px white, 3px -3px 0px white, -3px 3px 0px white,
    -3px -3px 0px white;
`;

const PlaceholderImage = styled.img`
  margin: 0;
  position: relative;
  z-index: 2;
`;

const PlaceholderLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 80%;
  position: absolute;
  bottom: 20px;
  z-index: 4;
`;

const NavLink = styled.a`
  color: #40cee4;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: #e280be;
  }
`;

const Animation = styled.div`
  position: absolute;
  top: 0%;
  left: 125%;
  background-color: white;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  z-index: 0;
  box-shadow: 2px 2px 20px 10px rgba(139, 139, 139, 0.8),
    inset 0px 0px 0px 0px rgba(255, 255, 255, 0.1);
  animation: zoom 10s infinite;
`;

const MainPage = () => {
  return (
    <Container>
      <Animation />
      <PlaceholderLogo src="/assets/Imagologo_motion.svg" alt="Logo" />
      <Link to="/data">
        <PlaceholderImage src="/assets/Telefono-01.png" alt="Image" />
      </Link>
      <Title>BIENVENIDO A</Title>
      <Subtitle>MONITORING INNOVATION</Subtitle>
      <Nav>
        <NavLink href="https://monitoringinnovation.com/" target="_blank">
          MONITORINGINNOVATION
        </NavLink>
        <NavLink href="https://gpscontrol.co/" target="_blank">
          GPS CONTROL
        </NavLink>
        <NavLink href="#">Link repo front</NavLink>
        <NavLink
          href="https://github.com/naml14/djangocrud/tree/main"
          target="_blank"
        >
          Link repo back
        </NavLink>
      </Nav>
    </Container>
  );
};

export default MainPage;
