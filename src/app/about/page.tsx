import Hero from "@/components/home/hero";
import Content from "@/components/about/content";
import VisiMisi from "@/components/about/visi-misi";
import LifeStory from "@/components/about/life-story";

export default function About() {
  return (
    <div>
      <Hero />
      <VisiMisi />
      <Content />
      <LifeStory />
    </div>
  );
}
