import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CandidatosContainer } from "../components/CandidatosContainer/CandidatosContainer.styled";
import { DeletaCandidatoById, HandleListApplicants } from "../store/actions/ApplicantAction";

const Candidatos = ({ dispatch, applicants }) => {
  const navigate = useNavigate();
  console.log(applicants);

  const setup = () => {
    HandleListApplicants(dispatch);
  };

  const handleDeleteCandidato = (idCandidato) => {
    DeletaCandidatoById(idCandidato, dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <CandidatosContainer>
      <button onClick={() => navigate("/candidatos/form")}>Adicionar</button>
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
            <button onClick={() => navigate(`/candidatos/form/${e.id}`)}> editar </button>
            <button onClick={() => handleDeleteCandidato(e.id)}> excluir </button>
          </li>
        ))}
      </ul>
    </CandidatosContainer>
  );
};

const mapStateToProps = (state) => ({
  applicants: state.ApplicantReducer.applicants,
});

export default connect(mapStateToProps)(Candidatos);
