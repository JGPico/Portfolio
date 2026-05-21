import ContentBlock from "./components/ContentBlock"
import ContentSub from "./components/ContentSub"

function App() {

  return (
    <>
      <div className="">
        <ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, et blanditiis cumque corporis fugit excepturi sed placeat at ipsum tenetur laborum dolore, suscipit quibusdam. Cumque accusamus quae impedit ab id.</ContentBlock>
        <ContentSub date="1/11/11" title="Banana">Potatoes are among the greatest of inventions</ContentSub>
      </div>
    </>
  )
}

export default App
