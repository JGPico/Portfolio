import "./component css/footer.scss"

export default function Footer() {
    return (
        <div className="signatureBox">
            <svg viewBox="0 0 600 220" width="600" height="220" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&amp;display=swap');
                    </style>
                    <linearGradient id="inkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1a1008" />
                        <stop offset="50%" stopColor="#2c1d0e" />
                        <stop offset="100%" stopColor="#1a1008" />
                    </linearGradient>
                    <filter id="inkBleed" x="-5%" y="-5%" width="110%" height="110%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" xChannelSelector="R" yChannelSelector="G" result="displaced" />
                        <feGaussianBlur in="displaced" stdDeviation="0.3" />
                    </filter>
                </defs>

                {/*<!-- Subtle decorative underline flourish -->*/}
                <path
                    className="sig"
                    d="M 100 175 Q 300 195 500 175"
                    fill="none"
                    stroke="#2c1d0e"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity="0.35"
                />
                <path
                    className="sig"
                    d="M 130 182 Q 300 200 470 182"
                    fill="none"
                    stroke="#2c1d0e"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    opacity="0.2"
                />

                {/*<!-- The name in cursive -->*/}
                <text
                    className="sig"
                    x="300"
                    y="155"
                    textAnchor="middle"
                    fontFamily="'Great Vibes', cursive"
                    fontSize="110"
                    fill="url(#inkGrad)"
                    filter="url(#inkBleed)"
                    letterSpacing="2"
                >
                    James Pico
                </text>
            </svg>
        </div>
    )
}