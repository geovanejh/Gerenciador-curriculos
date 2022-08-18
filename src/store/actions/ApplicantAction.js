import api from "../../api";
import { toast } from "react-toastify";

export const HandleGetApplicantDetail = async (dispatch, idCanditado) => {
  try {
    const { data } = await api.get(`/candidato/get-candidato/{idCandidato}?idCandidato=${idCanditado}`);

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
        birthdate: item.dataNascimento,
        seniority: item.senioridade,
        resumeUrl: item.curriculoUrl,
      })),
      isLoading: false,
    };

    dispatch(applicants);
  } catch (error) {
    console.log(error);
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
  name: data.nome,
  cpf: data.cpf,
  address: {
    neighborhood: data.endereco.bairro,
    city: data.endereco.cidade,
  },
});
