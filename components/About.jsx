import React from "react";
import { Button } from "./ui/button";
import { MoveUpRight, Download } from "lucide-react";
import HyperButton from "./HyperButton";
import Link from "next/link";

const About = () => {
	return (
		<section className="flex items-center flex-col">
			<div className="relative rounded-xl bg-slate-400 md:my-28 my-16">
				<img
					src="https://i.pinimg.com/564x/79/15/86/79158634d9858285c963946015f44acf.jpg"
					alt="avatar"
					width={80}
					className="absolute -top-8 left-32 shadow-lg shadow-black rotate-12 rounded-xl"
				/>
				<img
					src="https://i.pinimg.com/236x/a6/27/43/a627431216b8223f1d93dab7731120c0.jpg"
					// src="https://i.pinimg.com/564x/79/15/86/79158634d9858285c963946015f44acf.jpg"
					alt="avatar"
					width={100}
					className="hidden  sm:block absolute top-20 -left-24 shadow-lg shadow-black -rotate-45 rounded-xl"
				/>

				<img
					src="https://i.pinimg.com/564x/d6/0e/90/d60e904a16529890f2810b6d5ea34be0.jpg"
					alt="avatar"
					width={148}
					className="rounded-xl border-2 border-b-4 border-pink-200 border-b-white"
				/>
			</div>

			<div className="flex items-center flex-col gap-2">
				<div className="text-xl md:text-2xl font-medium">
				Hello, I'm Anmol
					<span className="text-2xl md:text-3xl">👋</span>
				</div>

				<div>
					<h2 className="text-3xl text-center md:text-4xl font-extrabold dark:bg-gradient-to-l dark:from-blue-300 dark:to-teal-200 bg-gradient-to-r from-red-600 to-orange-400 text-transparent bg-clip-text inline-block py-1">
						Full-Stack Developer
					</h2>
				</div>

				<div className="w-[86%] text-center text-muted-foreground md:text-lg  tracking-wide">
					a Full-Stack Developer and part time chess player,
					📍 <br className="hidden lg:block" /> i Love to craft
					responsive and great user experience products ✨ and
					contributing back to dev community 😊
				</div>

				<div className="flex flex-wrap justify-center items-center gap-2 mt-8">
					<Link
						href="mailto:anmolawasthi117@gmail.com"
						target="_blank"
					>
						<Button
							variant="outline"
							className="rounded-full text-lg md:px-6 flex gap-2 border-gray-700 bg-transparent hover:bg-transparent hover:gap-3"
						>
							Connect me here <MoveUpRight size={18} />
						</Button>
					</Link>

					<Link href="https://drive.google.com/file/d/1uW43TOUxF_hRN-CK8FUxlVtK5MlUWG4O/view?usp=sharing">
						<HyperButton>
							Resume <Download size={18} />
						</HyperButton>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
