import './App.css'
import './index.css'
import Explanation from "./components/Explanation.jsx"

import languages from "./assets/languages.js";

function App() {

  return (
    <>
        <div className="flex justify-center width-100">
          <div className="container flex align-center flex-column mt-20">
            <h1>Learn Web Development</h1>
            <Explanation languages={languages}/>
          </div>
        </div>
    </>
  )
}

export default App
