import { Fields } from "../FormField/FormField.styled";
import { Label } from "../Label.styled";
import { Select } from "../Select.styled";

const SelectField = ({ options, id, label, value, onChange, onBlur, formik }) => {
  const field = formik.getFieldMeta(id);
  return (
    <Fields>
      <Label htmlFor={id} errors={field.error} touched={field.touched}>
        {label}
      </Label>
      <Select
        name={id}
        id={id}
        disabled={options.length > 1 ? false : true}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        errors={field.error}
        touched={field.touched}
      >
        {options.map((e, i) => (
          <option key={i} value={e.id}>
            {e.nome}
          </option>
        ))}
      </Select>
      {field.touched && field.error ? <span>{field.error}</span> : null}
    </Fields>
  );
};
export default SelectField;
