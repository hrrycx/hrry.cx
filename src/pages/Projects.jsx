import Component1 from "../components/ProjectIcon"
import favicon from "../assets/favicon.ico";
import mandel from "../assets/mandelbrot.png"

export default function Projects() {
    return (
        <div class="h-full w-full">
            <div class="flex flex-col items-center">
                <div class="">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="">
                    <Component1 title="mandelbrot explorer">
                        <img class="rounded-lg" src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
                <div class="">
                    <Component1 name="mandelbrot explorer">
                        <img src={mandel} alt="icon"></img>
                    </Component1>
                </div>
            </div>
        </div>
    )
}