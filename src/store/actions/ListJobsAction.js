import api from "../../api";
import { toast } from "react-toastify";

export const HandleListJobs = async (dispatch) => {
  try {
    const { data } = await api.get("/vaga/pagina=1/quantidade=10");

    dispatch({
      type: "LIST_JOBS",
      jobs: data.vagaGeralList.map(mapFields),
      isLoading: false,
    });
  } catch (error) {
    toast.error("Erro ao buscar vagas");
  }
};

const mapFields = (data) => ({
  id: data.id,
  title: data.Titulo,
  region: `${data.Estado} - ${data.Cidade}`,
  contractType: data.TipoContratacao,
  category: data.Categoria,
});
