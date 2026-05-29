import type { ComponentProps } from "react"
import "./component css/projects.scss"

type projectItem = {
    id: string,
    screenGrab: string,
    title: string,
    description: string,
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
                            <img src="../public/icons.svg"></img>
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