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
						Projets
					</h2>
					<p className="mt-4 text-zinc-400">
						Certains de ces projets sont liés au travail et d'autres sont réalisés sur mon mon temps libre.
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
											<span>Prochainement</span>
										)}
									</div>
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
										En savoir plus <span aria-hidden="true">&rarr;</span>
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
						Technique
					</h2>
					<p className="mt-4 text-zinc-400">
						En tant que développeur Full-Stack, je possède un ensemble de compétences diversifiées et une expertise étendue dans le développement web front-end et back-end, ce qui me permet de concevoir, construire et déployer des applications web complètes et robustes. Ma maîtrise des différents langages de programmation, frameworks et technologies me permet de gérer toutes les couches d'une application web avec efficacité et précision.						<br /><br />
						Développement Front-End:<br />
						Je suis très compétent dans les technologies front-end telles que HTML, CSS et JavaScript, et j'ai de l'expérience dans la construction d'interfaces utilisateur responsives et visuellement intéressantes. Ma forte compréhension des principes UI/UX garantit que les applications que je développe sont intuitives, conviviales et esthétiquement agréables.						<br /><br />
						Développement Back-End:<br />
						Je possède une connaissance approfondie des langages de programmation back-end tels que Node.js et C# .Net. J'ai de l'expertise dans le développement de la logique côté serveur et des API RESTful, permettant une communication transparente entre les composants front-end et back-end. J'ai de l'expérience avec diverses bases de données, y inclus PostgreSQL et MongoDB, et je développe et implémente des structures de base de données efficaces pour stocker et récupérer les données de l'application en toute sécurité.						<br /><br />
						Développement API:<br />
						J'excelle dans la création et l'intégration d'interfaces de programmation d'applications (API) qui permettent l'échange de données et l'interaction entre les différents composants de l'application web. Il s'agit notamment de créer des API bien documentées et évolutives qui respectent les normes du secteur et facilitent l'intégration transparente avec des services externes et des applications indépendantes.						<br /><br />
						Contrôle des versions et collaboration:<br />
						Je sais utiliser des systèmes de contrôle de version tels que Git pour gérer et suivre efficacement les modifications du code. La collaboration est au cœur de mon système de développement, et je travaille efficacement au sein d'équipes interfonctionnelles, en collaboration avec des concepteurs, d'autres développeurs et des parties concernées, afin de fournir des solutions de haute qualité.						<br /><br />
						Problem-Solving et développement continu:<br />
						J'ai le sens du détail et de l'analyse, et je suis capable d'identifier et de résoudre des problèmes tout au long du processus de développement. Ma passion pour l'apprentissage continu et la mise à jour des dernières technologies web et des meilleures pratiques me permet de fournir des solutions modernes et efficaces.						<br /><br />
						Avec une compréhension complète du développement front-end et back-end, combinée à de fortes compétences en matière de résolution de problèmes et de collaboration, je m'engage à fournir des applications web innovantes et évolutives qui favorisent la réussite de l'entreprise et améliorent l'expérience de l'utilisateur. Mon expertise en tant que développeur Full-Stack me permet de contribuer de manière significative au cycle de vie complet du développement logiciel et de fournir constamment des solutions de haute qualité.					</p>
				</div>
			</div>
		</div>
	);
}
