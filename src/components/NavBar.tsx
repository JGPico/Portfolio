import { type RefObject } from 'react';
import "./component css/navBar.scss"

type NavBarProps = {
    aboutSection: RefObject<HTMLDivElement | null>,
    historySection: RefObject<HTMLDivElement | null>,
    projectSection: RefObject<HTMLDivElement | null>,
}

export default function NavBar({ aboutSection, historySection, projectSection }: NavBarProps) {

    function scrollToSection(sectionRef: RefObject<HTMLDivElement | null>) {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <nav>
                <ul className="navList">
                    <li onClick={() => scrollToSection(aboutSection)}>About</li>
                    <li onClick={() => scrollToSection(historySection)}>Work History</li>
                    <li onClick={() => scrollToSection(projectSection)}>Projects</li>
                </ul>
            </nav>
        </div>
    )
}

