import icon from "../assets/favicon.ico";

export default function Icon(props) {
    return (
        <div class="relative group animate-in zoom-in duration-500 p-3">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-400 w-[620px] via-pink-400 to-blue-400 opacity-75 my-10 rounded-md blur-md transition duration-500 group-hover:opacity-100"></div>
            <div class="relative rounded-lg w-[600px] h-[700px] bg-stone-100 my-10 font-tinos">
                {props.children}
            </div>
        </div>
    )
}
