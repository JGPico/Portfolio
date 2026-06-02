import type { ComponentProps, RefObject } from "react"
import "./component css/history.scss"
import "./component css/summaryBlock.scss"

type SummaryBlockProps = {
    aboutSection: RefObject<HTMLDivElement | null>,
} & ComponentProps<"p">

export default function SummaryBlock({ aboutSection, ...props }: SummaryBlockProps) {
    return (
        <>
            <div ref={aboutSection} className="summaryBlock">

                <p {...props} ></p>

            </div>
        </>
    )
} 