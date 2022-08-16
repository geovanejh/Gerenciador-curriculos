import api from '../../api';
import { toast } from 'react-toastify';

export const HandleListJobs = async (dispatch) => {
  try {
    // const { data } = await api.get('');
    const data = [
      {
        id: '1',
        title: 'Desenvolvedor React',
        region: 'Brasil',
        seniority: 'Sênior',
      },
      {
        id: '2',
        title: 'Desenvolvedor React',
        region: 'Brasil',
        seniority: 'Sênior',
      },
      {
        id: '3',
        title: 'Desenvolvedor React',
        region: 'Brasil',
        seniority: 'Pleno',
      },
      {
        id: '4',
        title: 'Desenvolvedor React',
        region: 'Brasil',
        seniority: 'Junior',
      },
    ];

    dispatch({
      type: 'LIST_JOBS',
      jobs: data,
      isLoading: false,
    });
  } catch (error) {
    toast.error('Erro ao buscar vagas');
  }
};
