import Component1 from "../components/ProjectIcon"
import mandel from "../assets/mandelbrot.png"
import render from "../assets/render.png"
import littlewood from "../assets/littlewood.png"
import marble from "../assets/marble.gif"
import gol from "../assets/gol.gif"
import hrrycx from "../assets/hrrycx.png"
import Footer from "../components/Footer";

export default function Projects() {
    return (
        <div>
            <div class="h-20 w-full"></div>
            <div class="grid 2xl:grid-cols-2 items-center">

                <div class="sm:ml-10 2xl:ml-36 items-center">
                    <Component1>
                        <div class="px-5 pt-5 pb-3 items-center">
                            <img class="rounded-lg h-[50%]" src={littlewood} alt="icon"></img>
                        </div>
                        <h2 class="text-xl underline text-center">littlewood fractal (rust and numpy)</h2>
                        <div class="pl-4 pr-4 pt-4 pb-0">
                            <ul class="list-disc ml-2">
                                <li>plot of the roots of the first 2^25 littlewood polynomials</li>
                                <li>these are polynomials with coefficients 1 or -1 (not zero)</li>
                                <li>colouring and lightness derived from logarithmic density of roots</li>
                                <li>roots found with numpy, image plotted using rust</li>
                                <li>numpy found around 1.5 billion roots, in a 60gb text file, in around four hours</li>
                                <li>full 19200 x 10800 image generated through code below</li>

                            </ul>
                            <p class="absolute bottom-5 underline m-auto text-center mt-5 hover:text-purple-400 transition duration-1000"><a href="https://github.com/hrrycx/littlewood-fractal">https://github.com/hrrycx/littlewood-fractal</a></p>

                        </div>
                    </Component1>
                </div>
                <div class="sm:ml-10 2xl:ml-36 items-center">
                    <Component1>
                        <div class="px-5 pt-5 pb-3 items-center">
                            <img class="rounded-lg h-[50%]" src={mandel} alt="icon"></img>
                        </div>
                        <h2 class="text-xl underline text-center">multibrot explorer (rust)</h2>
                        <div class="pl-4 pr-4 pt-4 pb-0">
                            <ul class="list-disc ml-2">
                                <li>multithreaded multibrot renderer</li>
                                <li>real-time dragging and zooming</li>
                                <li>multiple colouring modes</li>
                                <li>application icon generated on app run</li>
                                <li>function to approximate pi using iterations to escape at -0.75 + ε i</li>
                                <li>render time of image shown: ~12ms (ryzen 5 3600, 12 threads)</li>

                            </ul>
                            <p class="absolute bottom-5 underline m-auto text-center mt-5 hover:text-purple-400 transition duration-1000"><a href="https://github.com/hrrycx/multibrot-explorer">https://github.com/hrrycx/multibrot-explorer</a></p>

                        </div>
                    </Component1>
                </div>
                <div class="sm:ml-10 2xl:ml-36 items-center">
                    <Component1>
                        <div class="px-5 pt-5 pb-3 items-center">
                            <img class="rounded-lg" src={render} alt="icon"></img>
                        </div>
                        <h2 class="text-xl underline text-center">path tracer (rust)</h2>
                        <div class="pl-4 pr-4 pt-4 pb-0">
                            <ul class="list-disc ml-2">
                                <li>multithreaded path tracer</li>
                                <li>support for multiple material types</li>
                                <li>supersampling</li>
                                <li>moveable camera</li>
                                <li>framework to add more shapes and materials in the future</li>
                                <li>ran through cmd, progress bar shown</li>
                                <li>render time of image shown: ~5mins (ryzen 5 3600, 12 threads)</li>
                            </ul>
                            <p class="absolute bottom-5 underline m-auto text-center mt-5 hover:text-purple-400 transition duration-1000"><a href="https://github.com/hrrycx/path-tracer">https://github.com/hrrycx/path-tracer</a></p>
                        </div>
                    </Component1>
                </div>
                <div class="sm:ml-10 2xl:ml-36 items-center">
                    <Component1>
                        <div class="px-5 pt-5 pb-3 ">
                            <img class="rounded-lg w-[50%] mx-auto" src={marble} alt="icon"></img>
                        </div>
                        <h2 class="text-xl underline text-center">marble solitaire solver (vb)</h2>
                        <div class="pl-4 pr-4 pt-4 pb-0">
                            <ul class="list-disc ml-2">
                                <li>genetic algorithm to solve marble solitaire</li>
                                <li>solution above found in 1500 generations of 100 children</li>
                                <li>significantly fewer games therefore than an unoptimised brute force algorithm</li>
                                <li>project has a basic frontend to play through the game yourself</li>
                                <li>backend code has capability to load a game from its moves, or to tweak the ai</li>
                                <li>solution found in around: ~3mins (but this will vary on luck too)</li>
                            </ul>
                            <p class="absolute bottom-5 underline m-auto text-center mt-5 hover:text-purple-400 transition duration-1000"><a href="https://github.com/hrrycx/peg-solitaire-solver">https://github.com/hrrycx/peg-solitaire-solver</a></p>
                        </div>
                    </Component1>
                </div>
                <div class="sm:ml-10 2xl:ml-36 items-center">
                    <Component1>
                        <div class="px-5 pt-5 pb-3 ">
                            <img class="rounded-lg w-[50%] mx-auto" src={gol} alt="icon"></img>
                        </div>
                        <h2 class="text-xl underline text-center">game of life (c#)</h2>
                        <div class="pl-4 pr-4 pt-4 pb-0">
                            <ul class="list-disc ml-2">
                                <li>conway's game of life with basic frontend</li>
                                <li>can click / drag to alter a starting cell</li>
                                <li>play, pause, speed up, slow down</li>
                                <li>made in windows forms</li>
                            </ul>
                            <p class="absolute bottom-5 underline m-auto text-center mt-5 hover:text-purple-400 transition duration-1000"><a href="https://github.com/hrrycx/game-of-life">https://github.com/hrrycx/game-of-life</a></p>
                        </div>
                    </Component1>
                </div>
                <div class="sm:ml-10 2xl:ml-36 items-center">
                    <Component1>
                        <div class="px-5 pt-5 pb-3 ">
                            <img class="rounded-lg w-[50%] mx-auto" src={hrrycx} alt="icon"></img>
                        </div>
                        <h2 class="text-xl underline text-center">portfolio website (html + css) </h2>
                        <div class="pl-4 pr-4 pt-4 pb-0">
                            <ul class="list-disc ml-2">
                                <li>portfolio website</li>
                                <li>made with solidjs and tailwindcss</li>
                                <li>my first foray into web development, helpful for learning new frameworks</li>
                                <li>new features planned such as personal statement / cv section, github integration</li>
                            </ul>
                            <p class="absolute bottom-5 underline m-auto text-center mt-5 hover:text-purple-400 transition duration-1000"><a href="https://github.com/hrrycx/hrry.cx">https://github.com/hrrycx/hrry.cx</a></p>
                        </div>
                    </Component1>
                </div>
            </div>
            <Footer />

        </div>
    )
}