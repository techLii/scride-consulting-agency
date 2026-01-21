// components/header.tsx
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export default async function Header() {
  return (
    <nav className="sticky top-0 bg-white dark:bg-black border-b border-border w-full z-50 shadow-sm">
      <div className="flex w-full items-center md:container mx-auto justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            SCRIDE CONSULTING AGENCY
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/about" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link 
            href="/work" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link 
            href="/gallery" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Gallery
          </Link>

          <Link 
            href="/contact" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
