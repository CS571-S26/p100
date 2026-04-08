import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactUsPage from "./pages/ContactUsPage"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/socials" element={<ContactUsPage />} />
    </Routes>
  );
}
