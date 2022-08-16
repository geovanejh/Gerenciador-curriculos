import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../store/actions/AuthAction";

const Logo = ({ dispatch }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => handleLogout(dispatch, navigate)}>deslogar</button>
      <button onClick={() => navigate("/")}>Oportunidades</button>
      <button onClick={() => navigate("/candidatos")}>Candidatos</button>
    </div>
  );
};
export default connect()(Logo);
