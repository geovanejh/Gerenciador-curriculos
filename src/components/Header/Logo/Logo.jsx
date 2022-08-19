import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logotipo } from "./Logo.styled";

const Logo = ({ dispatch }) => {
  const navigate = useNavigate();

  return (
    <Logotipo>
      <img src="https://www.dbccompany.com.br/wp-content/uploads/2021/12/DBC-LOGO-Branco.png" alt="" />
    </Logotipo>
  );
};
export default connect()(Logo);
