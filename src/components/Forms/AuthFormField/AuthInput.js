import { Label } from "../Label.styled";
import { AuthInputStyles, AuthInputField } from "./AuthInput.styled";

const AuthInput = ({ label, formik, id, onChange, onBlur, value, type }) => {
  const field = formik.getFieldMeta(id);
  const props = formik.getFieldProps(id);
  return (
    <AuthInputStyles>
      <Label htmlFor={id} errors={field.error} touched={field.touched}>
        {label}
      </Label>
      <AuthInputField
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        errors={field.error}
        touched={field.touched}
      />
      {field.touched && field.error ? <span>{field.error}</span> : null}
    </AuthInputStyles>
  );
};
export default AuthInput;
