import { ESTADOS } from "../../../utils/lists";
import { maskCEP, maskOnlyNumbers } from "../../../utils/masks";
import FormField from "../../Forms/FormField/FormField";
import { FormRow } from "../../Forms/FormRow";
import SelectField from "../../Forms/SelectField/SelectField";
import { FormContent } from "../FormCandidato/FormCandidato.styled";

const AddressData = ({ formik }) => {
  return (
    <FormContent>
      <FormRow grid="0.5fr 1fr 0.2fr">
        <FormField
          label="CEP"
          placeholder="00000-000"
          id="cep"
          type="text"
          onChange={(e) => formik.setFieldValue("cep", maskCEP(e.target.value))}
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
          label="número"
          placeholder="Ex: 0000"
          id="numero"
          type="text"
          onChange={(e) => formik.setFieldValue("numero", maskOnlyNumbers(e.target.value))}
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
          placeholder="Ex: Porto Alegre"
          id="cidade"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cidade}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <SelectField
          formik={formik}
          options={ESTADOS}
          label="Estado"
          id="estado"
          onChange={formik.handleChange}
          value={formik.values.estado}
          onBlur={formik.handleBlur}
        />
      </FormRow>
    </FormContent>
  );
};
export default AddressData;
