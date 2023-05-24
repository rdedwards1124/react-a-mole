import {useEffect} from 'react'
import mole from '../assets/mole.png'

function Mole(props){
    useEffect(()=>{
        let randomSeconds = Math.ceil(Math.random()*2000)
        let timer = setTimeout(()=>{
            props.setDisplayMole(false)
        }, randomSeconds)
        return ()=>clearTimeout(timer)
    })

    return (
        <>
            <img style={{'width': '30vw'}} src={mole} onClick={props.handleBop} alt="Mole"/>
        </>
        
    )
}

export default Mole