const PersonalData = ({ formik }) => {
  return (
    <div>
      <label htmlFor="">um</label>
      <input
        type="text"
        id="um"
        onChange={formik.handleChange}
        value={formik.values.um}
        onBlur={formik.handleBlur}
        formik={formik}
      />
    </div>
  );
};
export default PersonalData;
