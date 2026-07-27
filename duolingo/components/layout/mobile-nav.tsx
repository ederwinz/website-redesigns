"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { courses, navLinks, siteConfig } from "@/lib/content";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="rounded-[var(--radius-tablet)] border border-border md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="border-l border-border bg-card">
        <SheetHeader>
          <SheetTitle className="font-display uppercase tracking-wide">
            {siteConfig.name}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <SheetClose
              key={link.href}
              render={<a href={link.href} />}
              nativeButton={false}
              className="py-2 font-label text-xs uppercase hover:text-primary"
            >
              {link.label}
            </SheetClose>
          ))}
          <span className="mt-2 font-label text-xs uppercase text-muted-foreground">
            Schools of Thought
          </span>
          {courses.map((course) => (
            <SheetClose
              key={course.id}
              render={<a href={`#course-${course.id}`} />}
              nativeButton={false}
              className="flex items-center gap-2 py-2 pl-3 text-sm hover:text-primary"
            >
              <span aria-hidden="true">{course.emblem}</span>
              {course.name}
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
