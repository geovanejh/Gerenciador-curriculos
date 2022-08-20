import { useEffect } from "react";
import { HandleGetApplicantDetail } from "../../store/actions/ApplicantAction";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";
import { Container } from "../PageStyles/Container";
import { PageContainerTitle } from "../PageStyles/PageContainerTitle";
import { PageContainerWithBorder } from "../PageStyles/PageContainerWithBorder";
import { Group } from "../PageStyles/Group";
import { FormRow } from "../Forms/FormRow";
import { formateDateToBrazil } from "../../utils/dates";
import { maskPhone } from "../../utils/masks";
import { Field } from "../PageStyles/Field";

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
                <span>{applicant.seniority}</span>
              </Field>
              <Field>
                {applicant.address?.street}, {applicant.address?.number} - {applicant.address?.neighborhood}.{" "}
                {applicant.address?.city}/{applicant.address?.state}
              </Field>
              <Field>Contato: {maskPhone(applicant.phoneNumber)}</Field>
              <Field>
                <a href={applicant.resumeUrl}>Fazer download do currículo</a>
              </Field>
            </Group>
            <Group>
              <h3>Escolaridade:</h3>
              <ul>
                <li>
                  <p>Instituição</p>
                  <p>Curso</p>
                  <p>Data de Início</p>
                  <p>Data Final</p>
                </li>
                {applicant?.scholarity &&
                  applicant?.scholarity.map((item) => {
                    return (
                      <li>
                        <p>{item.institution}</p>
                        <p>{item.descricao}</p>
                        <p>{formateDateToBrazil(item.startDate)}</p>
                        <p>{formateDateToBrazil(item.endDate)}</p>
                      </li>
                    );
                  })}
              </ul>
            </Group>
            <Group>
              <h3>Experiência:</h3>
              {applicant?.experience &&
                applicant.experience.map((item) => {
                  return (
                    <>
                      <Field>Instituição: {item.company}</Field>
                      <Field>Descrição: {item.description}</Field>
                      <Field>Cargo: {item.role}</Field>
                      <Field>Data de início: {item.startDate}</Field>
                      <Field>Data de fim: {item.endDate}</Field>
                    </>
                  );
                })}
            </Group>
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
