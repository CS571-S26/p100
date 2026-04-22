import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactUsPage from "./pages/ContactUsPage";
import PostProjectPage from "./pages/PostProjectPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/projects/post" element={<PostProjectPage />} />
      <Route path="/socials" element={<ContactUsPage />} />
    </Routes>
  );
}
