import React from "react";
import { Mail, Github, LinkedinIcon, Twitter, Instagram } from "lucide-react";
import SocialLinkButton from "./SocialLinkButton";

const Footer = () => {
	const navItems = [
		{
			icon: Github,
			url: "https://github.com/Anmolawasthi117",
		},
		{
			icon: LinkedinIcon,
			url: "www.linkedin.com/in/anmol-awasthi-167a35294",
		},
		{
			icon: Mail,
			url: "anmolawasthi117@gmail.com",
		},
		{
			icon: Instagram,
			url: "https://www.instagram.com/anmol._7._/",
		},
	];

	return (
		<footer
			id="footer"
			className="py-6 mt-8 flex justify-center items-center gap-6"
		>
			<ul className="flex flex-wrap items-center justify-center gap-6">
				<li className="text-2xl font-medium">anmol</li>
				<li className="text-2xl font-medium">/</li>
				{navItems.map((item, index) => (
					<li className="flex" key={index}>
						<SocialLinkButton url={item.url}>
							<item.icon />
						</SocialLinkButton>
					</li>
				))}
			</ul>
		</footer>
	);
};

export default Footer;
