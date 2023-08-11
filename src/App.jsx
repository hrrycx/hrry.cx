import { Route, Routes, A } from "@solidjs/router";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { createSignal } from "solid-js";
import Footer from "./components/Footer";
function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme())
  }

  return (
    <div>
      <header class="pb-48">
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
      <Footer />

    </div>
  );
}
export default App;
