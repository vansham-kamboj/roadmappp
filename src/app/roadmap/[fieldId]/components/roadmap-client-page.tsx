"use client";

import { useState, useCallback } from 'react';
import type { Field, RoadmapStep } from '@/lib/roadmap-data';
import type { AggregateResourcesOutput } from '@/ai/flows/ai-resource-aggregation';
import { aggregateResources } from '@/ai/flows/ai-resource-aggregation';
import { FieldIcon } from '@/lib/icons';
import RoadmapTimeline from './roadmap-timeline';
import StepDetails from './step-details';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface RoadmapClientPageProps {
  field: Field;
  relatedFields: Field[];
}

export default function RoadmapClientPage({ field, relatedFields }: RoadmapClientPageProps) {
  const [selectedStep, setSelectedStep] = useState<RoadmapStep | null>(null);
  const [details, setDetails] = useState<AggregateResourcesOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStepSelect = useCallback(async (step: RoadmapStep) => {
    setSelectedStep(step);
    setIsLoading(true);
    setDetails(null);
    setError(null);
    
    try {
      const result = await aggregateResources({ field: field.name, step: step.title });
      setDetails(result);
    } catch (e) {
      console.error(e);
      setError('Failed to load resources. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [field.name]);

  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <FieldIcon name={field.icon} className="mx-auto w-16 h-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">{field.name} Roadmap</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">{field.details}</p>
        {relatedFields.length > 0 && (
          <div className="mt-6 flex justify-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground self-center">Related:</span>
            {relatedFields.map(related => (
              <Link key={related.id} href={`/roadmap/${related.id}`}>
                <Badge variant="secondary" className="transition-colors hover:bg-accent hover:text-accent-foreground">{related.name}</Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
        <div className="lg:pr-8">
          <RoadmapTimeline roadmap={field.roadmap} onStepSelect={handleStepSelect} selectedStep={selectedStep} />
        </div>
        <div className="mt-12 lg:mt-0 lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)]">
          <StepDetails details={details} isLoading={isLoading} error={error} selectedStep={selectedStep} />
        </div>
      </div>
    </div>
  );
}
