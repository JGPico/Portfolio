import { type RefObject } from 'react';

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
                <ul>
                    <button type="button" onClick={() => scrollToSection(aboutSection)}>About</button>
                    <button type="button" onClick={() => scrollToSection(historySection)}>Work History</button>
                    <button type="button" onClick={() => scrollToSection(projectSection)}>Projects</button>
                </ul>
            </nav>
        </div>
    )
}

