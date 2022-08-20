import { toast } from "react-toastify";
import moment from "moment";

import { ActionTypes } from '../ActionTypes';
import api from "../../api";
import { setLoading } from "./UtilsAction";

export const HandleGetApplicantDetail = async (dispatch, idCanditado) => {
  let applicant = {
    type: ActionTypes.detailApplicant,
    isLoading: false,
  };

  try {
    const { data } = await api.get(`/candidato/get-candidato/${idCanditado}`);

    applicant.applicant = mapFields(data);
  } catch (error) {
    applicant.applicant = null;
  }

  dispatch(applicant);
};

export const HandleListApplicants = async (dispatch) => {
  try {
    const { data } = await api.get("/candidato/list-candidato");

    const applicants = {
      type: ActionTypes.listApplicants,
      applicants: data.map((item) => ({
        id: item.idCandidato,
        name: item.nome,
        role: item.cargo,
        birthdate: moment(item.dataNascimento).format("DD/MM/YYYY"),
        seniority: item.senioridade,
        resumeUrl: item.curriculoUrl,
        jobAppliant: item.vagas.map((item) => item.idVaga),
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
    type: ActionTypes.applyJob,
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

export const HandleUnlinkAplicantToJob = async (dispatch, jobId, applicantId) => {
  let applyJobStatus = {
    type: ActionTypes.unlinkJob,
    unlinkJobStatus: true,
    isLoading: false,
  };

  try {
    await api.post(`/vaga/desvincular/vaga/${jobId}/candidato/${applicantId}`);

    toast.success("Candidato desvinculado com sucesso!");
  } catch (error) {
    applyJobStatus.unlinkJobStatus = false;
    toast.error("Erro ao desvincular condidato da vaga");
  }

  dispatch(applyJobStatus);
};

const mapFields = (data) => ({
  id: data.idCandidato,
  name: data.nome.toLowerCase(),
  cpf: data.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4"),
  birthdate: data.dataNascimento,
  phoneNumber: data.telefone,
  seniority: data.senioridade,
  role: data.cargo,
  resumeUrl: data.curriculoUrl,
  address: {
    number: data.endereco.numero,
    street: data.endereco.logradouro,
    neighborhood: data.endereco.bairro,
    city: data.endereco.cidade,
  },
  scholarity: data?.escolaridade.map((item) => ({
    id: item?.idEscolaridade,
    institution: item?.instituicao,
    descricao: item?.descricao,
    startDate: item?.dataInicio,
    endDate: item?.dataFim,
  })),
  experience: data.experiencia.map((item) => ({
    id: item?.idExperiencia,
    company: item?.instituicao,
    description: item?.descricao,
    role: item?.cargo,
    startDate: item?.dataInicio,
    endDate: item?.dataFim,
  })),
});

export const handleEditApplicant = async (newObj, id, dispatch, navigate) => {
  setLoading(dispatch);
  try {
    await api.put("/candidato/update-candidato", {
      ...newObj,
      idCandidato: id,
    });
    toast.success("Candidato editado com sucesso!");
    navigate(-1);
  } catch (error) {
    toast.error("Um erro aconteceu!");
    console.log(error);
  }
  setLoading(dispatch);
};

export const handleCreateNewApplicant = async (formData, dispatch, navigate) => {
  setLoading(dispatch);
  try {
    await api.post("/candidato", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Candidato cadastrado com sucesso!");
    navigate(-1);
  } catch (error) {
    console.log(error);
    toast.error("Um erro aconteceu!");
  }
  setLoading(dispatch);
};

export const DeletaCandidatoById = async (idCandidato, dispatch) => {
  try {
    const { data } = await api.delete(`candidato/${idCandidato}`);
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
