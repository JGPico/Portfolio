import type { RefObject } from "react"
import "./component css/history.scss"

type workHistoryItem = {
    id: string,
    dateRange: string,
    title: string,
    description: string[],
    relevantSkills: string[]
}

type HistoryListProps = {
    workHistoryItems: workHistoryItem[],
    historySection: RefObject<HTMLDivElement | null>,
}

export default function HistoryList({ workHistoryItems, historySection }: HistoryListProps) {

    if (workHistoryItems.length === 0) {
        return <p>Work history is not present</p>
    }

    return (

        <div ref={historySection} className="historyWrapper">
            {workHistoryItems.map(item => {
                return (
                    <div key={item.id}>
                        <div className="historySubDateWrapper">
                            <h4>{item.dateRange}</h4>
                            <div className="historySubParagraphWrapper">
                                <h3>{item.title}</h3>
                                <ul>{item.description.map(desc => { return <li key={crypto.randomUUID()}>{desc}</li> })}</ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}