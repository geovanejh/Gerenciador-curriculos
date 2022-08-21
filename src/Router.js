import { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header/Header";
import Loading from "./components/Loading/Loading";
import ApplicantDetails from "./pages/ApplicantDetails";
import CandidatoForm from "./pages/CandidatoForm";
import Candidatos from "./pages/Candidatos";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { isAuth } from "./store/actions/AuthAction";

const Router = ({ dispatch, auth }) => {
  useEffect(() => {
    isAuth(dispatch);
  }, []);

  return auth.isLoading === true ? (
    <Loading />
  ) : (
    <div>
      {auth.isLogged === true && <Header />}
      <Routes>
        {auth.isLogged === true ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/candidato/:id" element={<ApplicantDetails />} />
            <Route path="/candidatos/" element={<Candidatos />} />
            <Route path="/candidatos/form" element={<CandidatoForm />} />
            <Route path="/candidatos/form/:id" element={<CandidatoForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Router);
