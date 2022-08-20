import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button.styled";
import { CandidatosContainer } from "../components/CandidatosContainer/CandidatosContainer.styled";
import CandidatosList from "../components/CandidatosList/CandidatosList";
import { PageContainerTitle } from "../components/PageStyles/PageContainerTitle";
import { PageContainerWithBorder } from "../components/PageStyles/PageContainerWithBorder";
import { DeletaCandidatoById, HandleListApplicants } from "../store/actions/ApplicantAction";

const Candidatos = ({ dispatch, applicants }) => {
  const navigate = useNavigate();

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
      <PageContainerTitle>Candidatos cadastrados no sistema</PageContainerTitle>
      <PageContainerWithBorder>
        <Button primary onClick={() => navigate("/candidatos/form")}>
          Adicionar
        </Button>
        <CandidatosList applicants={applicants} handleDeleteCandidato={handleDeleteCandidato} />
      </PageContainerWithBorder>
    </CandidatosContainer>
  );
};

const mapStateToProps = (state) => ({
  applicants: state.ApplicantReducer.applicants,
});

export default connect(mapStateToProps)(Candidatos);
