import { Button } from "../../Button/Button.styled";
import FormField from "../../Forms/FormField/FormField";
import { FormRow } from "../../Forms/FormRow";
import SelectField from "../../Forms/SelectField/SelectField";
import { DinamicFormContent, FormContent, RemoveButton } from "../FormCandidato/FormCandidato.styled";

const ExperienceData = ({ formik, experiencia, setExperiencia }) => {
  const handleAddLink = (e) => {
    e.preventDefault();
    const inputState = {
      instituicao: "",
      descricao: "",
      cargo: "",
      dataInicio: "",
      dataFim: "",
    };

    setExperiencia((prev) => [...prev, inputState]);
  };

  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();

    setExperiencia((prev) => {
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

    setExperiencia((prev) => prev.filter((item) => item !== prev[index]));
  };

  return (
    <DinamicFormContent>
      {experiencia.map((item, index) => (
        <div>
          <FormRow grid="1fr 1fr 150px 150px">
            <FormField
              label="instituicao"
              formik={formik}
              id="instituicao"
              type="text"
              name="instituicao"
              placeholder="instituicao"
              onBlur={formik.handleBlur}
              value={item.instituicao}
              onChange={(e) => onChange(index, e)}
            />
            <FormField
              label="cargo"
              formik={formik}
              id="cargo"
              type="text"
              name="cargo"
              placeholder="Ex: Desenvolvedor Mobile Sênior"
              value={item.cargo}
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
              label="Data final"
              formik={formik}
              id="dataFim"
              type="text"
              name="dataFim"
              placeholder="00/00/0000"
              value={item.dataFim}
              onChange={(e) => onChange(index, e)}
            />
          </FormRow>
          <FormRow grid="1fr 30px">
            <FormField
              label="descrição"
              formik={formik}
              id="descricao"
              type="text"
              name="descricao"
              placeholder="00/00/0000"
              value={item.descricao}
              onChange={(e) => onChange(index, e)}
            />
            <RemoveButton type="button" className="btn btn-warning" onClick={(e) => handleRemoveField(e, index)}>
              X
            </RemoveButton>
          </FormRow>
        </div>
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
        + Adicionar
      </Button>
    </DinamicFormContent>
  );
};
export default ExperienceData;
