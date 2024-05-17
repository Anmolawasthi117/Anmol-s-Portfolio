import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";
import Title from "./Title";

const Projects = () => {
	return (
		<section>
			<Title>projects.</Title>

			<div className="space-y-2">
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
