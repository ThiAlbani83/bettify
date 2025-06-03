import Contact from "./components/contact/Contact";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OurWorks from "./components/ourworks/OurWorks";
import Products from "./components/products/Products";
import WhyChooseUs from "./components/whybettify/WhyChooseUs";

function App() {
  return (
    <main className="bg-black font-poppins flex flex-col">
      <Navbar />
      <Hero />
      <OurWorks />
      <WhyChooseUs />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
