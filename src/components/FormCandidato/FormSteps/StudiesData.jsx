import { useState } from "react";
import { Button } from "../../Button/Button.styled";
import FormField from "../../Forms/FormField/FormField";
import { FormRow } from "../../Forms/FormRow";
import SelectField from "../../Forms/SelectField/SelectField";

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
        <>
          <FormRow grid="0.5fr 1fr">
            <SelectField
              options={[
                { id: "TECNICO", nome: "Técnico" },
                { id: "SUPERIOR", nome: "Superior" },
              ]}
              label="Nível"
              type="text"
              id="nivel"
              name="nivel"
              onChange={(e) => onChange(index, e)}
              value={item.nivel}
            />
            <FormField
              label="Curso"
              formik={formik}
              id="descricao"
              type="text"
              name="descricao"
              placeholder="Ex: Análise e Desenvolvimento de Sistemas"
              value={item.descricao}
              onChange={(e) => onChange(index, e)}
            />
          </FormRow>
          <FormRow grid="1fr 0.3fr 0.5fr 0.1fr">
            <FormField
              label="instituicao"
              formik={formik}
              id="instituicao"
              type="text"
              name="instituicao"
              placeholder="instituicao"
              onBlur={formik.handleBlur}
              onChange={(e) => onChange(index, e)}
            />
            <FormField
              label="Data de Início"
              formik={formik}
              id="dataInicio"
              type="text"
              name="dataInicio"
              placeholder="00/00/0000"
              value={item.dataInicio}
              onChange={(e) => onChange(index, e)}
            />
            <FormField
              label="Data ou previsão de término"
              formik={formik}
              id="dataFim"
              type="text"
              name="dataFim"
              placeholder="00/00/0000"
              value={item.dataFim}
              onChange={(e) => onChange(index, e)}
            />

            <Button type="button" className="btn btn-warning" onClick={(e) => handleRemoveField(e, index)}>
              X
            </Button>
          </FormRow>
        </>
      ))}
      <Button
        type="button"
        onClick={handleAddLink}
        background="#0174bd"
        border="none"
        padding="7px 12px"
        color="white"
        borderRadius="50px"
      >
        +
      </Button>
    </>
  );
};
export default StudiesData;
