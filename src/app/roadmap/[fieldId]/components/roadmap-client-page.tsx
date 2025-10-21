
'use client';

import { useState, useCallback } from 'react';
import type { Field, RoadmapStep } from '@/lib/roadmap-data';
import RoadmapTimeline from './roadmap-timeline';
import StepDetails from './step-details';
import { aggregateResources, type AggregateResourcesOutput } from '@/ai/flows/ai-resource-aggregation';
import DETAILS from '@/lib/roadmap-details.json';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

type DetailsCache = {
  [key: string]: AggregateResourcesOutput;
};

const detailsCache = DETAILS as DetailsCache;

export default function RoadmapClientPage({ field, relatedFields }: { field: Field; relatedFields: Field[] }) {
  const [selectedStep, setSelectedStep] = useState<RoadmapStep | null>(null);
  const [details, setDetails] = useState<AggregateResourcesOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleStepSelect = useCallback(async (step: RoadmapStep) => {
    setSelectedStep(step);
    setIsLoading(true);
    setError(null);
    setDetails(null);
    if(isMobile) {
      setIsSheetOpen(false);
    }

    const cacheKey = `${field.id}/${step.title}`;

    try {
      if (detailsCache[cacheKey]) {
        setDetails(detailsCache[cacheKey]);
      } else {
        const result = await aggregateResources({ field: field.name, step: step.title });
        detailsCache[cacheKey] = result;
        setDetails(result);
      }
    } catch (e: any) {
      setError('Failed to load step details. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [field.id, field.name, isMobile]);

  const renderDesktopContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 flex-1">
      <div className="md:col-span-1 lg:col-span-1">
        <div className="sticky top-24">
          <RoadmapTimeline
            roadmap={field.roadmap}
            selectedStep={selectedStep}
            onStepSelect={handleStepSelect}
          />
        </div>
      </div>
      <div className="md:col-span-2 lg:col-span-3">
        <StepDetails
          selectedStep={selectedStep}
          details={details}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );

  const renderMobileContent = () => (
    <div>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="mb-6 w-full">
            View Roadmap Steps
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>{field.name} Roadmap</SheetTitle>
            <SheetDescription>Select a step to see the details.</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <RoadmapTimeline
              roadmap={field.roadmap}
              selectedStep={selectedStep}
              onStepSelect={handleStepSelect}
            />
          </div>
        </SheetContent>
      </Sheet>
      
      <StepDetails
        selectedStep={selectedStep}
        details={details}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
  
  return (
    <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit">
                <ArrowLeft className="w-4 h-4" />
                Back to all roadmaps
            </Link>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">
            {field.name}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
            {field.details}
          </p>
        </div>

        {relatedFields.length > 0 && (
          <div className="mb-12 flex justify-center flex-wrap gap-2">
            <span className="text-sm text-muted-foreground self-center mr-2">Related Fields:</span>
            {relatedFields.map(related => (
              <Link href={`/roadmap/${related.id}`} key={related.id}>
                 <Badge variant="secondary" className="hover:bg-primary/20 transition-colors">{related.name}</Badge>
              </Link>
            ))}
          </div>
        )}

      {isMobile ? renderMobileContent() : renderDesktopContent()}
    </div>
  );
}
