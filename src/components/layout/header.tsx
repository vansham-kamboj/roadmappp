
import Link from 'next/link';
import { Milestone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <Milestone className="w-8 h-8" />
          <span className="text-2xl font-bold font-headline text-white">Roadmappp</span>
        </Link>
      </div>
    </header>
  );
}
