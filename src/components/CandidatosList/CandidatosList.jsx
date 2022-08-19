import { useNavigate } from "react-router-dom";
import { Lista } from "./CandidatosList.styled";

const CandidatosList = ({ applicants, handleDeleteCandidato }) => {
  const navigate = useNavigate();

  return (
    <Lista>
      <li>
        <p>Nome</p>
        <p>Cargo</p>
        <p>Senioridade</p>
        <p>Data de nascimento</p>
      </li>
      {applicants.map((e) => (
        <li>
          <p>{e.name}</p>
          <p>{e.role}</p>
          <p>{e.seniority}</p>
          <p>{e.birthdate}</p>
          <button onClick={() => navigate(`/candidatos/form/${e.id}`)}> editar </button>
          <button onClick={() => handleDeleteCandidato(e.id)}> excluir </button>
        </li>
      ))}
    </Lista>
  );
};
export default CandidatosList;
