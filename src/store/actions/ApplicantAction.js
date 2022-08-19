import api from "../../api";
import { toast } from "react-toastify";
import moment from "moment";
import { setLoading } from "./UtilsAction";

export const HandleGetApplicantDetail = async (dispatch, idCanditado) => {
  try {
    const { data } = await api.get(`/candidato/get-candidato/${idCanditado}`);

    const applicant = {
      type: "DETAIL_APPLICANT",
      applicant: mapFields(data),
      isLoading: false,
    };

    dispatch(applicant);
  } catch (error) {
    toast.error("Erro ao buscar cadanditado");
  }
};

export const HandleListApplicants = async (dispatch) => {
  try {
    const { data } = await api.get("/candidato/list-candidato");

    const applicants = {
      type: "LIST_APPLICANTS",
      applicants: data.map((item) => ({
        id: item.idCandidato,
        name: item.nome,
        role: item.cargo,
        birthdate: moment(item.dataNascimento).format("DD/MM/YYYY"),
        seniority: item.senioridade,
        resumeUrl: item.curriculoUrl,
      })),
      isLoading: false,
    };

    dispatch(applicants);
  } catch (error) {
    console.log("aq", error);
    toast.error("Erro ao buscar cadanditado");
  }
};

export const HandleAddAplicantToJob = async (dispatch, jobId, applicantId) => {
  let applyJobStatus = {
    type: "APPLY_JOB",
    applyJobStatus: true,
    isLoading: false,
  };

  try {
    await api.post("/vaga", {
      idVaga: jobId,
      candidatos: [
        {
          idCandidato: applicantId,
        },
      ],
    });

    toast.success("Candidato vinculado com sucesso!");
  } catch (error) {
    applyJobStatus.applyJobStatus = false;
    toast.error("Erro ao candidatar para vaga");
  }

  dispatch(applyJobStatus);
};

const mapFields = (data) => ({
  id: data.idCandidato,
  name: data.nome.toLowerCase(),
  cpf: data.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4"),
  address: {
    neighborhood: data.endereco.bairro,
    city: data.endereco.cidade,
  },
});

export const handleEditApplicant = async (newObj, id, dispatch) => {
  setLoading(dispatch);
  try {
    api.put("/candidato/update-candidato", { ...newObj, idCandidato: id });
  } catch (error) {
    console.log(error);
  }
  setLoading(dispatch);
};

export const handleCreateNewApplicant = async (formData, dispatch) => {
  setLoading(dispatch);
  try {
    api.post("/candidato", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Candidato cadastrado com sucesso!");
  } catch (error) {
    console.log(error);
    toast.error("Um erro aconteceu!");
  }
  setLoading(dispatch);
};

export const DeletaCandidatoById = async (idCandidato, dispatch) => {
  try {
    const { data } = api.delete(`candidato/${idCandidato}`);
    console.log(data);
    HandleListApplicants(dispatch);
  } catch (error) {
    console.log("erro: ", error);
  }
};

export const FillApplicantFields = async (idCandidato, formik, setExperiencia, setEscolaridade, dispatch) => {
  setLoading(dispatch);
  try {
    const { data } = await api.get(`/candidato/get-candidato/${idCandidato}`);
    console.log(data);
    formik.setFieldValue("nome", data.nome);
    formik.setFieldValue("cpf", data.cpf);
    formik.setFieldValue("dataNascimento", data.dataNascimento);
    formik.setFieldValue("telefone", data.telefone);
    formik.setFieldValue("cargo", data.cargo);
    formik.setFieldValue("senioridade", data.senioridade);
    formik.setFieldValue("cep", data.endereco.cep);
    formik.setFieldValue("rua", data.endereco.logradouro);
    formik.setFieldValue("numero", data.endereco.numero);
    formik.setFieldValue("bairro", data.endereco.bairro);
    formik.setFieldValue("cidade", data.endereco.cidade);
    setEscolaridade(data.escolaridade);
    setExperiencia(data.experiencia);
  } catch (error) {
    console.log(error);
  }
  setLoading(dispatch);
};
