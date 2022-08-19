import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FormCandidato from "../components/FormCandidato/FormCandidato/FormCandidato";
import Loading from "../components/Loading/Loading";
import { FillApplicantFields, handleCreateNewApplicant, handleEditApplicant } from "../store/actions/ApplicantAction";

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
          cep: values.cep,
          numero: values.numero,
          logradouro: values.rua,
          bairro: values.bairro,
          cidade: values.cidade,
          estado: values.estado,
        },
        escolaridades: escolaridade,
        experiencias: experiencia,
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
