import { Routes, Route } from "react-router";
import { LoginPage } from "../modules/auth/LoginPage";
import { RegisterPage } from "../modules/auth/RegisterPage";
import { AppVisitor } from "../modules/visitor/AppVisitor";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppVisitor />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
