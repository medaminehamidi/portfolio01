import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

export const revalidate = 60;
export default async function ProjectsPage() {
	const views = 0

	const featured = allProjects.find((project) => project.slug === "unkey")!;
	const top2 = allProjects.find((project) => project.slug === "planetfall")!;
	const top3 = allProjects.find((project) => project.slug === "highstorm")!;
	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are from work and some are on my own time.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						<Link href={`/projects/${featured.slug}`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
										{featured.date ? (
											<time dateTime={new Date(featured.date).toISOString()}>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: "medium",
												}).format(new Date(featured.date))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>
									<span className="flex items-center gap-1 text-xs text-zinc-500">
										<Eye className="w-4 h-4" />{" "}
										{Intl.NumberFormat("en-US", { notation: "compact" }).format(
											0,
										)}
									</span>
								</div>

								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									{featured.title}
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
									{featured.description}
								</p>
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project} views={0} />
							</Card>
						))}
					</div>
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={0} />
								</Card>
							))}
					</div>
				</div>
				<div className="w-full h-px bg-zinc-800" />
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Technical
					</h2>
					<p className="mt-4 text-zinc-400">
						As a Full-Stack Developer, I possess a diverse skill set and extensive expertise in both front-end and back-end web development, enabling me to design, build, and deploy complete and robust web applications. My proficiency in various programming languages, frameworks, and technologies allows me to handle all layers of a web application with efficiency and precision.
						<br /><br />
						Front-End Development:<br />
						I am highly proficient in front-end technologies such as HTML, CSS, and JavaScript, and I have experience in building responsive and visually appealing user interfaces. Leveraging frameworks mainly React.js I create interactive and dynamic user experiences that optimize usability and engagement. My strong understanding of UI/UX principles ensures that the applications I develop are intuitive, user-friendly, and aesthetically pleasing.
						<br /><br />
						Back-End Development:<br />
						I possess comprehensive knowledge of back-end programming languages like Node.js and C# .Net. I have expertise in developing server-side logic and RESTful APIs, enabling seamless communication between the front-end and back-end components. I have experience with various databases, including PostgreSQL, and MongoDB, and I design and implement efficient database structures to store and retrieve application data securely.
						<br /><br />
						API Development:<br />
						I excel in building and integrating Application Programming Interfaces (APIs) that enable data exchange and interaction between different components of the web application. This includes creating well-documented and scalable APIs that adhere to industry standards and facilitate seamless integration with external services and third-party applications.
						<br /><br />
						Version Control and Collaboration:<br />
						I am proficient in using version control systems like Git to manage and track code changes efficiently. Collaboration is at the core of my development process, and I work effectively in cross-functional teams, collaborating with designers, other developers, and stakeholders to deliver high-quality solutions.
						<br /><br />
						Problem-Solving and Continuous Learning:<br />
						I am a detail-oriented and analytical problem solver, capable of identifying and resolving issues across the entire development stack. My passion for continuous learning and staying updated with the latest web technologies and best practices empowers me to deliver modern and efficient solutions.
						<br /><br />
						With a comprehensive understanding of front-end and back-end development, combined with strong problem-solving and collaboration skills, I am committed to delivering innovative and scalable web applications that drive business success and enhance user experiences. My Full-Stack Developer expertise allows me to contribute significantly to the complete software development lifecycle and consistently deliver high-quality solutions.
					</p>
				</div>
			</div>
		</div>
	);
}
