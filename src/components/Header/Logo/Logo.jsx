import { connect } from "react-redux";
import { Logotipo } from "./Logo.styled";
import DBCLogo from "../../../assets/DBCLogo.png";

const Logo = () => {
  return (
    <Logotipo>
      <img src={DBCLogo} alt="" />
    </Logotipo>
  );
};
export default connect()(Logo);
