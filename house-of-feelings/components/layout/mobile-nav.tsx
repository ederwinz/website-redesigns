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
import { membersDropdownLinks, navLinks, siteConfig } from "@/lib/content";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="rounded-none border-3 border-border shadow-card-sm md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="border-l-3 border-border bg-card">
        <SheetHeader>
          <SheetTitle className="font-display text-lg">
            {siteConfig.name}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <SheetClose
              key={link.href}
              render={<a href={link.href} />}
              nativeButton={false}
              className="py-2 text-sm font-medium uppercase tracking-wide hover:text-primary"
            >
              {link.label}
            </SheetClose>
          ))}
          <span className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
            Members only
          </span>
          {membersDropdownLinks.map((link) => (
            <SheetClose
              key={link.href}
              render={<a href={link.href} />}
              nativeButton={false}
              className="py-2 pl-3 text-sm font-medium uppercase tracking-wide hover:text-primary"
            >
              {link.label}
            </SheetClose>
          ))}
          <SheetClose
            render={<a href="/account" />}
            nativeButton={false}
            className="mt-2 py-2 text-sm font-medium uppercase tracking-wide hover:text-primary"
          >
            Account
          </SheetClose>
          <SheetClose
            render={<a href="/cart" />}
            nativeButton={false}
            className="py-2 text-sm font-medium uppercase tracking-wide hover:text-primary"
          >
            Cart
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
