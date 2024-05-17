import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ProjectCard = ({ title, description }) => {
	
	return (
		<Card className="cursor-pointer mt-2 ">
			<CardHeader className="space-y-4 block">
			

				<CardTitle>{title}</CardTitle>

				
			</CardHeader>

			<CardContent className="">
				<ul className="text-muted-foreground list-disc pl-4 tracking-wide break-words space-y-1">
					{description?.map((desc, index) => (
						<li key={index}>{desc}</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
