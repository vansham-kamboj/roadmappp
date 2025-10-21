
"use client";

import { useState, useCallback, useEffect } from 'react';
import type { Field, RoadmapStep } from '@/lib/roadmap-data';
import type { AggregateResourcesOutput } from '@/ai/flows/ai-resource-aggregation';
import { FieldIcon } from '@/lib/icons';
import RoadmapTimeline from './roadmap-timeline';
import StepDetails from './step-details';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import detailsData from '@/lib/roadmap-details.json';
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarInset,
  useSidebar,
} from '@/components/ui/sidebar';
import { useTheme } from 'next-themes';
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

function RoadmapContent({ field, relatedFields }: RoadmapClientPageProps) {
  const [selectedStep, setSelectedStep] = useState<RoadmapStep | null>(field.roadmap[0]);
  const [details, setDetails] = useState<AggregateResourcesOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();
  const { setOpenMobile } = useSidebar();
  const isMobile = useIsMobile();
  
  const handleStepSelect = useCallback((step: RoadmapStep) => {
    setSelectedStep(step);
    setIsLoading(true);
    setDetails(null);
    setError(null);
    if (isMobile) {
      setOpenMobile(false);
    }

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
  }, [field.id, isMobile, setOpenMobile]);
  
  // Pre-load the first step details on initial render
  useEffect(() => {
    if (field.roadmap.length > 0) {
      handleStepSelect(field.roadmap[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headerContent = (
    <div className="mb-8 text-center">
      <FieldIcon name={field.icon} className="mx-auto w-16 h-16 text-primary mb-4" />
      <h1 className={`text-4xl md:text-5xl font-bold font-headline text-foreground lg:text-primary`}>{field.name} Roadmap</h1>
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

  return (
    <>
      <Sidebar>
        <SidebarContent className="bg-background/80 backdrop-blur-sm">
          <div className="p-4">
            <h2 className="text-2xl font-bold font-headline text-foreground mb-6 text-center">Roadmap Steps</h2>
            <RoadmapTimeline roadmap={field.roadmap} onStepSelect={handleStepSelect} selectedStep={selectedStep} />
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="md:hidden mb-4 flex items-center gap-2">
            <SidebarTrigger asChild>
              <Button variant="outline"><PanelLeftOpen /> Roadmap Steps</Button>
            </SidebarTrigger>
          </div>
          {headerContent}
          <div className="mt-12">
            <h2 className="text-3xl font-bold font-headline text-foreground mb-6 text-center">Step Details</h2>
            <StepDetails details={details} isLoading={isLoading} error={error} selectedStep={selectedStep} />
          </div>
        </div>
      </SidebarInset>
    </>
  );
}

export default function RoadmapClientPage(props: RoadmapClientPageProps) {
  return (
    <SidebarProvider>
      <RoadmapContent {...props} />
    </SidebarProvider>
  )
}
