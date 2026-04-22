import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactUsPage from "./pages/ContactUsPage";
import PostProjectPage from "./pages/PostProjectPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/projects/post" element={
        <ProtectedRoute>
          <PostProjectPage />
        </ProtectedRoute>
      } />
      <Route path="/socials" element={<ContactUsPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}