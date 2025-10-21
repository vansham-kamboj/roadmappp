
'use client';

import Link from 'next/link';
import type { Field } from '@/lib/roadmap-data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FieldIcon } from '@/lib/icons';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

type FieldCardProps = {
  field: Field;
};

export default function FieldCard({ field }: FieldCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !isMounted) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMounted]);

  const cardStyle = isMounted ? { transformStyle: 'preserve-3d' as const } : {};

  return (
    <Link href={`/roadmap/${field.id}`} className="group block h-full">
      <Card ref={cardRef} className="h-full transition-all duration-200 ease-out bg-card/50 backdrop-blur-sm group-hover:border-primary group-hover:shadow-2xl group-hover:shadow-primary/20 dark:bg-card/50" style={cardStyle}>
        <CardHeader className="h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
               <FieldIcon name={field.icon} className="w-8 h-8 text-primary" />
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </div>
          <CardTitle className="font-headline text-xl text-foreground dark:text-white">{field.name}</CardTitle>
          <CardDescription className="pt-2 flex-grow">{field.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
