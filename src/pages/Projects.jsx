import Component1 from "../components/ProjectCard"
import favicon from "../assets/favicon.ico";

export default function Projects() {
    return (
        <div class="grid grid-cols-3 gap-10 mx-10">
            <Component1 name="mandelbrot explorer">
                <img src={favicon} alt="icon"></img>
            </Component1>
            <Component1 name="ray tracer">
                <img src={favicon} alt="icon"></img>
            </Component1>
            <Component1 name="project three">
                <img src={favicon} alt="icon"></img>
            </Component1>
        </div>
    )
}