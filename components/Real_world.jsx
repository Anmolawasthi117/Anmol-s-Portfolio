import React from 'react'
import ProjectCard from "./ProjectCard";
import real_world from '@/data/Real_world';
import Title from "./Title";
const Real_world = () => {
  return (
    <div>
       <section>
			<Title>Real_world_projects.</Title>

			<div className="space-y-2">
				{real_world.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
    </div>
  )
}

export default Real_world
