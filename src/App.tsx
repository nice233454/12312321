import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
