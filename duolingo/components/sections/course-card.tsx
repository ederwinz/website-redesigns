import type { Course } from "@/lib/types";

export function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <div
      id={`course-${course.id}`}
      className="scroll-mt-24 rounded-[var(--radius-tablet)] border border-border bg-card p-5 shadow-relief-sm transition-shadow hover:shadow-relief-md"
    >
      <div className="flex items-start justify-between">
        <span className="font-label text-xs text-muted-foreground">
          Plaque No. {String(index + 1).padStart(2, "0")}
        </span>
        <span aria-hidden="true" className="text-xl leading-none">
          {course.emblem}
        </span>
      </div>
      <h3 className="mt-3 font-display text-lg tracking-wide uppercase">
        {course.name}
      </h3>
      <p className="mt-1 font-body text-sm text-muted-foreground italic">
        {course.learnerLabel}
      </p>
      <span className="mt-4 inline-block rounded-[var(--radius-tablet)] border border-verdigris-600/40 bg-verdigris-600/10 px-2 py-1 font-label text-[0.65rem] uppercase text-verdigris-600">
        {course.cefrLabel}
      </span>
    </div>
  );
}
