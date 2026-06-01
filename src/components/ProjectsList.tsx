import type { ComponentProps } from "react"
import "./component css/projects.scss"

type projectItem = {
    id: string,
    screenGrab: string,
    title: string,
    description: string,
    link: string,
}

type ProjectListProps = {
    projectItems: projectItem[]
} & ComponentProps<"p">

export default function ProjectList({ projectItems, ...props }: ProjectListProps) {

    if (projectItems.length === 0) {
        return <p>Project list not present</p>
    }

    return (

        <div className="projectWrapper">
            {projectItems.map(item => {
                return (
                    <div key={item.id}>
                        <div className="projectSubDateWrapper">
                            <span>{item.screenGrab}</span>
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