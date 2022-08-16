import AddressData from "../FormSteps/AddressData";
import ExperienceData from "../FormSteps/ExperienceData";
import PersonalData from "../FormSteps/PersonalData";
import StudiesData from "../FormSteps/StudiesData";
import Stepper from "../Stepper/Stepper";
import { FormContainer, SteppedForm } from "./FormCandidato.styled";

const FormCandidato = ({ step, setStep, formik }) => {
  return (
    <SteppedForm>
      <Stepper step={step} setStep={setStep} />
      <FormContainer onSubmit={formik.handleSubmit}>
        {step === 1 && <PersonalData formik={formik} />}
        {step === 2 && <AddressData formik={formik} />}
        {step === 3 && <StudiesData formik={formik} />}
        {step === 4 && <ExperienceData formik={formik} />}
      </FormContainer>
    </SteppedForm>
  );
};
export default FormCandidato;
