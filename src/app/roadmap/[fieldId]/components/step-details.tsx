
"use client";

import type { AggregateResourcesOutput } from '@/ai/flows/ai-resource-aggregation';
import type { RoadmapStep } from '@/lib/roadmap-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Bot, AlertCircle, ExternalLink, GraduationCap, BookOpen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface StepDetailsProps {
  details: AggregateResourcesOutput | null;
  isLoading: boolean;
  error: string | null;
  selectedStep: RoadmapStep | null;
}

function LoadingSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-1/3 mb-4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="space-y-3 pt-4">
          <Skeleton className="h-6 w-1/4 mb-4" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-5/6" />
        </div>
      </CardContent>
    </Card>
  );
}

function Placeholder() {
  return (
    <div className="flex flex-col items-center justify-center h-full rounded-lg border-2 border-dashed border-muted bg-card text-center p-8">
      <Bot className="w-16 h-16 text-muted-foreground mb-4" />
      <h3 className="font-headline text-xl font-semibold text-foreground">Your Learning Assistant</h3>
      <p className="text-muted-foreground mt-2">
        Select a step from the roadmap to view a detailed plan and recommended resources.
      </p>
    </div>
  );
}

export default function StepDetails({ details, isLoading, error, selectedStep }: StepDetailsProps) {
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full rounded-lg border-2 border-destructive/50 bg-destructive/10 text-center p-8 text-destructive">
        <AlertCircle className="w-16 h-16 mb-4" />
        <h3 className="font-headline text-xl font-semibold">An Error Occurred</h3>
        <p className="mt-2">{error}</p>
      </div>
    );
  }
  
  if (!details || !selectedStep) {
    return <Placeholder />;
  }

  return (
    <Card className="h-full overflow-hidden flex flex-col shadow-lg bg-card">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{selectedStep.title}</CardTitle>
        <CardDescription>{selectedStep.description}</CardDescription>
      </CardHeader>
      <ScrollArea className="flex-grow">
        <CardContent className="pt-0">
          <div className="mb-8">
            <h4 className="font-headline text-lg font-semibold flex items-center gap-2 mb-3"><GraduationCap className="w-5 h-5 text-primary" /> Detailed Plan</h4>
            <p className="text-muted-foreground whitespace-pre-line">{details.roadmapDetails}</p>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" /> Recommended Resources</h4>
            <ul className="space-y-2">
              {details.resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.startsWith('http') ? resource : `https://www.google.com/search?q=${encodeURIComponent(resource)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-3 rounded-md bg-secondary hover:bg-primary/20 transition-colors w-full group"
                  >
                     <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="truncate text-sm font-medium">{resource}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
