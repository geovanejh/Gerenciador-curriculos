import { useNavigate } from "react-router-dom";

const Candidatos = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/candidatos/novo")}>Adicionar</button>
      Candidatos
    </div>
  );
};
export default Candidatos;
