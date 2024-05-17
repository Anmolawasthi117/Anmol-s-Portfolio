import React from 'react'
import ProjectCard from "./ProjectCard";
import Landing_pages from '@/data/Landing_pages';
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Title from "./Title";
const Landing_page = () => {
  return (
    <div>
      <section className='mt-5'>
	  <div className="flex items-center gap-2">
          <Button className="mb-6 " variant="outline" size="icon">
			
            <Link href="/">
            <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Title>Landing_pages.</Title>
        </div>

			<div className="space-y-2">
				{Landing_pages.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
    </div>
  )
}

export default Landing_page
