
"use client";

import { useState, useCallback } from 'react';
import type { Field, RoadmapStep } from '@/lib/roadmap-data';
import type { AggregateResourcesOutput } from '@/ai/flows/ai-resource-aggregation';
import { FieldIcon } from '@/lib/icons';
import RoadmapTimeline from './roadmap-timeline';
import StepDetails from './step-details';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import detailsData from '@/lib/roadmap-details.json';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent, SidebarHeader } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { PanelLeftOpen } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';


interface RoadmapClientPageProps {
  field: Field;
  relatedFields: Field[];
}

// A type guard to ensure the composite key exists in our detailsData
type DetailsKey = keyof typeof detailsData;
const isDetailsKey = (key: string): key is DetailsKey => {
  return key in detailsData;
};

export default function RoadmapClientPage({ field, relatedFields }: RoadmapClientPageProps) {
  const [selectedStep, setSelectedStep] = useState<RoadmapStep | null>(null);
  const [details, setDetails] = useState<AggregateResourcesOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const handleStepSelect = useCallback((step: RoadmapStep) => {
    setSelectedStep(step);
    setIsLoading(true);
    setDetails(null);
    setError(null);

    // Simulate a network request
    setTimeout(() => {
      try {
        const key = `${field.id}/${step.title}`;
        if (isDetailsKey(key)) {
          setDetails(detailsData[key]);
        } else {
          setError(`Details for "${step.title}" are not yet available. Please check back later.`);
        }
      } catch (e) {
        console.error(e);
        setError('Failed to load resources. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }, 300);
  }, [field.id]);

  const headerContent = (
    <div className="mb-8 text-center">
      <FieldIcon name={field.icon} className="mx-auto w-16 h-16 text-primary mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground dark:text-white dark:lg:text-primary">{field.name} Roadmap</h1>
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
  );

  const timeline = <RoadmapTimeline roadmap={field.roadmap} onStepSelect={handleStepSelect} selectedStep={selectedStep} />;

  if (isMobile) {
    return (
      <SidebarProvider>
        <div className="container mx-auto py-8">
            {headerContent}
            <div className="lg:hidden text-center mb-8">
              <SidebarTrigger asChild>
                  <Button variant="outline">
                      <PanelLeftOpen className="mr-2"/>
                      View Roadmap
                  </Button>
              </SidebarTrigger>
            </div>
            <Sidebar side="left">
                <SidebarContent>
                    <SidebarHeader>
                        <h2 className="text-2xl font-bold font-headline text-white p-4">Roadmap Steps</h2>
                    </SidebarHeader>
                    {timeline}
                </SidebarContent>
            </Sidebar>

            <div className="mt-8 lg:mt-0">
                <StepDetails details={details} isLoading={isLoading} error={error} selectedStep={selectedStep} />
            </div>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <div className="container mx-auto py-12">
      {headerContent}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
        <div className="lg:px-4">
          {timeline}
        </div>
        <div className="mt-12 lg:mt-0 lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)]">
          <StepDetails details={details} isLoading={isLoading} error={error} selectedStep={selectedStep} />
        </div>
      </div>
    </div>
  );
}
