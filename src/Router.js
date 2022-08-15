import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import ApplicantDetails from './pages/ApplicantDetails';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { isAuth } from './store/actions/AuthAction';

const Router = ({ dispatch, auth }) => {
  console.log(auth);
  useEffect(() => {
    isAuth(dispatch);
  }, []);

  return auth.isLoading === true ? (
    <Loading />
  ) : (
    <div>
      <Routes>
        {auth.isLogged === true ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/candidato/:id" element={<ApplicantDetails />} />
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
