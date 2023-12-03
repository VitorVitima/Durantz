import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import logoGif from "../../images/DURANTZ.gif"
import logoPng from "../../images/4.png"

import logoGif2 from '../../images/logo/animationPc2.gif'
import logoInicio from '../../images/logo/2.png'
import logoFinal from '../../images/logo/11.png'


function Logo(){
    const [logo, setLogo] = useState(0);
    function switchLogo(){
        if(logo == 0){
            return (
                <img
                    src={logoInicio}
                ></img>
            )
        } else if(logo == 1) {
            return (
                <img
                    src={logoGif2}
                ></img>
            )
        } else {
            return (
                <img
                    src={logoInicio}
                ></img>
            )
        }
    }
    useEffect(()=>{
        console.log(logo)

    })
    setTimeout(()=>{
        if(logo == 0){
            setLogo(1)
        }
    }, 5000)
    setTimeout(()=>{
        if(logo == 1){
            setLogo(2)
        }
    },8600)   

    return(
        <>
            <Link to="/">
                {switchLogo()}                
            </Link>
        </>
    )
}
export default Logo