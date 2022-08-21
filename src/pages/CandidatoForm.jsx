import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FormCandidato from "../components/FormCandidato/FormCandidato/FormCandidato";
import Loading from "../components/Loading/Loading";
import * as Yup from "yup";
import { FillApplicantFields, handleCreateNewApplicant, handleEditApplicant } from "../store/actions/ApplicantAction";
import { formatDateToBackend, formateDateToBrazil } from "../utils/dates";
import { maskOnlyNumbers } from "../utils/masks";

const CandidatoForm = ({ applicant, dispatch, loading }) => {
  const navigate = useNavigate();
  const { id } = useParams();
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
  const [experiencia, setExperiencia] = useState([
    {
      instituicao: "",
      descricao: "",
      cargo: "",
      dataInicio: "",
      dataFim: "",
    },
  ]);

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({
      nome: Yup.string().min(3, "- Curto demais.").required("- Obrigatório"),
      cpf: Yup.string().min(14, "- Curto demais.").required("- Obrigatório"),
      dataNascimento: Yup.string().min(10, "- Curto demais.").required("- Obrigatório"),
      telefone: Yup.string().min(14, "- Curto demais.").required("- Obrigatório"),
      cargo: Yup.string().required("- Obrigatório"),
      senioridade: Yup.string().required("- Obrigatório"),
      personalFile: !id && Yup.string().required("- Obrigatório"),
      cep: Yup.string().min(9, "- Formato incorreto.").max(9, "- Formato incorreto.").required("- Obrigatório."),
      rua: Yup.string().max(30, "- Longo demais.").required("- Obrigatório."),
      numero: Yup.string().required("- Obrigatório."),
      bairro: Yup.string().required("- Obrigatório."),
      cidade: Yup.string().required("- Obrigatório."),
      estado: Yup.string().required("- Obrigatório."),
    }),
    onSubmit: (values) => {
      const scholarity = escolaridade.map((e) => {
        return { ...e, dataInicio: formatDateToBackend(e.dataInicio), dataFim: formatDateToBackend(e.dataFim) };
      });

      const experience = experiencia.map((e) => {
        return { ...e, dataInicio: formatDateToBackend(e.dataInicio), dataFim: formatDateToBackend(e.dataFim) };
      });

      const newObj = {
        nome: values.nome.trim(),
        cpf: maskOnlyNumbers(values.cpf),
        dataNascimento: formatDateToBackend(values.dataNascimento),
        telefone: maskOnlyNumbers(values.telefone),
        senioridade: values.senioridade,
        cargo: values.cargo,
        endereco: {
          cep: maskOnlyNumbers(values.cep),
          numero: values.numero,
          logradouro: values.rua,
          bairro: values.bairro,
          cidade: values.cidade,
          estado: values.estado,
        },
        escolaridades: scholarity,
        experiencias: experience,
      };

      const formData = new FormData();
      const imagefile = values.personalFile;
      formData.append(
        "candidato",
        new Blob([JSON.stringify(newObj)], {
          type: "application/json",
        })
      );
      formData.append("documento", imagefile);

      id ? handleEditApplicant(newObj, id, dispatch, navigate) : handleCreateNewApplicant(formData, dispatch, navigate);
    },
  });

  const setup = async () => {
    FillApplicantFields(id, formik, setExperiencia, setEscolaridade, dispatch);
  };

  useEffect(() => {
    if (id) {
      setup(id);
    }
  }, []);
  return loading ? (
    <Loading />
  ) : (
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

const mapStateToProps = (state) => ({
  applicant: state.ApplicantReducer.applicant,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(CandidatoForm);
