const ExperienceData = ({ formik }) => {
  return (
    <>
      <label htmlFor="empresa">empresa</label>
      <input
        type="text"
        id="empresa"
        onChange={formik.handleChange}
        value={formik.values.empresa}
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
      <label htmlFor="atividades">atividades</label>
      <input
        type="text"
        id="atividades"
        onChange={formik.handleChange}
        value={formik.values.atividades}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="">dataInicio</label>
      <input
        type="text"
        id="dataInicio"
        onChange={formik.handleChange}
        value={formik.values.dataInicio}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="">dataFim</label>
      <input
        type="text"
        id="dataFim"
        onChange={formik.handleChange}
        value={formik.values.dataFim}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <button type="submit">CONSOLELOGAR</button>
    </>
  );
};
export default ExperienceData;
