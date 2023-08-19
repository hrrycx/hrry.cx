import { Route, Routes, A } from "@solidjs/router";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="bg-gradient-to-tr from-stone-50 to-stone-400 h-screen w-screen">
      <header class="pb-48">
        <h1 class="animate-in slide-in-from-left-full duration-500 text-stone-800 text-9xl font-tinos my-0 p-0 float-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">harry cox</h1>
        <nav class="animate-in slide-in-from-top-full duration-500 p-2 text-xl flex items-stretch float-right gap-5 font-tinos drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">
          <A class="transition duration-500 hover:scale-125" href="/">about</A>
          <A class="transition duration-500 hover:scale-125" href="/projects">projects</A>
        </nav>
      </header>

      <Routes>
        <Route path="/" component={About} />
        <Route path="/projects" component={Projects} />
      </Routes>
      <Footer />

    </div>
  );
}
export default App;
