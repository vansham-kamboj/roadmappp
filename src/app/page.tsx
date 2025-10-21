
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ROADMAP_DATA } from '@/lib/roadmap-data';
import FieldCard from '@/components/field-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Pill } from '@/components/ui/pill';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredFields = ROADMAP_DATA.filter(field => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return field.name.toLowerCase().includes(query) ||
           field.description.toLowerCase().includes(query)
  });

  const renderContent = () => {
    if (!isMounted) {
      // Render a placeholder or null during server-side rendering and initial mount
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFields.map((field) => (
            <FieldCard key={field.id} field={field} />
          ))}
        </div>
      );
    }
    
    if (isMobile) {
      return (
        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent className="-ml-4">
            {filteredFields.map((field) => (
              <CarouselItem key={field.id} className="pl-4 basis-4/5 md:basis-1/2">
                <div className="h-full">
                  <FieldCard field={field} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFields.map((field) => (
          <FieldCard key={field.id} field={field} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20 overflow-hidden">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground text-reveal">
            Your Learning & Mentoring Universe
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground text-reveal" style={{ animationDelay: '0.3s' }}>
            Explore comprehensive roadmaps for the most in-demand fields in the IT industry. Each field is a galaxy, and each step a solar system on your journey to mastery.
          </p>
        </section>

        <section className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for a roadmap (e.g., 'Frontend')..."
              className="w-full pl-12 pr-4 py-6 rounded-full bg-card/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <Pill>Structured Roadmaps</Pill>
                <Pill>Curated Resources</Pill>
                <Pill>Community Driven</Pill>
            </div>
        </section>

        <section>
          {renderContent()}
        </section>
      </main>
      <Footer />
    </div>
  );
}
