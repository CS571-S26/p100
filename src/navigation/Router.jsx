import { Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function Projects() {
  return <h1>Projects Page</h1>;
}

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/socials" element={<Projects />} />
    </Routes>
  );
}
