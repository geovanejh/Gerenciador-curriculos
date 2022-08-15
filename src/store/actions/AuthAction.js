import api from "../../api";
import { setLoading } from "./UtilsAction";

export const handleLogin = async (values, dispatch, navigate) => {
  setLoading(dispatch);
  try {
    const { data } = await api.post("/login/get-token/login", values);
    api.defaults.headers.common["Authorization"] = data;
    localStorage.setItem("token", data.token);
    dispatch({
      type: "SET_LOGIN",
      token: data.token,
      isLogged: true,
      isLoading: false,
    });
    navigate("/");
  } catch (error) {
    alert(error);
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
    const { data } = await api.post(`/login/criar-usuario`, values);
    navigate("/login");
  } catch (error) {
    alert(error);
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
