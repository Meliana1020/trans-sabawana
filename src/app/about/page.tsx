import Hero from "@/app/home/hero";
import Content from "./content";
import VisiMisi from "./visi-misi";
import LifeStory from "./life-story";

export default function About() {
    return(
        <div>
         <Hero />
         <VisiMisi />
         <Content />
         <LifeStory />
        </div>
    )
}