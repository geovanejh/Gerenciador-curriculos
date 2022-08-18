import { Card, Field, Group, Container } from "./ApplicantDetails.styles";

const ApplicantDetailsComponent = ({ applicantId }) => {
  // TODO: Usar action para buscar os dados do candidato

  console.log("ApplicantId", applicantId);

  return (
    <Container>
      <Card>
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
      </Card>
    </Container>
  );
};

export default ApplicantDetailsComponent;
