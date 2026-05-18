import { Header } from '../shared/ui/Header/Header';
import { Footer } from '../shared/ui/Footer/Footer';
import { Banner } from '../shared/ui/Banner/Banner';
import { ProjectsList } from '../features/project/ui/ProjectsList/ProjectsList';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Banner />
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Наши проекты</h2>
          <ProjectsList />
        </section>
      </main>
      <Footer />
    </div>
  );
}