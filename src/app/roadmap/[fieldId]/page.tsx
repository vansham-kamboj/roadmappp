import { notFound } from 'next/navigation';
import { ROADMAP_DATA } from '@/lib/roadmap-data';
import Header from '@/components/layout/header';
import RoadmapClientPage from './components/roadmap-client-page';
import Footer from '@/components/layout/footer';

export function generateMetadata({ params }: { params: { fieldId: string } }) {
  const field = ROADMAP_DATA.find(f => f.id === params.fieldId);
  if (!field) {
    return { title: 'Not Found' };
  }
  return {
    title: `${field.name} Roadmap | Roadmappp`,
    description: `Explore the roadmap for ${field.name}.`,
  };
}

export default function RoadmapPage({ params }: { params: { fieldId: string } }) {
  const field = ROADMAP_DATA.find(f => f.id === params.fieldId);

  if (!field) {
    notFound();
  }

  const relatedFields = ROADMAP_DATA.filter(f => field.relatedFields.includes(f.id));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <RoadmapClientPage field={field} relatedFields={relatedFields} />
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return ROADMAP_DATA.map(field => ({
    fieldId: field.id,
  }));
}
