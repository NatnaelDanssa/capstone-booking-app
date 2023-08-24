import Link from "next/link";
import styled from "styled-components";

const Navigation = () => {
  return (
    <nav>
      <StyledAppTitle>Booking App</StyledAppTitle>
      <NavigationContainer>
        <li>
          <HomeButton href="/">Home</HomeButton>
        </li>
        <li>
          <AddEventButton href="/events/create">ADD EVENT</AddEventButton>
        </li>
      </NavigationContainer>
    </nav>
  );
};

export default Navigation;

const StyledAppTitle = styled.h1`
  color: teal;
  width: 100%;
  border: 1px;
  text-align: left;
  line-height: 1.4;
  letter-spacing: 0.025em;
  margin: 0 auto 1rem;
`;

const NavigationContainer = styled.ul`
  margin: 0;
  position: fixed;
  top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--footer-height);
  padding: 2rem;
  background-color: var(--dark-main);
  list-style-type: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;
const AddEventButton = styled(Link)`
  color: green;
  width: 170px;
  font-size: 1.2em;
  padding: 0.5rem 1rem;
  background-color: #7c0716;
  color: white;
  border: 2px solid #7c0716;
  border-radius: 20px;
  position: relative;
  text-align: center;
  a {
    text-decoration: none;
  }
  &:hover {
    background-color: #099584;
    color: white;
  }
`;
const HomeButton = styled(Link)`
  color: green;
  width: 170px;
  font-size: 1.2em;
  padding: 0.5rem 1rem;
  background-color: #7c0716;
  color: white;
  border: 2px solid #7c0716;
  border-radius: 20px;
  position: relative;
  text-align: center;
  a {
    text-decoration: none;
  }
  &:hover {
    background-color: #099584;
    color: white;
  }
`;
