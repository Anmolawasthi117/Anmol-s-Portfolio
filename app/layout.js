import { ThemeProvider } from "@/components/theme-provider";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const PJS = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Anmol's Portfolio",
	description: "Portfolio describes all about Anmol awasthi",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="https://i.pinimg.com/236x/0b/20/20/0b20205d47f7f6fbcdce00634e10a75d.jpg" type="image/x-icon" />
			</head>
			<body className={`relative ${PJS.className}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<div
						className="absolute left-1/2 top-72 sm:top-0 -z-10 -translate-x-1/2 blur-2xl sm:blur-3xl xl:-top-6"
						aria-hidden="true"
					>
						<div
							className="aspect-[1155/678] w-screen xl:w-[72.1875rem] bg-gradient-to-tr from-blue-500 to-teal-500 opacity-30"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>

					<div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

					<Header />
					<Container>
						{children}

						<Footer />
					</Container>
				</ThemeProvider>
			</body>
		</html>
	);
}
