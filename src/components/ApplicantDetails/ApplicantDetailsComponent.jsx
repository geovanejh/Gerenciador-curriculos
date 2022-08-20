import { useEffect } from "react";
import { HandleGetApplicantDetail } from "../../store/actions/ApplicantAction";
import { connect } from "react-redux";
import { Card, Field, Group, Container } from "./ApplicantDetails.styles";

const ApplicantDetailsComponent = ({ applicantId, dispatch, applicant }) => {
  const setup = async () => {
    if (applicantId) {
      HandleGetApplicantDetail(dispatch, applicantId);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <Container>
      {applicant ? (
        <Card key={applicant.id}>
          <Group>
            <Field>Nome: {applicant.name}</Field>
            <Field>CPF: {applicant.cpf}</Field>
            <Field>Data de nascimento: {applicant.birthdate}</Field>
            <Field>Numero de telefone: {applicant.phoneNumber}</Field>
            <Field>Senioridade: {applicant.seniority}</Field>
            <Field>Cargo: {applicant.role}</Field>
            <Field>
              Curriculo: <a href={applicant.resumeUrl}>Download</a>{" "}
            </Field>
            <Field>Endereço:</Field>
            <Field>Número: {applicant.address?.number}</Field>
            <Field>Rua: {applicant.address?.street}</Field>
            <Field>Bairro: {applicant.address?.neighborhood}</Field>
            <Field>Cidade: {applicant.address?.city}</Field>
            <Field>Escolaridade:</Field>
            {applicant?.scholarity &&
              applicant?.scholarity.map((item) => {
                return (
                  <>
                    <Field>Instituição: {item.institution}</Field>
                    <Field>Descrição: {item.drescription}</Field>
                    <Field>Data de início: {item.startDate}</Field>
                    <Field>Data de fim: {item.endDate}</Field>
                  </>
                );
              })}

            <Field>Experiência:</Field>
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
        </Card>
      ) : (
        <div>
          <h1>Candidato não encontrado </h1>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  applicant: state.ApplicantReducer.applicant,
});

export default connect(mapStateToProps)(ApplicantDetailsComponent);
