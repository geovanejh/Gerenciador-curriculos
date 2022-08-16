const ExperienceData = ({ formik }) => {
  return (
    <div>
      <label htmlFor="">quatro</label>
      <input
        type="text"
        id="quatro"
        onChange={formik.handleChange}
        value={formik.values.quatro}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <button type="submit">CONSOLELOGAR</button>
    </div>
  );
};
export default ExperienceData;
