import React from "react";
import { Hero } from "./Hero";
import { AboutUs } from "./AbousUs";
import { OurValues } from "./OurValues";
import { Info } from "./Info";
import { Cta } from "./Cta";
import { Faq } from "./Faq";
import { Footer } from "./Footer";

function App() {
  return (
    <main className="App">
      <Hero />
      <AboutUs />
      <OurValues />
      <Info />
      <Cta />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
