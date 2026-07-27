import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { Curriculum } from "@/components/sections/curriculum";
import { ExerciseWidget } from "@/components/sections/exercise-widget";
import { Tenets } from "@/components/sections/tenets";
import { Discipline } from "@/components/sections/discipline";
import { AcademyRankings } from "@/components/sections/academy-rankings";
import { Patronage } from "@/components/sections/patronage";
import { Testimonia } from "@/components/sections/testimonia";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Curriculum />
        <ExerciseWidget />
        <Tenets />
        <Discipline />
        <AcademyRankings />
        <Patronage />
        <Testimonia />
      </main>
      <SiteFooter />
    </>
  );
}
