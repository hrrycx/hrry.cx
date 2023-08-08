import { Route, Routes, A } from "@solidjs/router";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
function App() {
  return (
    <div>
      <header class="pb-72">
        <h1 className="text-stone-950 text-9xl font-tinos my-0 p-0 float-left">harry cox</h1>
        <nav class="p-2 text-xl flex items-stretch float-right gap-5 font-tinos">
          <A class="transition duration-500 hover:scale-125" href="/">about</A>
          <A class="transition duration-500 hover:scale-125" href="/projects">projects</A>
          <A class="transition duration-500 hover:scale-125" href="/contact">contact</A>
        </nav>
      </header>
      <Routes>
        <Route path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </div>
  );
}
export default App;
