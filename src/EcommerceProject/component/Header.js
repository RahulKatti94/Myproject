// import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";


const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;


const Header = () =>{


    
    return (    
        <MainHeader>
           <NavLink to="/">
            <img className="logo" src="./images/shopify-logo.png " alt=" Comapny Logo" />
           </NavLink>
           <Nav />
        </MainHeader>
    )
}

export default Header;