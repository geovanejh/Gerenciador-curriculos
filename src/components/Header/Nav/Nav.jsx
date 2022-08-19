import { Link } from "react-router-dom";
import { NavbarContainer } from "./Nav.styled";

const Nav = () => {
  return (
    <NavbarContainer>
      <ul>
        <Link to="/"> Dashboard </Link>
        <Link to="/candidatos"> Candidatos </Link>
      </ul>
    </NavbarContainer>
  );
};
export default Nav;
