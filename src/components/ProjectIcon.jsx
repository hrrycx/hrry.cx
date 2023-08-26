import icon from "../assets/favicon.ico";

export default function Icon(props) {
    return (
        <div class="relative flex flex-row rounded-lg w-96">
            <div class="h-96 w-96 rounded-lg cursor-pointer group">
                {props.children}
                <div
                    class="invisible absolute z-50 flex w-96 flex-col bg-stone-100 my-2 py-1 px-4 text-gray-800 shadow-xl group-hover:visible rounded-lg shadow-black shadow-lg">
                    <h2 class="text-xl underline">{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}
