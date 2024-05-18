import React from 'react'
import ProjectCard from "./ProjectCard";
import real_world from '@/data/Real_world';
import Title from "./Title";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Real_world = () => {
  return (
    <div>
       <section>
	   <div className="flex items-center gap-2">
          <Button className="mb-6 " variant="outline" size="icon">
			
            <Link href="/">
            <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Title>Landing_pages.</Title>
        </div>
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
