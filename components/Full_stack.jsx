import React from 'react';
import ProjectCard from "./ProjectCard";
import full_stack from "@/data/Full_stack"
import Title from "./Title";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Full_stack = () => {
  return (
    <div>
      <section>
	  <div className="flex items-center gap-2">
          <Button className="mb-6 " variant="outline" size="icon">
			
            <Link href="/">
            <ChevronLeft className="h-4 w-4" />
              
            </Link>
          </Button>
          <Title>Full_stack</Title>
        </div>
			<div className="space-y-2">
				{full_stack.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
    </div>
  )
}

export default Full_stack
