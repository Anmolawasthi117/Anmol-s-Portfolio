import React from "react";
import { Button } from "./ui/button";

const HyperButton = ({ children }) => {
	return (
		<div className="border-4 border-white/20 rounded-full">
			<Button className="bg-gradient-to-tl from-teal-500 to-teal-200 text-lg md:px-6 flex gap-2 hover:gap-3 rounded-full">
				{children}
			</Button>
		</div>
	);
};

export default HyperButton;
