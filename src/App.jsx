import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminPage from "./pages/AdminDashboard/AdminPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/User/UserPage";
import AdDetail from "./pages/User/AdDetail";
import LandingPage from "./pages/User/LandingPage";
import LogPage from "./pages/User/LogPage";
import RegisterPage from "./pages/User/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/detail" element={<AdDetail />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/log" element={<LogPage />} />
          <Route path="/signup" element={<RegisterPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
