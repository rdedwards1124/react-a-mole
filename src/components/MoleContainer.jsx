
import Mole from './Mole'
import EmptySlot from './EmptySlot'
import {useState} from 'react'

function MoleContainer(props){
    let [displayMole, setDisplayMole] = useState(false)

    let handleBop = e => {
        props.setScore(props.score++)
        setDisplayMole(false)
    }

    let isMoleUp = displayMole ? <Mole/> : <EmptySlot/>

    return (
        <>
            {isMoleUp}
        </>
    )
}

export default MoleContainer