import { Button } from "../../Button/Button.styled";
import AddressData from "../FormSteps/AddressData";
import ExperienceData from "../FormSteps/ExperienceData";
import PersonalData from "../FormSteps/PersonalData";
import StudiesData from "../FormSteps/StudiesData";
import Stepper from "../Stepper/Stepper";
import { ButtonContainer, FormContainer, SteppedForm } from "./FormCandidato.styled";

const FormCandidato = ({ step, setStep, formik, escolaridade, setEscolaridade, experiencia, setExperiencia }) => {
  const incrementaStep = () => {
    switch (step) {
      case 1:
        formik.setTouched({
          ...formik.touched,
          ["nome"]: true,
          ["cpf"]: true,
          ["dataNascimento"]: true,
          ["telefone"]: true,
          ["cargo"]: true,
          ["senioridade"]: true,
          ["personalFile"]: true,
        });
        if (
          !formik.errors.nome &&
          !formik.errors.cpf &&
          !formik.errors.dataNascimento &&
          !formik.errors.telefone &&
          !formik.errors.cargo &&
          !formik.errors.senioridade &&
          !formik.errors.personalFile
        ) {
          setStep(step + 1);
        }
        break;
      case 2:
        formik.setTouched({
          ...formik.touched,
          ["cep"]: true,
          ["rua"]: true,
          ["numero"]: true,
          ["bairro"]: true,
          ["cidade"]: true,
          ["estado"]: true,
        });
        if (
          !formik.errors.cep &&
          !formik.errors.rua &&
          !formik.errors.numero &&
          !formik.errors.bairro &&
          !formik.errors.cidade &&
          !formik.errors.estado
        ) {
          setStep(step + 1);
        }
        break;
      case 3 || 4:
        setStep(step + 1);
        break;
      default:
        return;
    }
  };

  const decrementaStep = () => {
    if (step >= 2) {
      setStep(step - 1);
    }
  };

  return (
    <SteppedForm>
      <Stepper step={step} setStep={setStep} />
      <FormContainer onSubmit={formik.handleSubmit}>
        {step === 1 && <PersonalData formik={formik} />}
        {step === 2 && <AddressData formik={formik} />}
        {step === 3 && <StudiesData formik={formik} escolaridade={escolaridade} setEscolaridade={setEscolaridade} />}
        {step === 4 && <ExperienceData formik={formik} experiencia={experiencia} setExperiencia={setExperiencia} />}
        <ButtonContainer>
          {step > 1 ? (
            <Button type="button" primary onClick={decrementaStep}>
              Voltar
            </Button>
          ) : (
            <span />
          )}

          {step < 4 ? (
            <>
              <Button type="Button" primary onClick={incrementaStep}>
                Próximo
              </Button>
            </>
          ) : (
            <Button type="submit" primary>
              Concluir
            </Button>
          )}
        </ButtonContainer>
      </FormContainer>
    </SteppedForm>
  );
};
export default FormCandidato;
