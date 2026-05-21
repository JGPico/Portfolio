import type { ComponentProps } from "react"
import "./component css/contentBlock.scss"

type ContentProps = {

} & ComponentProps<"p">

export default function ContentBlock({ ...props }: ContentProps) {
    return (
        <>
            <p {...props} className="contentBlock"></p>
        </>
    )
}