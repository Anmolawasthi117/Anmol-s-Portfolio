import React from "react";
import Link from "next/link"; // Import Link for Next.js navigation
import projects_types from "@/data/projects_type";
import P_typescard from "@/components/P_typeCard";
import Title from "./Title";

const P_types = () => {
  return (
    <section>
      <div className="space-y-2">
      <Title>Projecs.</Title>
        {projects_types.map((project, index) => (
          <Link key={index} href={project.route}>
           
            <P_typescard  key={index} {...project} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default P_types;
