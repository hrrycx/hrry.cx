export default function ProjectCard(props) {
    return (
        <div class="bg-white p-4 text-center rounded-md shadow-md">
            <h2 class="text-4xl">{props.name}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eligendi commodi quidem tempora quas ratione.</p>
            <button class="btn">press this</button>
            {props.children}
        </div>
    )
}