import api from "../../api";
import { toast } from "react-toastify";
import moment from "moment";

export const HandleGetApplicantDetail = async (dispatch, idCanditado) => {
  try {
    const { data } = await api.get(
      `/candidato/get-candidato/{idCandidato}?idCandidato=${idCanditado}`
    );
    debugger;

    const applicant = {
      type: "DETAIL_APPLICANT",
      applicant: mapFields(data),
      isLoading: false,
    };

    dispatch(applicant);
  } catch (error) {
    console.log(error);
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
  // scholarity: data.escolaridade.map((item) => ({
  //   id: item?.idEscolaridade,
  //   institution: item?.instituicao,
  // })),
});
