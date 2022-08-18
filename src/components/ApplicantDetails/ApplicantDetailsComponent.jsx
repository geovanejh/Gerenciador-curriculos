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
          </Group>
          <Group>
            Endereço
            <Field>Bairro: {applicant.address?.neighborhood}</Field>
            <Field>Cidade: {applicant.address?.city}</Field>
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
