const StudiesData = ({ formik }) => {
  return (
    <div>
      <label htmlFor="">tres</label>
      <input
        type="text"
        id="tres"
        onChange={formik.handleChange}
        value={formik.values.tres}
        onBlur={formik.handleBlur}
        formik={formik}
      />
    </div>
  );
};
export default StudiesData;
