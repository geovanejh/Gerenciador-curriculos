const AddressData = ({ formik }) => {
  return (
    <>
      <label htmlFor="cep">cep</label>
      <input
        type="text"
        id="cep"
        onChange={formik.handleChange}
        value={formik.values.cep}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="rua">rua</label>
      <input
        type="text"
        id="rua"
        onChange={formik.handleChange}
        value={formik.values.rua}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="">bairro</label>
      <input
        type="text"
        id="bairro"
        onChange={formik.handleChange}
        value={formik.values.bairro}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="">numero</label>
      <input
        type="text"
        id="numero"
        onChange={formik.handleChange}
        value={formik.values.numero}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="cidade">cidade</label>
      <input
        type="text"
        id="cidade"
        onChange={formik.handleChange}
        value={formik.values.cidade}
        onBlur={formik.handleBlur}
        formik={formik}
      />
      <label htmlFor="estado">estado</label>
      <input
        type="text"
        id="estado"
        onChange={formik.handleChange}
        value={formik.values.estado}
        onBlur={formik.handleBlur}
        formik={formik}
      />
    </>
  );
};
export default AddressData;
