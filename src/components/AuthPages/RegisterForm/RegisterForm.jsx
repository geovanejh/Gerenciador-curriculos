import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button.styled";
import AuthInput from "../../Forms/AuthFormField/AuthInput";
import { AuthForm, LoginContainer } from "../LoginForm/LoginForm.styled";
import { connect } from "react-redux";
import { handleRegister } from "../../../store/actions/AuthAction";
import * as Yup from "yup";

const RegisterForm = ({ dispatch }) => {
  const navigate = useNavigate();

  Yup.addMethod(Yup.string, "senhaIgual", function (errorMessage) {
    return this.test(`test-password-equals`, errorMessage, function (value) {
      const { path, createError } = this;

      return value === formik.values.senha || createError({ path, message: errorMessage });
    });
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
      confirmaSenha: "",
    },
    onSubmit: (values) => {
      const newObj = {
        email: values.email,
        senha: values.senha,
      };
      handleRegister(newObj, dispatch, navigate);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email inválido").required("- Obrigatório"),
      senha: Yup.string().min(8, "- Curto demais.").max(64, "- Grande demais").required("- Obrigatório"),
      confirmaSenha: Yup.string().senhaIgual("As senhas digitadas são diferentes").required("- Obrigatório"),
    }),
  });

  return (
    <LoginContainer>
      <h2>Registre uma conta</h2>
      <h5>Digite seu email e senha abaixo</h5>
      <AuthForm onSubmit={formik.handleSubmit} autoComplete="off">
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
        <AuthInput
          label="Confirme sua senha*"
          placeholder="Confirme a senha*"
          id="confirmaSenha"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmaSenha}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <Button primary type="submit" id="RegisterForm">
          Registrar-se
        </Button>
      </AuthForm>
    </LoginContainer>
  );
};
export default connect()(RegisterForm);
