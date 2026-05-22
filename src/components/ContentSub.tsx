import type { ComponentProps } from "react"
import "./component css/contentSub.scss"

type ContentSubProps = {
    date: string,
    title: string
} & ComponentProps<"p">

export default function ContentSub({ date, title, ...props }: ContentSubProps) {
    return (
        <div>
            <div className="contentSubWrapper">
                <h1>{date}</h1>
                <div className="contentSubParagraphWrapper">
                    <h1>{title}</h1>
                    <p {...props}></p>
                </div>
            </div>
        </div>
    )
}