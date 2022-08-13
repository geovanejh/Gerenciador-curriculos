import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default Router;
