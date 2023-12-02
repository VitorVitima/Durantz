import Cart from './cart'
import Globais from '../globais'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import logoGif from "../../images/DURANTZ.gif"
import logoPng from "../../images/4.png"


import './header.css'
function Header(){
    const [itens, setItens] = useState(Globais.itens)
    const [preco, setPreco] = useState(Globais.preco)
    const [logo, setLogo] = useState(0);

    const [pes, setPes] = useState(Globais.pesquisa)
    useEffect(()=>{
        setPes(Globais.pesquisa)
    })
    setTimeout(()=>{
        setLogo(1)
    }, 5000)
    function switchLogo(){
        if(logo){
            return logoPng
        } else {
            return logoGif
        }
    }
    return(
        <header>
            <div id="topo">

            <div id='logo'>
                <Link to="/">
                    <img
                        src={switchLogo()}
                        id='logo'
                    ></img>                
                </Link>
            </div>
            <div id='pes'>
                <div id='pesConteiner'>
                    <div id='pesSvg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                    <input type='text' placeholder='Pesquise sua bebida aqui' />
                </div>
            </div>
            <nav>
                <div id='login'>
                    <div>
                        <Link to='/login'>
                            Login
                        </Link>
                    </div>
                </div>
                <div id='cart' >
                    <div id='Svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </div>
                    <Cart
                        itens={itens}
                        setItens={setItens}
                        preco={preco}
                        setPreco={setPreco}
                    >
                    </Cart>
                </div>
            </nav>
            </div>
            <div id='baixo'>
                <div className='boxs'>
                    <Link to='bebidas'>
                        <span>BEBIDAS</span>
                    </Link>
                </div>
                <div className='boxs'>
                    <Link to='marcas'>
                        <span>MARCAS</span>
                    </Link>
                </div>
                <div className='boxs'>
                    <Link to='kits'>
                        <span>KITS</span>
                    </Link>
                </div>
                <div className='boxs'>
                    <Link to='drinks'>
                        <span>DRINKS</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header