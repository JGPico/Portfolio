import type { RefObject } from "react"
import "./component css/projects.scss"

type projectItem = {
    id: string,
    screenGrab: string,
    title: string,
    description: string,
    link: string,
}

type ProjectListProps = {
    projectItems: projectItem[],
    projectSection: RefObject<HTMLDivElement | null>,
}

export default function ProjectList({ projectItems, projectSection }: ProjectListProps) {

    if (projectItems.length === 0) {
        return <p>Project list not present</p>
    }

    return (

        <div ref={projectSection} className="projectWrapper">
            {projectItems.map(item => {
                return (
                    <div key={item.id}>
                        <div className="projectSubDateWrapper">
                            <img src={item.screenGrab} alt={"An image of the project"}></img>
                            <div className="projectSubParagraphWrapper">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}