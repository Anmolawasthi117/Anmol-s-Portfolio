import About from "@/components/About";
import P_types from "@/components/p_types";
import Skills from "@/components/Stacks";

export default function Home() {
	return (
		<main className="min-h-screen space-y-12">
			<About />
			<Skills />
			<P_types/>
		</main>
	);
}
