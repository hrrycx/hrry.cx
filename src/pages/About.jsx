import { Route, Routes, A } from "@solidjs/router";
import rust from "../assets/rust.png";
import vb from "../assets/vbnet.png";
import tailwind from "../assets/tailwind.png";
import solidjs from "../assets/solidjs.png";
import html from "../assets/html.png";
import csharp from "../assets/csharp.png";
import css from "../assets/css.png";
import egui from "../assets/egui.png";
import winforms from "../assets/winforms.png";
import wpf from "../assets/wpf.png";

import icon from "../assets/favicon.ico";

import Icon from "../components/Icon";

export default function About() {
    return (
        // <div class="bg-white p-4 text-center rounded-md shadow-md">
        //      <h2 class="text-4xl">hey! i am harry, a 17 year-old aspiring software engineer from england.</h2>
        //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eligendi commodi quidem tempora quas ratione.</p>
        //     {props.children}
        // </div>
        <div>

            <div>
                <div class="relative group animate-in zoom-in duration-500 p-4">
                    <div class="absolute -inset-0.5 bg-stone-700 opacity-75 p-8 mx-12 rounded-md blur-xl transition duration-500 group-hover:opacity-100"></div>
                    <div class="relative bg-stone-100 p-4 mx-12 rounded-md text-center font-tinos">
                        <h2 class="text-5xl pb-4 ">hey! i'm harry, a 17-year-old student and aspiring software engineer from england.</h2>
                        <h3 class="text-2xl pb-4">i have been coding for years, and my desire is fueled by that of to solve problems, and lately to visualise the beauty of mathematics.</h3>
                    </div>
                </div >
            </div>

            <div>
                <div class=" flex flex-row pt-12 justify-center">
                    <div class="relative group p-4 w-full animate-in zoom-in duration-500">
                        <div class="absolute -inset-0.5 bg-stone-700 opacity-75 p-8 mx-12 rounded-md blur-xl transition duration-500 group-hover:opacity-100"></div>

                        <div class="relative bg-stone-100 h-full mx-12 rounded-md text-center font-tinos ">

                            <div class="grid grid-cols-5 gap-12 p-12">
                                <Icon title="rust"
                                    desc="rust is the main language i use and my favorite, due to its speed, helpful compiler and trait system."><img class="h-20 w-20 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-lg" src={rust} alt="icon"></img>
                                </Icon>
                                <Icon title="c#"
                                    desc="using c# has helped me to learn object oriented programming, and windows forms is useful for quickly making apps."><img class="h-20 w-20 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-lg" src={csharp} alt="icon"></img>
                                </Icon>
                                <Icon title="vb"
                                    desc="i was taught visual basic through school, and i find it useful for quickly testing ideas due to its forgiving syntax and type system."><img class="h-20 w-20 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-lg" src={vb} alt="icon"></img>
                                </Icon>
                                <Icon title="html"
                                    desc="this portfolio site was mostly used using html, and it helped me to learn how to layout elements to enable styling."><img class="h-20 w-20 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-lg" src={html} alt="icon"></img>
                                </Icon>
                                <Icon title="css"
                                    desc="i enjoy styling with css, especially making elements fancy elements that only serve to make the website look better."><img class="h-20 w-20 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-lg" src={css} alt="icon"></img>
                                </Icon>
                                <Icon title="egui"
                                    desc="egui is useful for making ui applications in rust, to make my projects more interactive and accessible to others."><img class="h-20 w-20 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-lg" src={egui} alt="icon"></img>
                                </Icon>
                                <Icon title="winforms"
                                    desc="i have used windows forms to create many applications, but am not a huge fan due to its instability."><img class="h-20 w-20 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-lg" src={winforms} alt="icon"></img>
                                </Icon>
                                <Icon title="wpf"
                                    desc="i have also used wpf to make applications, and i perhaps slightly prefer it to winforms."><img class="h-20 w-20 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-lg" src={wpf} alt="icon"></img>
                                </Icon>
                                <Icon title="tailwind"
                                    desc="i used tailwind to style this site! i find tailwind invaluable as it lets me style a page while making the elements, and quickly put my ideas onto the page."><img class="h-20 w-20 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-lg" src={tailwind} alt="icon"></img>
                                </Icon>
                                <Icon title="solidjs"
                                    desc="solidjs is the first web framework i have learned, and i hope to learn more javascript through it."><img class="h-20 w-20 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-lg" src={solidjs} alt="icon"></img>
                                </Icon>
                            </div>
                        </div>
                    </div>

                    <div class="relative group p-4 w-full animate-in zoom-in duration-500">
                        <div class="absolute -inset-0.5 bg-stone-700 opacity-75 p-8 mx-12 rounded-md blur-xl transition duration-500 group-hover:opacity-100 "></div>

                        <div class="relative bg-stone-100 mx-12 h-full rounded-md font-tinos text-center">
                            <h1 class="text-4xl underline"> grades</h1>
                            <div class="flex flex-row divide-x divide-stone-400">
                                <div class="w-full">
                                    <h2 class="underline">a level</h2>
                                    <ul class="list-disc list-inside text-left indent-2	">
                                        <li>mathematics - A* (attained)</li>
                                        <li>computer science - A* (predicted)</li>
                                        <li>further mathematics - A* (predicted)</li>
                                        <li>physics - A* (predicted)</li>

                                    </ul>
                                </div>
                                <div class="w-full ">
                                    <h2 class="underline"> gcse</h2>
                                    <ul class="list-disc list-inside text-left indent-2	">
                                        <li>biology - 9</li>
                                        <li>chemistry - 9</li>
                                        <li>computer science - 9</li>
                                        <li>english language - 9 (distinction in speaking)</li>
                                        <li>english literature - 8</li>
                                        <li>french - 9</li>
                                        <li>further mathematics - 9</li>
                                        <li>german - 9</li>
                                        <li>mathematics - 9</li>
                                        <li>physics - 9</li>
                                        <li>religious studies - 9</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}