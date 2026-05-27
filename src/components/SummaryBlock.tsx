import type { ComponentProps } from "react"
import "./component css/history.scss"
import "./component css/summaryBlock.scss"

type SummaryBlockProps = {

} & ComponentProps<"p">

export default function SummaryBlock({ ...props }: SummaryBlockProps) {
    return (
        <>
            <div className="summaryBlock">

                <p {...props} ></p>

            </div>
        </>
    )
} 