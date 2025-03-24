import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminPage from "./pages/AdminDashboard/AdminPage";
import UserPage from "./pages/User/UserPage";
import Signup from "./services/Signup";
import Login from "./services/Login";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update" element={<UpdateUser />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
