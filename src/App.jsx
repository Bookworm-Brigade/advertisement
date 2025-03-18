import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router";
import AdminPage from "./pages/AdminDashboard/AdminPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
