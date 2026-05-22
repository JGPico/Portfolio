import type { ComponentProps } from "react"
import "./component css/contentSub.scss"

type ContentProps = {

} & ComponentProps<"p">

export default function ContentBlock({ ...props }: ContentProps) {
    return (
        <>
            <div className="contentSubWrapper">

                <p {...props} ></p>

            </div>
        </>
    )
} 