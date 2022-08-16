const AddressData = ({ formik }) => {
  return (
    <div>
      <label htmlFor="">dois</label>
      <input
        type="text"
        id="dois"
        onChange={formik.handleChange}
        value={formik.values.dois}
        onBlur={formik.handleBlur}
        formik={formik}
      />
    </div>
  );
};
export default AddressData;
