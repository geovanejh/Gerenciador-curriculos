import { useNavigate } from "react-router-dom";
import { Lista } from "./CandidatosList.styled";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Button } from "../Button/Button.styled";

const CandidatosList = ({ applicants, handleDeleteCandidato }) => {
  const navigate = useNavigate();

  const handleEditCandidato = (id) => {
    navigate(`/candidatos/form/${id}`);
  };

  return (
    <Lista>
      <li>
        <p>Nome</p>
        <p>Cargo</p>
        <p>Senioridade</p>
        <p>Data de nascimento</p>
      </li>
      {applicants.map((e) => (
        <li onClick={() => navigate(`/candidato/${e.id}`)}>
          <p>{e.name}</p>
          <p>{e.role}</p>
          <p>{e.seniority}</p>
          <p>{e.birthdate}</p>
          <div>
            <Button
              onClick={(event) => {
                event.stopPropagation();
                handleEditCandidato(e.id);
              }}
              border="none"
              background="transparent"
              fontSize="16px"
            >
              <FiEdit />
            </Button>
            <Button
              onClick={(event) => {
                event.stopPropagation();
                handleDeleteCandidato(e.id);
              }}
              border="none"
              background="transparent"
              fontSize="16px"
            >
              <RiDeleteBinFill />
            </Button>
          </div>
        </li>
      ))}
    </Lista>
  );
};
export default CandidatosList;
