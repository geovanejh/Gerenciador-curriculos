import FormField from "../../Forms/FormField/FormField";
import { FormRow } from "../../Forms/FormRow";
import SelectField from "../../Forms/SelectField/SelectField";

const PersonalData = ({ formik }) => {
  return (
    <>
      <FormRow grid="1fr 1fr 0.5fr">
        <FormField
          label="Nome"
          placeholder="Ex: João da Silva"
          type="text"
          id="nome"
          onChange={formik.handleChange}
          value={formik.values.nome}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <FormField
          label="cpf"
          placeholder="000.000.000-00"
          type="text"
          id="cpf"
          onChange={formik.handleChange}
          value={formik.values.cpf}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <FormField
          label="data de nascimento"
          placeholder="00/00/0000"
          type="text"
          id="dataNascimento"
          onChange={formik.handleChange}
          value={formik.values.dataNascimento}
          onBlur={formik.handleBlur}
          formik={formik}
        />
      </FormRow>
      <FormRow grid="0.5fr 1fr 0.5fr">
        <FormField
          label="telefone"
          placeholder="(00)00000-0000"
          type="text"
          id="telefone"
          onChange={formik.handleChange}
          value={formik.values.telefone}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <FormField
          label="cargo"
          placeholder="Ex: Desenvolvedor iOS Sênior"
          type="text"
          id="cargo"
          onChange={formik.handleChange}
          value={formik.values.cargo}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <SelectField
          options={[
            { id: "JUNIOR", nome: "Júnior" },
            { id: "PLENO", nome: "Pleno" },
          ]}
          label="Senioridade"
          id="senioridade"
          onChange={formik.handleChange}
          value={formik.values.senioridade}
          onBlur={formik.handleBlur}
        />
      </FormRow>
      <input
        type="file"
        name="personalFile"
        onBlur={formik.handleBlur}
        id="personalFile"
        onChange={(event) => {
          formik.setFieldValue("personalFile", event.currentTarget.files[0]);
        }}
      />
    </>
  );
};
export default PersonalData;
