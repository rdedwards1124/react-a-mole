import {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    let [displayMole, setDisplayMole] = useState(false)

    const handleBop = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    let isMoleUp = displayMole ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleBop={handleBop} /> : <EmptySlot toggle={setDisplayMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {isMoleUp}
        </div>
    )
}

export default MoleContainer