import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../../store/actions/AuthAction";
import { Button } from "../../Button/Button.styled";
import AuthInput from "../../Forms/AuthFormField/AuthInput";
import { AuthForm, LoginContainer } from "./LoginForm.styled";
import { connect } from "react-redux";
import * as Yup from "yup";

const LoginForm = ({ dispatch }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    onSubmit: (values) => {
      handleLogin(values, dispatch, navigate);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("- Email inválido").required("- OBRIGATÓRIO"),
      senha: Yup.string().required("- Obrigatório"),
    }),
  });

  return (
    <LoginContainer>
      <h2>Entre com sua conta</h2>
      <h5>Digite seu login e senha abaixo</h5>
      <AuthForm onSubmit={formik.handleSubmit}>
        <AuthInput
          label="Email*"
          placeholder="Email*"
          id="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <AuthInput
          label="Senha*"
          placeholder="Senha*"
          id="senha"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.senha}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <Button primary type="submit">
          Login
        </Button>
      </AuthForm>
    </LoginContainer>
  );
};
export default connect()(LoginForm);
