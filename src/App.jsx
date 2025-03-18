import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminPage from "./pages/AdminDashboard/AdminPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/User/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
