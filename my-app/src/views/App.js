import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Register/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
