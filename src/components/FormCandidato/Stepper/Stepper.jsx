import { StepperContainer } from "./Stepper.styled";

const Stepper = ({ step, setStep }) => {
  return (
    <StepperContainer>
      <div onClick={() => setStep(1)}>
        <button>1</button>
        <p>Dados pessoais</p>
      </div>
      <div onClick={() => setStep(2)}>
        <button>2</button>
        <p>Endereço</p>
      </div>
      <div onClick={() => setStep(3)}>
        <button>3</button>
        <p>Escolaridade</p>
      </div>
      <div onClick={() => setStep(4)}>
        <button>4</button>
        <p>Experiências</p>
      </div>
    </StepperContainer>
  );
};
export default Stepper;
