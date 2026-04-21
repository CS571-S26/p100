import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";

export default function ProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    const { data, err } = await supabase.from("Projects").select();
    if (err) console.error(err);
    console.log(data);
    setProjects(data);
  }

  return (
    <div>
      <h1>Project Page</h1>
    </div>
  );
}
