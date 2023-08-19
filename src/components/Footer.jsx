import discord from "../assets/discord.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export default function Footer() {
    return <footer class="fixed bottom-2 flex justify-end font-tinos text-stone-600 items-end w-screen" >
        <a class="rounded-full" href="https://discordapp.com/users/466302344729198623">
            <img class=" h-10 w-10 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-full mx-3" src={discord} alt="icon" />
        </a>
        <a class="rounded-full" href="https://www.linkedin.com/in/harry-cox-6a0a22285/">
            <img class=" h-10 w-10 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-full mx-3" src={linkedin} alt="icon" />
        </a>

        <a class="rounded-full" href="mailto: 2005hcox@gmail.com">
            <img class=" h-10 w-10 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-full mx-3" src={gmail} alt="icon" />
        </a>
        <a class="rounded-full" href="https://github.com/hrrycx">
            <img class=" h-10 w-10 bg-stone-100 shadow-stone-500 shadow-lg hover:shadow-stone-900 transition duration-500 rounded-full mx-3" src={github} alt="icon" />
        </a>
        <p>&nbsp &nbsp harry cox, 2023.&nbsp</p>
        <a class="hover:underline" href="https://github.com/hrrycx/hrry.cx">hosted with github pages.</a>
    </footer>
}

