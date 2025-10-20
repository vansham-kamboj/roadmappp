import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ROADMAP_DATA } from '@/lib/roadmap-data';
import FieldCard from '@/components/field-card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground">
            Chart Your Course in Tech
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Explore comprehensive, AI-powered roadmaps for the most in-demand fields in the IT industry. Your journey to mastery starts here.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROADMAP_DATA.map((field) => (
              <FieldCard key={field.id} field={field} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
