import { toast } from "react-toastify";
import moment from "moment";
import { ActionTypes } from "../ActionTypes";
import { api, cepApi } from "../../api";
import { setLoading } from "./UtilsAction";
import { maskCEP, maskCPF } from "../../utils/masks";
import { formateDateToBrazil } from "../../utils/dates";
import { formataNumeroFrontEnd } from "../../utils/utils";

export const HandleGetApplicantDetail = async (dispatch, idCanditado) => {
  setLoading(dispatch);
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
  setLoading(dispatch);
};

export const getCepData = async (cep, formik) => {
  try {
    const { data } = await cepApi.get(`${cep.replace("-", "")}/json/`);
    if (data.erro) {
      toast.error("CEP não encontrado.");
    } else {
      formik.setFieldValue("rua", data.logradouro);
      formik.setFieldValue("bairro", data.bairro);
      formik.setFieldValue("cidade", data.localidade);
      formik.setFieldValue("estado", data.uf);
    }
  } catch (error) {
    toast.error("Erro ao buscar CEP.");
  }
};

export const getApplicantsWithPagination = async (dispatch, currentPage, setPages) => {
  setLoading(dispatch);
  try {
    const { data } = await api.get(`/candidato/list-candidato-paginado?pagina=${currentPage}&qtRegistro=10`);
    setPages(data.paginas);
    const applicants = {
      type: ActionTypes.listApplicants,
      applicants: data.content.map((item) => ({
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
    toast.error("Erro ao pesquisar candidatos!");
  }
  setLoading(dispatch);
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
    state: data.endereco.estado,
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
    if (error.response.data.errors.length > 0) {
      error.response.data.errors.map((e) => {
        toast.error(e);
      });
    } else {
      toast.error("Um erro aconteceu!");
    }
  }
  setLoading(dispatch);
};

export const editApplicantFile = async (id, file, dispatch, navigate) => {
  const formData = new FormData();

  formData.append("documento", file);

  setLoading(dispatch);
  try {
    await api.put(`candidato/update-documento/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setLoading(dispatch);
    toast.success("Documento editado com sucesso!");
    HandleGetApplicantDetail(dispatch, id);
  } catch (error) {
    setLoading(dispatch);
    toast.error("Um erro aconteceu!");
  }
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
    if (error.response.data.errors) {
      error.response.data.errors.map((e) => {
        toast.error(e);
      });
    } else {
      toast.error("Um erro aconteceu!");
    }
  }
  setLoading(dispatch);
};

export const DeletaCandidatoById = async (idCandidato, dispatch, currentPage, setPages) => {
  try {
    await api.delete(`candidato/${idCandidato}`);
    getApplicantsWithPagination(dispatch, currentPage, setPages);
    toast.success("Candidato deletado com sucesso!");
  } catch (error) {
    toast.error("Não foi possível deletar o candidato, tente novamente!");
  }
};

export const FillApplicantFields = async (idCandidato, formik, setExperiencia, setEscolaridade, dispatch) => {
  setLoading(dispatch);
  try {
    const { data } = await api.get(`/candidato/get-candidato/${idCandidato}`);
    formik.setFieldValue("nome", data.nome);
    formik.setFieldValue("cpf", maskCPF(data.cpf));
    formik.setFieldValue("dataNascimento", formateDateToBrazil(data.dataNascimento));
    formik.setFieldValue("telefone", formataNumeroFrontEnd(data.telefone));
    formik.setFieldValue("cargo", data.cargo);
    formik.setFieldValue("senioridade", data.senioridade);
    formik.setFieldValue("cep", maskCEP(data.endereco.cep));
    formik.setFieldValue("rua", data.endereco.logradouro);
    formik.setFieldValue("numero", data.endereco.numero);
    formik.setFieldValue("bairro", data.endereco.bairro);
    formik.setFieldValue("cidade", data.endereco.cidade);
    formik.setFieldValue("estado", data.endereco.estado);

    const scholarity = data.escolaridade.map((e) => {
      return { ...e, dataInicio: formateDateToBrazil(e.dataInicio), dataFim: formateDateToBrazil(e.dataFim) };
    });

    const experience = data.experiencia.map((e) => {
      return { ...e, dataInicio: formateDateToBrazil(e.dataInicio), dataFim: formateDateToBrazil(e.dataFim) };
    });

    setEscolaridade(scholarity);
    setExperiencia(experience);
  } catch (error) {
    toast.error("Um erro aconteceu ao pesquisar o candidato, tente novamente!");
  }
  setLoading(dispatch);
};
