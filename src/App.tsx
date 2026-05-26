import ContentBlock from "./components/ContentBlock"
import ContentSub from "./components/ContentSub"
import Header from "./components/Header"
import "./index.scss"

function App() {

  return (
    <>
      <div className="siteWrapper">
        <Header></Header>
        <div className="contentWrapper">
          <ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, et blanditiis cumque corporis fugit excepturi sed placeat at ipsum tenetur laborum dolore, suscipit quibusdam. Cumque accusamus quae impedit ab id.</ContentBlock>
          <ContentSub date="1/11/11" title="Banana">Potatoes are among the greatest of inventions</ContentSub>
        </div>
      </div>
    </>
  )
}

export default App
