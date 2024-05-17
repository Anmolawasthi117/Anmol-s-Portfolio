import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Github, MoveUpRight } from "lucide-react";
import SocialLinkButton from "./SocialLinkButton";
import { Badge } from "./ui/badge";

const ProjectCard = ({ badge, title, githubUrl, previewUrl, description }) => {
	const color = badge === "Upcoming" ? "bg-yellow-500" : "bg-green-500";

	return (
		<Card className="cursor-pointer ">
			<CardHeader className="space-y-4 block">
				{badge && <Badge className={color}>{badge}</Badge>}

				<CardTitle>{title}</CardTitle>

				<div className="flex items-center gap-2">
					<SocialLinkButton url={githubUrl}>
						<Github />
					</SocialLinkButton>

					<button>
						<a
							href={previewUrl}
							target="_blank"
							className="flex border py-1 px-4 rounded-full items-center gap-1 hover:bg-primary-foreground hover:gap-2"
						>
							Preview
							<MoveUpRight size={16} />
						</a>
					</button>
				</div>
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
