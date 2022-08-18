import { useState } from "react";

const PersonalData = ({ formik }) => {
  return (
    <>
      <label htmlFor="nome">Nome Completo</label>
      <input
        type="text"
        id="nome"
        onChange={formik.handleChange}
        value={formik.values.nome}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="">cpf</label>
      <input
        type="text"
        id="cpf"
        onChange={formik.handleChange}
        value={formik.values.cpf}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="">dataNascimento</label>
      <input
        type="text"
        id="dataNascimento"
        onChange={formik.handleChange}
        value={formik.values.dataNascimento}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="telefone">telefone</label>
      <input
        type="text"
        id="telefone"
        onChange={formik.handleChange}
        value={formik.values.telefone}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="cargo">cargo</label>
      <input
        type="text"
        id="cargo"
        onChange={formik.handleChange}
        value={formik.values.cargo}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="senioridade">senioridade</label>
      <select
        id="senioridade"
        onChange={formik.handleChange}
        value={formik.values.senioridade}
        onBlur={formik.handleBlur}
        formik={formik}
      >
        <option value="JUNIOR">Júnior</option>
        <option value="PLENO">Pleno</option>
        <option value="SENIOR">Sênior</option>
        <option value="ESPECIALISTA">Especialista</option>
      </select>
    </>
  );
};
export default PersonalData;
