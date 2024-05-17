import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Title from "./Title";
import {skills} from "../data/stacks"

const Skills = () => {
	

	return (
		<section>
			<Title>Tech stack.</Title>

			<div className="grid lg:grid-cols-2 gap-2">
				{skills.map((skill, index) => (
					<Card key={index} className="cursor-pointer">
						<CardHeader>
							<CardTitle>{skill.title}</CardTitle>
						</CardHeader>

						<CardContent className="flex items-center flex-wrap gap-3">
							{skill.stacks.map((stack, index) => (
								<img
									key={index}
									src={stack}
									alt="html"
									width={48}
									className="rounded"
								/>
							))}
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Skills;
