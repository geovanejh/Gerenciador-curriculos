import { useFormik } from "formik";
import { useState } from "react";
import api from "../api";
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
  const [experiencia, setExperiencia] = useState([]);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log("values: ", values);
      console.log("escolaridade: ", escolaridade);
      console.log("experiencia: ", experiencia);

      const newObj = {
        nome: values.nome,
        cpf: values.cpf,
        dataNascimento: values.dataNascimento,
        telefone: values.telefone,
        senioridade: values.senioridade,
        cargo: values.cargo,
        endereco: {
          numero: values.numero,
          logradouro: values.rua,
          bairro: values.bairro,
          cidade: values.cidade,
        },
        escolaridades: escolaridade,
        experiencias: experiencia,
      };

      const formData = new FormData();
      const imagefile = values.personalFile;
      formData.append("candidato", JSON.stringify(newObj));
      formData.append("documento", imagefile);

      try {
        api.post("/candidato", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <FormCandidato
      step={step}
      setStep={setStep}
      formik={formik}
      escolaridade={escolaridade}
      setEscolaridade={setEscolaridade}
      experiencia={experiencia}
      setExperiencia={setExperiencia}
    ></FormCandidato>
  );
};
export default CandidatoForm;
