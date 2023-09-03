import { Route, Routes, A } from "@solidjs/router";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="">
      <header class="pb-40">
        <h1 class="absolute animate-in slide-in-from-left-full duration-500 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-9xl font-tinos my-[16px] mx-[5px] blur-sm float-left">harry cox</h1>
        <h1 class="absolute animate-in slide-in-from-left-full duration-500 text-stone-800 text-9xl font-tinos my-[11px] p-0 float-left ">harry cox</h1>

        <nav class="animate-in slide-in-from-top-full duration-500 text-xl font-tinos">
          <div class="group">
            <A class="absolute right-[110px] top-[6px] bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent transition duration-500 group-hover:scale-125" href="/">about</A>
            <A class="absolute right-28 top-1 transition duration-500 group-hover:scale-125" href="/">about</A>
          </div>
          <div class="group">
            <A class="absolute right-[30px] top-[6px] bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent transition duration-500 group-hover:scale-125" href="/projects">projects</A>
            <A class="absolute right-8 top-1 transition duration-500 group-hover:scale-125" href="/projects">projects</A>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" component={About} />
        <Route path="/projects" component={Projects} />
      </Routes>

    </div>
  );
}
export default App;
