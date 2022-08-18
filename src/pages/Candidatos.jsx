import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HandleListApplicants } from "../store/actions/ApplicantAction";

const Candidatos = ({ dispatch, applicants }) => {
  const navigate = useNavigate();
  console.log(applicants);

  const setup = () => {
    HandleListApplicants(dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/candidatos/novo")}>Adicionar</button>
      <ul>
        <li>
          <p>nome</p>
          <p>cargo</p>
          <p>senioridade</p>
          <p>data de nascimento</p>
        </li>
        {applicants.map((e) => (
          <li>
            <p>{e.name}</p>
            <p>{e.role}</p>
            <p>{e.seniority}</p>
            <p>{e.birthdate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  applicants: state.ApplicantReducer.applicants,
});

export default connect(mapStateToProps)(Candidatos);
