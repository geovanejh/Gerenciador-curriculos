import { useEffect } from "react";
import { HandleGetApplicantDetail } from "../../store/actions/ApplicantAction";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";
import { Container } from "../PageStyles/Container";
import { PageContainerTitle } from "../PageStyles/PageContainerTitle";
import { PageContainerWithBorder } from "../PageStyles/PageContainerWithBorder";
import { Group } from "../PageStyles/Group";
import { maskPhone } from "../../utils/masks";
import { Field } from "../PageStyles/Field";
import { ListasContainer } from "../PageStyles/ListasContainer";
import ExperienceList from "../PageStyles/ExperienceList";
import StudiesList from "../PageStyles/StudiesList";
import { SeniorityTag } from "../JobCard/JobCardComponent.style";

const ApplicantDetailsComponent = ({ applicantId, dispatch, applicant, loading }) => {
  console.log(applicant);

  const setup = async () => {
    if (applicantId) {
      HandleGetApplicantDetail(dispatch, applicantId);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <PageContainerTitle>Detalhe do Candidato </PageContainerTitle>
      <PageContainerWithBorder>
        {applicant.id ? (
          <div key={applicant.id}>
            <Group>
              <h2>{applicant.name.toUpperCase()} </h2>
              <Field>
                {applicant.role}
                <SeniorityTag seniority={applicant.seniority}>{applicant.seniority}</SeniorityTag>
              </Field>
              <Field>
                {applicant.address?.street}, {applicant.address?.number} - {applicant.address?.neighborhood}.{" "}
                {applicant.address?.city}/{applicant.address?.state}
              </Field>
              <Field>Contato: {maskPhone(applicant.phoneNumber)}</Field>
              <Field>
                <a href={applicant.resumeUrl}>Fazer download do currículo</a>
                <button>Alterar</button>
              </Field>
            </Group>
            <ListasContainer>
              <StudiesList
                title="ESCOLARIDADE"
                header={["Instituição", "Curso", "Data de Início", "Data Final"]}
                items={applicant.scholarity}
              />
              <ExperienceList
                title="EXPERIÊNCIA"
                header={["Instituição", "Cargo", "Data de Início", "Data Final"]}
                items={applicant.experience}
              />
            </ListasContainer>
          </div>
        ) : (
          <div>
            <h1>Candidato não encontrado </h1>
          </div>
        )}
      </PageContainerWithBorder>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  applicant: state.ApplicantReducer.applicant,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(ApplicantDetailsComponent);
