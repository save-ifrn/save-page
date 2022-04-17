import { ReactNode } from "react";

interface PrivacyPolicySectionProps {
	index: number;
	title: string;
	children: ReactNode;
}

export function PrivacyPolicySection(props: PrivacyPolicySectionProps) {
	return (
		<>
			<section
				id={`section${props.index}`}
				className="w-full flex flex-col gap-6 text-[#f7f7f7]"
			>
				<header className="flex flex-col gap-4 text-left">
					<h3 className="text-lg sm:text-xl font-medium">
						Seção {props.index}
					</h3>
					<h2 className="text-xl sm:text-2xl font-bold">
						{props.title}
					</h2>
				</header>

				<main className="w-full text-justify leading-relaxed flex flex-col gap-6">
					{props.children}
				</main>
			</section>
		</>
	);
}
