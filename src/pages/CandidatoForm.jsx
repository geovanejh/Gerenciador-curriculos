import { useFormik } from "formik";
import { useState } from "react";
import FormCandidato from "../components/FormCandidato/FormCandidato/FormCandidato";

const CandidatoForm = () => {
  const [step, setStep] = useState(1);
  const [escolaridade, setEscolaridade] = useState([
    {
      instituicao: "",
      descricao: "",
      nivel: "",
      dataInicio: "",
      dataFim: "",
    },
  ]);

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

  return (
    <FormCandidato
      step={step}
      setStep={setStep}
      formik={formik}
      escolaridade={escolaridade}
      setEscolaridade={setEscolaridade}
    ></FormCandidato>
  );
};
export default CandidatoForm;
