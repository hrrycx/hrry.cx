export default function ProjectCard(props) {
    return (
        <div class=" bg-stone-50 p-4 text-center shadow rounded-md inline-block h-[42rem] w-[42rem]">
            <h2 class="text-4xl">{props.name}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eligendi commodi quidem tempora quas ratione.</p>
            {props.children}
        </div>
    )
}