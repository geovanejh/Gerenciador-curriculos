import { toast } from 'react-toastify';

import { ActionTypes } from '../ActionTypes';
import api from '../../api';

export const HandleListJobs = async (
  dispatch,
  pageNumber = 1,
  pageLength = 10
) => {
  try {
    const { data } = await api.get(
      `/vaga/pagina=${pageNumber}/quantidade=${pageLength}`
    );

    const jobsPaginated = {
      jobs: data.vagaGeralList.map(mapFields),
      currentPage: data.pagina,
      totalPages: data.paginas,
    };

    dispatch({
      type: ActionTypes.listJobs,
      jobs: jobsPaginated,
      isLoading: false,
    });
  } catch (error) {
    toast.error('Erro ao buscar vagas');
  }
};

const mapFields = (data) => ({
  id: data.id,
  title: data.Titulo,
  region:
    !data.Estado || !data.Cidade ? 'Remoto' : `${data.Estado} - ${data.Cidade}`,
  contractType: data.TipoContratacao,
  category: data.Categoria,
  tags: data.Tags,
});
