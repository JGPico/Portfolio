import SummaryBlock from "./components/SummaryBlock"
import HistoryList from "./components/HistoryList"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import ProjectList from "./components/ProjectsList"
import Space from "./assets/Space.png"
import Japanese from "./assets/Japanese.png"
import "./index.scss"
import { useRef } from "react"
import FunImage from "./components/FunImage"
import Footer from "./components/Footer"

function App() {

  const summary = `I'm a Full Stack Developer with experience designing, developing, and deploying robust web applications.
            Specializing in front-end development with React and scalable back-end solutions using NodeJS and PostgreSQL.
            Adept at building responsive user interfaces, optimizing database performance, and integrating RESTful APIs.
            Proven ability to collaborate with cross-functional teams and agile environments.`

  const workHistory = [
    {
      "id": "1", "dateRange": "Jan 2021 - Aug 2025", "title": "Software Engineer - Deloitte & Touche",
      "description":
        [`Led implementation of Kafka oriented data management system, streamlining data processing and improving data accuracy`,
          `Developed tools for data collection from Windows and Linux operating systems, 
        and enabled the forwarding of data to 3rd party data analysis tools like Splunk and Elastic`,
          `Spearheaded containerization of software using Docker, greatly simplifying installation and use`],
      "relevantSkills": ["Kafka", "Splunk", "Elastic", "Docker"]
    },
    {
      "id": "2", "dateRange": "Aug 2020 - Jan 2021", "title": "Software Engineer - Root9B",
      "description":
        [`Designed RESTful API using clojure language, Developed and maintained API security`,
          `Collaborate with UI/UX team to build responsive Front-end in React`],
      "relevantSkills": ["React", "Clojure"]
    },
  ]

  const projects = [
    {
      "id": "1", "screenGrab": Japanese, "title": "Japanese Conjugator",
      "description": "Use this app to visually see patterns in the conjugation of Japanese verbs",
      "link": "find a url to put here"
    },
    {
      "id": "2", "screenGrab": Space, "title": "Nasa Space Pic of the Day",
      "description": "See the latest cool images Nasa is releasing. Consumes Nasa's API.",
      "link": "https://space-pics.vercel.app/"
    }
  ]

  const aboutSection = useRef<HTMLDivElement>(null)
  const historySection = useRef<HTMLDivElement>(null)
  const projectSection = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="siteWrapper">
        <div className="headNavWrapper">
          <Header></Header>
          <NavBar
            aboutSection={aboutSection}
            historySection={historySection}
            projectSection={projectSection}></NavBar>
          <Footer></Footer>
        </div>
        <div className="contentWrapper">
          <SummaryBlock aboutSection={aboutSection}>{summary}</SummaryBlock>
          <HistoryList historySection={historySection} workHistoryItems={workHistory}></HistoryList>
          <ProjectList projectSection={projectSection} projectItems={projects}></ProjectList>
          <FunImage></FunImage>
        </div>
      </div>
    </>
  )
}

export default App
