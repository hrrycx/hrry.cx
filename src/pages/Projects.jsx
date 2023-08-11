import Component1 from "../components/ProjectCard"
import favicon from "../assets/favicon.ico";
import mandel from "../assets/mandelbrot.png"

export default function Projects() {
    return (
        <div class="flex flex-col overflow-x-scroll m-auto p-auto h-[44rem] w-auto scrollbar scrollbar-h-3 scrollbar-thumb-stone-600 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-track-stone-300 hover:scrollbar-thumb-stone-700">
            <div
                class="flex flex-nowrap"
            >
                <div class="inline-block px-3">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="inline-block px-3">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="inline-block px-3">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="inline-block px-3">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="inline-block px-3">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="inline-block px-3">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="inline-block px-3">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="inline-block px-3">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
            </div>
        </div>
    )
}