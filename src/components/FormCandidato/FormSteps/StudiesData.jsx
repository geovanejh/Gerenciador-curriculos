import { useState } from "react";

const StudiesData = ({ formik, escolaridade, setEscolaridade }) => {
  const handleAddLink = (e) => {
    e.preventDefault();
    const inputState = {
      instituicao: "",
      descricao: "",
      nivel: "",
      dataInicio: "",
      dataFim: "",
    };

    setEscolaridade((prev) => [...prev, inputState]);
  };

  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();

    setEscolaridade((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }

        return {
          ...item,
          [event.target.name]: event.target.value,
        };
      });
    });
  };

  const handleRemoveField = (e, index) => {
    e.preventDefault();

    setEscolaridade((prev) => prev.filter((item) => item !== prev[index]));
  };

  return (
    <>
      {escolaridade.map((item, index) => (
        <div key={`item-${index}`}>
          <div>
            <label htmlFor="instituicao">Instituição de ensino</label>
            <input
              type="text"
              name="instituicao"
              placeholder="instituicao"
              value={item.instituicao}
              onChange={(e) => onChange(index, e)}
            />
          </div>
          <div>
            <label htmlFor="dataInicio">Descrição</label>
            <input
              type="text"
              name="descricao"
              placeholder="descricao"
              value={item.descricao}
              onChange={(e) => onChange(index, e)}
            />
          </div>
          <div>
            <label htmlFor="nivel">nivel</label>
            <select type="text" id="nivel" name="nivel" onChange={(e) => onChange(index, e)} value={item.nivel}>
              <option value="fundamental">Fundamental</option>
              <option value="medio">Médio</option>
              <option value="superior">Superior</option>
              <option value="tecnico">Técnico</option>
            </select>
          </div>
          <div>
            <label htmlFor="dataInicio">Data de início</label>
            <input
              type="text"
              name="dataInicio"
              placeholder="Data de início"
              value={item.dataInicio}
              onChange={(e) => onChange(index, e)}
            />
          </div>
          <div>
            <label htmlFor="dataFim">Data final</label>
            <input
              type="text"
              name="dataFim"
              placeholder="dataFim"
              value={item.dataFim}
              onChange={(e) => onChange(index, e)}
            />
          </div>
          <div>
            <button className="btn btn-warning" onClick={(e) => handleRemoveField(e, index)}>
              X
            </button>
          </div>
        </div>
      ))}

      <button onClick={handleAddLink}>Add a link</button>
      <a onClick={() => console.log(escolaridade)}>logar</a>
    </>
  );
};
export default StudiesData;
