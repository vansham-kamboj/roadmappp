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
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border rounded-full transform -translate-x-1/2" aria-hidden="true"></div>
      <ul className="space-y-8">
        {roadmap.map((step, index) => {
          const isSelected = selectedStep?.title === step.title;
          const isEven = index % 2 === 0;

          return (
            <li key={step.title} className="flex items-center w-full timeline-item" style={{ animationDelay: `${index * 100}ms` }}>
              <div className={cn('w-1/2', isEven ? 'pr-8' : 'pl-8 ml-auto')}>
                <Button
                  variant={isSelected ? "default" : "outline"}
                  className={cn(
                    "w-full h-auto py-3 px-4 text-left shadow-md transition-all duration-300 transform",
                    "hover:-translate-y-1 hover:shadow-lg",
                     isSelected ? "bg-primary text-primary-foreground scale-105" : "bg-card",
                     isEven ? "flex-row-reverse" : ""
                  )}
                  onClick={() => onStepSelect(step)}
                >
                  <div className="flex-grow">
                    <h3 className="font-headline font-bold text-lg">{step.title}</h3>
                    <p className="text-sm opacity-80">{step.description}</p>
                  </div>
                  <div className="relative">
                    <div className={cn(
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full transition-colors",
                      isSelected ? "bg-primary-foreground/20" : "bg-secondary"
                    )}></div>
                     <CheckCircle2 className={cn("relative w-5 h-5 transition-colors", isSelected ? 'text-primary-foreground' : 'text-primary' )} />
                  </div>
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
