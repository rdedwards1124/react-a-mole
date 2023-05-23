
import './App.css';
import MoleContainer from './components/MoleContainer';
import {useState} from 'react'

function App() {
    let [score, setScore] = useState(0)

    const createMoleHill = ()=>{
        let hills = []
        for(let i=0; i<9; i++){
            hills.push(<MoleContainer key={i} score={score}
            setScore={setScore}/>)
        }
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            {score}
            {createMoleHill()}
        </div>
    )
}

export default App;



/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/