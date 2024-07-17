"use client";

import { useState } from "react";
import BlogsAndArticles from "./components/content/BlogsAndArticles";
import DigitalLibrary from "./components/content/DigitalLibrary";
import FilmsAndDocumentaries from "./components/content/FilmsAndDocumentaries";
import MeditationContent from "./components/content/MeditationContent";
import Thasmai from "./components/content/Thasmai";
import ThasmaiSolutions from "./components/content/ThasmaiSolutions";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {

	const [section, setSection] = useState("section1");

    return (
      	<main className="min-h-screen m-0 p-0">
			<div className="w-full h-[88px] m-0 fixed top-0 left-0 right-0 z-20">
				<Navbar />
			</div>
			<hr className="m-0 border-b-[0.01px] border-t-0 border-gray-300"/>

			<div className="w-full min-h-screen m-0 mt-[88px] p-0 relative">

				{/* Content Section */}
				<div className="w-full md:h-screen">
					{section === "section1" && <Thasmai />}
					{section === "section2" && <MeditationContent/> }
					{section === "section3" && <ThasmaiSolutions /> }
					{section === "section4" && <BlogsAndArticles/> }
					{section === "section5" && <DigitalLibrary/> }
					{section === "section6" && <FilmsAndDocumentaries/> }
				</div>

				{/* Sidebar */}
				<div className="w-[20vw] min-h-[600px] absolute top-0 right-0">
					<Sidebar section={section} setSection={ setSection } />
				</div>

			</div>
      	</main>
    );
}
