
import Link from 'next/link';
import { Milestone } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <Milestone className="w-8 h-8" />
          <span className="text-2xl font-bold font-headline text-foreground">Roadmappp</span>
        </Link>
        
        <div className="hidden md:flex flex-1 items-center justify-center gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                The Man Behind
            </Link>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="#">
                           <Button>Get Mentorship</Button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs text-center">
                        <p>Confused about your career path? Get clarity and guidance from industry experts to navigate your journey in tech.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>

        <div className="flex flex-1 md:flex-none items-center justify-end">
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
