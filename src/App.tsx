import { Suspense } from "react";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Tech from "./Components/Tech";
import TechList from "./Components/TechList";

function App() {
  const stackDataPromise = async () => {
    let res = await fetch("/data.json");
    let data = await res.json();
    return data;
  };
  return (
    <>
      <Nav />
      <Hero />
      <Tech />
      <Suspense fallback={<p>Loading....</p>}>
        <TechList stackDataPromise={stackDataPromise()}></TechList>
      </Suspense>
    </>
  );
}

export default App;
