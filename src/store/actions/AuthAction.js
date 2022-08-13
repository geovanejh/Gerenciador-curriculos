import api from "../../api";

export const handleLogin = async (values, dispatch) => {
  try {
    const { data } = await api.post("/login/get-token/login", values);
    const logado = {
      type: "SET_LOGIN",
      token: data,
    };
    dispatch(logado);
    api.defaults.headers.common["Authorization"] = data;
    localStorage.setItem("token", data);
  } catch (error) {
    console.log(error);
  }
};
