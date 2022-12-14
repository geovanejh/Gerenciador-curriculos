import { setLoading } from "./UtilsAction";
import { toast } from "react-toastify";
import { api } from "../../api";

export const handleLogin = async (values, dispatch, navigate) => {
  setLoading(dispatch);
  try {
    const { data } = await api.post("/login/get-token/login", values);

    api.defaults.headers.common["Authorization"] = data.token;
    localStorage.setItem("token", data.token);

    dispatch({
      type: "SET_LOGIN",
      token: data.token,
      isLogged: true,
      isLoading: false,
    });
    toast.success("Seja bem-vindo!");
    navigate("/");
  } catch (error) {
    toast.error(`Usuário incorreto ou inexistente!`);
  }
  setLoading(dispatch);
};

export const handleLogout = (dispatch, navigate) => {
  localStorage.removeItem("token");
  delete api.defaults.headers.common["Authorization"];

  dispatch({
    type: "SET_LOGOUT",
  });
  navigate("/login");
};

export const handleRegister = async (values, dispatch, navigate) => {
  setLoading(dispatch);
  try {
    await api.post(`/login/criar-usuario`, values);
    toast.success("Registrado com sucesso!");
    navigate("/login");
  } catch (error) {
    if (error.response.data.errors) {
      error.response.data.errors.map((e) => {
        toast.error(`Um erro aconteceu! 
        ${e}`);
      });
    } else {
      toast.error("Um erro aconteceu.");
    }
  }
  setLoading(dispatch);
};

export const isAuth = async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = token;
    dispatch({
      type: "SET_LOGIN",
      token: token,
      isLogged: true,
      isLoading: false,
    });
  } else {
    dispatch({
      type: "SET_LOGIN",
      token: "",
      isLogged: false,
      isLoading: false,
    });
  }
};
