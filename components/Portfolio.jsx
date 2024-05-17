import React from 'react'
import ProjectCard from "./ProjectCard";
import portfolio from '@/data/Portfolio';
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Title from "./Title";
const Portfolio = () => {
  return (
    <div>
        <section>
		<div className="flex items-center gap-2">
          <Button className="mb-6 " variant="outline" size="icon">
			
            <Link href="/">
            <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Title>Portfolio.</Title>
        </div>


			<div className="space-y-2">
				{portfolio.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
    </div>
  )
}

export default Portfolio
