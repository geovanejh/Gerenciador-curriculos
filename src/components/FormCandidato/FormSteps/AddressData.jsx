import FormField from "../../Forms/FormField/FormField";
import { FormRow } from "../../Forms/FormRow";

const AddressData = ({ formik }) => {
  return (
    <>
      <FormRow grid="0.5fr 1fr 0.2fr">
        <FormField
          label="CEP"
          placeholder="00000-000"
          id="cep"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cep}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <FormField
          label="rua"
          placeholder="Ex: José Silva Pinheiros"
          id="rua"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.rua}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <FormField
          label="numero"
          placeholder="Ex: 0000"
          id="numero"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.numero}
          onBlur={formik.handleBlur}
          formik={formik}
        />
      </FormRow>
      <FormRow grid="1fr 1fr 0.5fr">
        <FormField
          label="bairro"
          placeholder="Ex: Centro"
          id="bairro"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.bairro}
          onBlur={formik.handleBlur}
          formik={formik}
        />

        <FormField
          label="cidade"
          placeholder="Ex: São Paulo"
          id="cidade"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cidade}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <FormField
          label="estado"
          placeholder="Ex: Rio Grande do Sul"
          id="estado"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.estado}
          onBlur={formik.handleBlur}
          formik={formik}
        />
      </FormRow>
    </>
  );
};
export default AddressData;
