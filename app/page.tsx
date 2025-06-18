"use client";
import { Navigation } from "./pages/component/Navigation";
import { Banner } from "./pages/component/Banner";
import { About } from "./pages/component/About"; 
import { Skills } from "./pages/component/Skills"; 
import { Experience } from "./pages/component/Experience"; 
import { Projects } from "./pages/component/Projects"; 
import { Faq } from "./pages/component/Faq"; 
import { Contact } from "./pages/component/Contact"; 
import { Footer } from "./pages/component/Footer"; 

export default function Home() {
  return (
    <>
    <Navigation />
    <Banner/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Faq/>
    <Contact/>
    <Footer/>
    </>
  );
}
