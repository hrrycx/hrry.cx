import icon from "../assets/favicon.ico";

export default function Icon(props) {
    return (
        <div class="relative">
            <div class="h-20 w-20 rounded-lg group/icon cursor-pointer">
                {props.children}
                <div
                    class="invisible absolute z-50 flex w-full flex-col bg-stone-100 my-2 py-1 px-4 text-gray-800 shadow-xl group-hover/icon:visible rounded-lg shadow-black shadow-lg">
                    <a
                        class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Product One</a
                    >
                    <a
                        class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Product One</a
                    >
                    <a
                        class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    >Product One</a
                    >
                </div>
            </div>
        </div>
    )
}
