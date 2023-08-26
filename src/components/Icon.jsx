import icon from "../assets/favicon.ico";

export default function Icon(props) {
    return (
        <div class="h-20 w-20 rounded-lg group/icon cursor-pointer">
            {props.children}
            <div
                class="invisible absolute z-50 flex w-96 flex-col bg-stone-100 my-2 py-1 px-4 text-gray-800 shadow-xl group-hover/icon:visible rounded-lg shadow-black shadow-lg">
                <h2 class="text-xl underline">{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
