import "./component css/fun.scss"

type BirdProps = {
    isMirror: boolean
}

export default function Bird({ isMirror }: BirdProps) {

    return (
        <>
            {isMirror ? (
                <div className="mirrorBird">
                    <div className="head"></div>
                    <div className="body"></div>
                </div>
            ) : (
                <div className="bird">
                    <div className="body"></div>
                    <div className="head"></div>
                </div>
            )}
        </>
    )
}
