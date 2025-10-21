
import Link from 'next/link';
import { Milestone } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '../ui/button';

export default function Footer() {
    return (
      <footer className="py-8 border-t bg-background/80">
        <div className="container text-center text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                <Milestone className="w-8 h-8" />
                <span className="text-2xl font-bold font-headline text-foreground">Roadmappp</span>
            </Link>

            <div className="flex items-center justify-center gap-4 text-sm font-medium">
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                    The Man Behind
                </Link>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#">
                                <Button variant="outline">Get Mentorship</Button>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="top" align="center" className="max-w-xs text-center">
                            <p>Confused about your career path? Get clarity and guidance from industry experts to navigate your journey in tech.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

            <p className="text-sm">&copy; {new Date().getFullYear()} Roadmappp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
