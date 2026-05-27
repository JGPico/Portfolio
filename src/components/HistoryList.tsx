import type { ComponentProps } from "react"
import "./component css/history.scss"

type workHistoryItem = {
    id: string,
    dateRange: string,
    title: string,
    employer: string,
    description: string,
    relevantSkills: string
}

type HistoryListProps = {
    workHistoryItems: workHistoryItem[]
} & ComponentProps<"p">

export default function HistoryList({ workHistoryItems, ...props }: HistoryListProps) {

    if (workHistoryItems.length === 0) {
        return <p>Work history is not present</p>
    }

    return (
        <div>
            <div className="historyWrapper">
                {workHistoryItems.map(item => {
                    return (
                        <>
                            <h1>{item.dateRange}</h1>
                            <div className="historySubParagraphWrapper">
                                <h2>{item.title}</h2>
                                <p>{item.employer}</p>
                                <p>work in description format</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}