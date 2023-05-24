import {useEffect} from 'react'
import molehill from '../assets/molehill.png'

function EmptySlot(props){
    useEffect(()=>{
        let randomSeconds = Math.ceil(Math.random()*9000)
        let timer = setTimeout(()=>{
            props.setDisplayMole(true)
        }, randomSeconds)
        return ()=>clearTimeout(timer)
    })

    return (
        <>
            <img style={{'width': '30vw'}} src={molehill} alt="Molehill"/>
        </>
        
    )
}

export default EmptySlot