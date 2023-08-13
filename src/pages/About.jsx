import { Route, Routes, A } from "@solidjs/router";
import rust from "../assets/rust.png";
import vb from "../assets/vbnet.png";
import tailwind from "../assets/tailwind.png";
import solidjs from "../assets/solidjs.png";
import csharp from "../assets/csharp.png";
import icon from "../assets/favicon.ico";

import Icon from "../components/Icon";

export default function About() {
    return (
        // <div class="bg-white p-4 text-center rounded-md shadow-md">
        //      <h2 class="text-4xl">hey! i am harry, a 17 year-old aspiring software engineer from england.</h2>
        //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eligendi commodi quidem tempora quas ratione.</p>
        //     {props.children}
        // </div>
        <div class="relative group animate-in zoom-in duration-500">
            <div class="absolute -inset-0.5 bg-stone-700 opacity-75 p-4 mx-12 rounded-md blur-xl transition duration-500 group-hover:opacity-100"></div>
            <div class="relative bg-stone-100 p-4 mx-12 rounded-md text-center font-tinos">
                <h2 class="text-5xl pb-4 ">hey! i'm harry, a 17-year-old student and aspiring software engineer from england.</h2>
                <h3 class="text-2xl">i have been coding for years, and my desire is fueled by that of to solve problems, and lately to visualise the beauty of mathematics.</h3>
                <div class="grid grid-cols-5 gap-4 ml-48">
                    <Icon><img class="h-20 w-20 bg-stone-100 shadow-black shadow-lg rounded-lg" src={rust} alt="icon"></img>
                    </Icon>
                    <Icon><img class="h-20 w-20 bg-stone-100 shadow-black shadow-lg rounded-lg" src={csharp} alt="icon"></img>
                    </Icon>
                    <Icon><img class="h-20 w-20 bg-stone-100 shadow-black shadow-lg rounded-lg" src={vb} alt="icon"></img>
                    </Icon>
                    <Icon><img class="h-20 w-20 bg-stone-100 shadow-black shadow-lg rounded-lg" src={tailwind} alt="icon"></img>
                    </Icon>
                    <Icon><img class="h-20 w-20 bg-stone-100 shadow-black shadow-lg rounded-lg" src={solidjs} alt="icon"></img>
                    </Icon>

                </div>
            </div>
        </div >
    )
}