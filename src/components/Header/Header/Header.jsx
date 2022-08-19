import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../../store/actions/AuthAction";
import { Button } from "../../Button/Button.styled";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { HeaderContainer } from "./Header.stytled";

const Header = ({ dispatch }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <header>
        <Logo />

        <div>
          <Nav />
          <Button primary onClick={() => handleLogout(dispatch, navigate)}>
            Sair
          </Button>
        </div>
      </header>
    </HeaderContainer>
  );
};
export default connect()(Header);
