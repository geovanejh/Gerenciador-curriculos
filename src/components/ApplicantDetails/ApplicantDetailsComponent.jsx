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
      {applicant && (
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
          </Group>
          <Group>
            Endereço
            <Field>Número: {applicant.address?.number}</Field>
            <Field>Rua: {applicant.address?.street}</Field>
            <Field>Bairro: {applicant.address?.neighborhood}</Field>
            <Field>Cidade: {applicant.address?.city}</Field>
          </Group>
          Escolaridade:
          <Group>
            <Field>Instituição: {applicant.education?.institute}</Field>
            <Field>Descrição: {applicant.education?.drescription}</Field>
            <Field>Data de início: {applicant.education?.startDate}</Field>
            <Field>Data de fim: {applicant.education?.endDate}</Field>
          </Group>
          Experiência:
          <Group>
            <Field>Instituição: {applicant.experience?.institute}</Field>
            <Field>Descrição: {applicant.experience?.drescription}</Field>
            <Field>Cargo: {applicant.experience?.role}</Field>
            <Field>Data de início: {applicant.experience?.startDate}</Field>
            <Field>Data de fim: {applicant.experience?.endDate}</Field>
          </Group>
        </Card>
      )}
      {/* <Card> 
        <Group>
          <Field>Nome: Fulaninho de tal</Field>
          <Field>CPF: Fulaninho de tal</Field>
          <Field>Data nascimento: Fulaninho de tal </Field>
          <Field>Endereço: Fulaninho de tal </Field>
        </Group>

        <Group>
          <Field>Dados Escolares </Field>
        </Group>

        <Group>
          <Field>Experiências</Field>
        </Group>

        <Group>
          <Field>Link para download do currículo em arquivo</Field>
        </Group>

        <Group>
          <Field>Senioridade</Field>
        </Group>

        <Group>
          <Field>Cargo</Field>
        </Group>
      </Card> */}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  applicant: state.ApplicantReducer.applicant,
});

export default connect(mapStateToProps)(ApplicantDetailsComponent);
