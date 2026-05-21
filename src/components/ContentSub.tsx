import type { ComponentProps } from "react"

type ContentSubProps = {
    date: string,
    title: string
} & ComponentProps<"p">

export default function ContentSub({ date, title, ...props }: ContentSubProps) {
    return (
        <div>
            <h1>{date}</h1>
            <div className="contentSubWrapper">
                <h1>{title}</h1>
                <p {...props}></p>
            </div>
        </div>
    )
}