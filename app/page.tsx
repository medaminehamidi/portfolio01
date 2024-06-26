"use client"
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { allProjects } from "contentlayer/generated";

const navigation = [
	{ name: "Projets", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	console.log(allProjects)
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-500 text-white hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-center text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Med Amine <br/> HAMIDI
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm md:text-lg text-white ">
				Je suis un ingénieur informatique spécialisé dans la construction (et occasionnellement dans la conception) d'expériences digitales exceptionnelles.<br/> En ce moment, je me concentre sur la création de produits d'apprentissage en
				ligne accessibles chez{" "}
					<Link
						target="_blank"
						href="https://alphorm.com/"
						className="underline duration-500 hover:text-zinc-300"
					>
						Alphorm.
					</Link>
				</h2>
				<button onClick={() => console.log('hello')}>helo</button>
			</div>
		</div>
	);
}
