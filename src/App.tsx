import SummaryBlock from "./components/SummaryBlock"
import HistoryList from "./components/HistoryList"
import Header from "./components/Header"
import "./index.scss"

function App() {

  const workHistory = [
    {
      "id": "1", "dateRange": "Jan 2021 - Aug 2025", "title": "Software Engineer", "employer": "Deloitte & Touche",
      "description": `
        •	Led implementation of Kafka oriented data management system, streamlining data processing and improving data accuracy
        •	Developed tools for data collection from Windows and Linux operating systems, 
        and enabled the forwarding of data to 3rd party data analysis tools like Splunk and Elastic
        •	Spearheaded containerization of software using Docker, greatly simplifying installation and use`,
      "relevantSkills": ["Kafka", "Splunk", "Elastic", "Docker"]
    },
    {
      "id": "2", "dateRange": "Aug 2020 - Jan 2021", "title": "Software Engineer", "employer": "Root9B",
      "description": `
        •	Designed RESTful API using clojure language, Developed and maintained API security
        •	Collaborate with UI/UX team to build responsive Front-end in React`,
      "relevantSkills": ["React", "Clojure"]
    },
  ]

  return (
    <>
      <div className="siteWrapper">
        <Header></Header>
        <div className="contentWrapper">
          <SummaryBlock>I'm a Full Stack Developer with experience designing, developing, and deploying robust web applications.
            Specializing in front-end development with React and scalable back-end solutions using NodeJS and PostgreSQL.
            Adept at building responsive user interfaces, optimizing database performance, and integrating RESTful APIs.
            Proven ability to collaborate with cross-functional teams and agile environments.</SummaryBlock>
          <HistoryList workHistoryItems={workHistory}>Potatoes are among the greatest of inventions</HistoryList>
        </div>
      </div>
    </>
  )
}

export default App
