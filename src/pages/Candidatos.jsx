import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { Button } from "../components/Button/Button.styled";
import { CandidatosContainer } from "../components/CandidatosContainer/CandidatosContainer.styled";
import CandidatosList from "../components/CandidatosList/CandidatosList";
import Loading from "../components/Loading/Loading";
import { PageContainerTitle } from "../components/PageStyles/PageContainerTitle";
import { PageContainerWithBorder } from "../components/PageStyles/PageContainerWithBorder";
import PaginadorButtons from "../components/Paginador/PaginadorButtons";
import { Pager } from "../components/Paginador/PaginadorButtons.styled";
import { DeletaCandidatoById, getApplicantsWithPagination } from "../store/actions/ApplicantAction";

const Candidatos = ({ dispatch, applicants, loading }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(1);
  const navigate = useNavigate();

  const setup = async () => {
    getApplicantsWithPagination(dispatch, currentPage, setPages);
  };

  const handleDeleteCandidato = (idCandidato) => {
    DeletaCandidatoById(idCandidato, dispatch);
  };

  useEffect(() => {
    setup();
  }, [currentPage]);

  return loading ? (
    <Loading />
  ) : (
    <CandidatosContainer>
      <PageContainerTitle>Candidatos cadastrados no sistema</PageContainerTitle>
      <PageContainerWithBorder>
        <Button primary onClick={() => navigate("/candidatos/form")}>
          Adicionar
        </Button>
        <CandidatosList applicants={applicants} handleDeleteCandidato={handleDeleteCandidato} />
        <Pager>
          <PaginadorButtons pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </Pager>
      </PageContainerWithBorder>
    </CandidatosContainer>
  );
};

const mapStateToProps = (state) => ({
  loading: state.UtilsReducer.loading,
  applicants: state.ApplicantReducer.applicants,
});

export default connect(mapStateToProps)(Candidatos);
