import type { ComponentProps } from "react"
import "./component css/ContentBlock.css"

type ContentProps = {

} & ComponentProps<"p">

export default function ContentBlock({ ...props }: ContentProps) {
    return (
        <>
            <p {...props} className="contentBlock"></p>
        </>
    )
}