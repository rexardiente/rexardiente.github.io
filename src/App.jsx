import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Archive } from './components/Archive';
import { Stack } from './components/Stack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="grain relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Archive />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
