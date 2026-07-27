import { CourseCard } from "@/components/sections/course-card";
import { Reveal } from "@/components/motion/reveal";
import { courses } from "@/lib/content";

export function Curriculum() {
  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 flex flex-col items-center gap-2 text-center">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-verdigris-600">
            I.
          </span>
          <h2 id="curriculum-heading" className="font-display text-3xl tracking-wide sm:text-4xl">
            The Curriculum
          </h2>
          <p className="max-w-lg font-body text-muted-foreground italic">
            Ten schools of thought, each a discipline unto itself.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Reveal key={course.id} delay={Math.min(index * 0.05, 0.3)}>
              <CourseCard course={course} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
