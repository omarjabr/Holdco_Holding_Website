import { 
  Navbar,
  Hero,
  About,
  WhyUs,
  Companies,
  Contact,
  Footer 
} from "@/app/components";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Companies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;