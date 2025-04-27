import HeroSection from "./components/HeroSectiont";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import PerformanceSection from "./components/PerformanceSection";
import Footer from "./components/Footer";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <PerformanceSection />
      </div>
      <Footer />
    </main>
  );
}
