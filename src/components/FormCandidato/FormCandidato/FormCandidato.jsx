import { Button } from "../../Button/Button.styled";
import AddressData from "../FormSteps/AddressData";
import ExperienceData from "../FormSteps/ExperienceData";
import PersonalData from "../FormSteps/PersonalData";
import StudiesData from "../FormSteps/StudiesData";
import Stepper from "../Stepper/Stepper";
import { ButtonContainer, FormContainer, SteppedForm } from "./FormCandidato.styled";

const FormCandidato = ({ step, setStep, formik, escolaridade, setEscolaridade, experiencia, setExperiencia }) => {
  const incrementaStep = () => {
    if (step <= 3) {
      setStep(step + 1);
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
          <Button type="button" primary onClick={decrementaStep}>
            Voltar
          </Button>

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
