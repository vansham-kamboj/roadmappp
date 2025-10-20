import Link from 'next/link';
import type { Field } from '@/lib/roadmap-data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FieldIcon } from '@/lib/icons';
import { ArrowRight } from 'lucide-react';

type FieldCardProps = {
  field: Field;
};

export default function FieldCard({ field }: FieldCardProps) {
  return (
    <Link href={`/roadmap/${field.id}`} className="group block h-full">
      <Card className="h-full transition-all duration-300 ease-in-out bg-card/50 backdrop-blur-sm group-hover:border-primary group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
               <FieldIcon name={field.icon} className="w-8 h-8 text-primary" />
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </div>
          <CardTitle className="font-headline text-xl text-foreground">{field.name}</CardTitle>
          <CardDescription className="pt-2 flex-grow">{field.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
