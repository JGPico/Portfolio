import type { ComponentProps } from "react"
import "./component css/history.scss"

type workHistoryItem = {
    id: string,
    dateRange: string,
    title: string,
    description: string[],
    relevantSkills: string[]
}

type HistoryListProps = {
    workHistoryItems: workHistoryItem[]
} & ComponentProps<"p">

export default function HistoryList({ workHistoryItems, ...props }: HistoryListProps) {

    if (workHistoryItems.length === 0) {
        return <p>Work history is not present</p>
    }

    let subKey = 0;

    return (

        <div className="historyWrapper">
            {workHistoryItems.map(item => {
                return (
                    <div key={item.id}>
                        <div className="historySubDateWrapper">
                            <h4>{item.dateRange}</h4>
                            <div className="historySubParagraphWrapper">
                                <h3>{item.title}</h3>
                                <ul>{item.description.map(desc => { subKey++; return <li key={subKey}>{desc}</li> })}</ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}