import SummaryBlock from "./components/SummaryBlock"
import ContentSub from "./components/ContentSub"
import Header from "./components/Header"
import "./index.scss"

function App() {

  return (
    <>
      <div className="siteWrapper">
        <Header></Header>
        <div className="contentWrapper">
          <SummaryBlock>I'm a Full Stack Developer with experience designing, developing, and deploying robust web applications.
            Specializing in front-end development with React and scalable back-end solutions using NodeJS and PostgreSQL.
            Adept at building responsive user interfaces, optimizing database performance, and integrating RESTful APIs.
            Proven ability to collaborate with cross-functional teams and agile environments.</SummaryBlock>
          <ContentSub date="1/11/11" title="Banana">Potatoes are among the greatest of inventions</ContentSub>
        </div>
      </div>
    </>
  )
}

export default App
