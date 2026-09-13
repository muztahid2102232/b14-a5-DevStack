import { Suspense } from "react";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Tech from "./Components/Tech";
import Technologies from "./Components/technologies/Technologies";
import type { Itechnology } from "./Types/technology";
import Footer from "./Components/Footer";

function App() {
  const stackDataPromise = async (): Promise<Itechnology[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  };
  return (
    <>
      <Nav />
      <Hero />
      <Tech />
      <Suspense fallback={<p>Loading....</p>}>
        <Technologies technologiesPromise={stackDataPromise()}></Technologies>
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
