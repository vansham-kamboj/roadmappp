
"use client";

import type { RoadmapStep } from '@/lib/roadmap-data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface RoadmapTimelineProps {
  roadmap: RoadmapStep[];
  onStepSelect: (step: RoadmapStep) => void;
  selectedStep: RoadmapStep | null;
}

export default function RoadmapTimeline({ roadmap, onStepSelect, selectedStep }: RoadmapTimelineProps) {
  return (
    <div className="relative pl-8 pr-4">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true"></div>
      <ul className="space-y-4">
        {roadmap.map((step, index) => {
          const isSelected = selectedStep?.title === step.title;

          return (
            <li key={step.title} className={cn("relative flex w-full items-center timeline-item")} style={{ animationDelay: `${index * 100}ms` }}>
               <div className={cn(
                  "absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-colors",
                  isSelected ? "bg-primary" : "bg-border"
                )}>
                  <div className={cn(
                    "w-full h-full rounded-full border-4 border-background transition-transform",
                     isSelected ? "scale-100" : "scale-0"
                  )}></div>
               </div>
              <div className="pl-8 w-full">
                <Button
                  variant={isSelected ? "default" : "outline"}
                  className={cn(
                    "w-full h-auto py-3 px-4 text-left shadow-md transition-all duration-300 transform",
                    "hover:-translate-y-1 hover:shadow-lg",
                     isSelected ? "bg-primary text-primary-foreground scale-105" : "bg-card"
                  )}
                  onClick={() => onStepSelect(step)}
                >
                  <div className="flex-grow">
                    <h3 className="font-headline font-bold text-lg">{step.title}</h3>
                    <p className="text-sm opacity-80">{step.description}</p>
                  </div>
                  <CheckCircle2 className={cn("w-5 h-5 transition-colors ml-4", isSelected ? 'text-primary-foreground' : 'text-primary' )} />
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
