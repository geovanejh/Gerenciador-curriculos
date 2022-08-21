import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/"> Dashboard </Link>
        <Link to="/candidatos"> Candidatos </Link>
      </ul>
    </nav>
  );
};
export default Nav;
