import api from "../../api";

export const handleLogin = async (values, dispatch, navigate) => {
  console.log(values);
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
    console.log(error);
  }
};
