
'use client'

import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import darkModeBG from "public/wickedbackground-dark_mode.svg";
import lightModeBG from "public/wickedbackground.svg";
import { Arrow } from "@/components/arrow";
import SvgWave from "src/components/SvgWave";
import { useTheme } from "src/components/ThemeProvider";
import { typewriterWords } from "src/utils/constants";

const Home = ({ containerRef }) => {
	const theme = useTheme();
	const zIndex: any = {
		zIndex: "1",
		textAlign: "center",
	};

	return (
		<section id="home" ref={containerRef} style={{ zIndex: "0" }}>
			<Image
				src={theme === "Light" ? lightModeBG : darkModeBG}
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt="Background Image"
			/>
			<h1 id="profile-h1" style={zIndex}>
				Hello, I am Myles Jefferson
			</h1>
			<h2 style={zIndex}>
				A <span className="web-text">&lt;Full-Stack Developer /&gt;</span>{" "}
				experienced with{" "}
				<span>
					<Typewriter words={typewriterWords} cursor cursorStyle="_" />
				</span>
			</h2>
			<a
				href="https://github.com/Myles-the-Coder"
				target="_blank"
				className="btn mt-4"
				rel="noreferrer"
				style={zIndex}
			>
				Explore my code on GitHub
			</a>
			<Arrow />
			<SvgWave />
		</section>
	);
};

export default Home;
