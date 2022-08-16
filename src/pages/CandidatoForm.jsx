import { useFormik } from "formik";
import { useState } from "react";
import FormCandidato from "../components/FormCandidato/FormCandidato/FormCandidato";
import AddressData from "../components/FormCandidato/FormSteps/AddressData";
import ExperienceData from "../components/FormCandidato/FormSteps/ExperienceData";
import PersonalData from "../components/FormCandidato/FormSteps/PersonalData";
import StudiesData from "../components/FormCandidato/FormSteps/StudiesData";
import Stepper from "../components/FormCandidato/Stepper/Stepper";

const CandidatoForm = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      um: "",
      dois: "",
      tres: "",
      quatro: "",
    },
    onSubmit: (values) => {
      console.log("values: ", values);
    },
  });

  return <FormCandidato step={step} setStep={setStep} formik={formik}></FormCandidato>;
};
export default CandidatoForm;
