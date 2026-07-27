"use client";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { courses } from "@/lib/content";

export function CourseDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        Schools of Thought
        <ChevronDown className="size-4" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-[var(--radius-tablet)] border border-border shadow-relief-md">
        {courses.map((course) => (
          <DropdownMenuItem
            key={course.id}
            render={<a href={`#course-${course.id}`} />}
            className="flex cursor-pointer items-center gap-2 text-sm"
          >
            <span aria-hidden="true">{course.emblem}</span>
            {course.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
