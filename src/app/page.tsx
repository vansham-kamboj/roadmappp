
'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ROADMAP_DATA } from '@/lib/roadmap-data';
import FieldCard from '@/components/field-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Pill } from '@/components/ui/pill';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFields = ROADMAP_DATA.filter(field => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return field.name.toLowerCase().includes(query) ||
           field.description.toLowerCase().includes(query)
  });

  const midIndex = Math.ceil(filteredFields.length / 2);
  const rowOneFields = filteredFields.slice(0, midIndex);
  const rowTwoFields = filteredFields.slice(midIndex);
  
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

        <section className="space-y-8">
            <div className="w-full overflow-hidden">
              <div className="flex w-max hover:[animation-play-state:paused] marquee">
                {[...rowOneFields, ...rowOneFields].map((field, index) => (
                  <div key={`${field.id}-${index}`} className="px-2 w-[80vw] md:w-[33.33vw] flex-shrink-0">
                    <FieldCard field={field} />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full overflow-hidden">
              <div className="flex w-max hover:[animation-play-state:paused] marquee-reverse">
                {[...rowTwoFields, ...rowTwoFields].map((field, index) => (
                  <div key={`${field.id}-${index}`} className="px-2 w-[80vw] md:w-[33.33vw] flex-shrink-0">
                    <FieldCard field={field} />
                  </div>
                ))}
              </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
