import React from "react";
import { Mail, Github, LinkedinIcon,  InstagramIcon } from "lucide-react";
import SocialLinkButton from "./SocialLinkButton";
import Container from "./Container";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
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
			icon: InstagramIcon,
			url: "https://www.instagram.com/anmol._7._/",
		},
	];

	return (
		<header className="sticky top-0 backdrop-blur-lg z-10 bg-black/30">
			<Container>
				<nav className="py-6 flex justify-between items-center">
					<a href="mailto:anmolawasthi117@gmail.com" target="_blank">
						<div className="logo flex flex-wrap gap-2 text-xl cursor-pointer">
							<Mail />
							anmolawasthi117@gmail.com
						</div>
					</a>

					<ul className="hidden sm:flex gap-6 items-center">
						{navItems.map((item, index) => (
							<li key={index}>
								<SocialLinkButton url={item.url}>
									<item.icon />
								</SocialLinkButton>
							</li>
						))}
						< ModeToggle/>
					</ul>
					
				</nav>
			</Container>
		</header>
	);
};

export default Header;
