import {useState, useEffect} from 'react'
import Globais from '../globais'
import './body.css'
function Body(){
    const [pc, setPc] = useState()
    useEffect(()=>{
        setPc(Globais.pc)
        console.log(pc)
    })
    function carrosselFun(e){
            return e?.map((et,posi)=>{
                return (
                    <div className='promocaoProdutosCarrossel' id={`carrosselpro${posi}`}>
                        <div className='promocaoProdutosCarrossel2'>
                            <span>
                                {et}
                            </span>
                        </div>
                    </div>
                )
            })
    }
    function carrosselMoveLeft(){
        const produtos = document.querySelectorAll('.promocaoProdutosCarrossel')
        const conteiner = document.querySelector('#carrosselFun')
        conteiner.appendChild(produtos[0])
    }
    function carrosselMoveRight(){
        const produtos = document.querySelectorAll('.promocaoProdutosCarrossel')
        const conteiner = document.querySelector('#carrosselFun')
        produtos[0].before(produtos[produtos.length -1])
    }
    return(
        <main>
            <div id='promocao'>
                <h2>Bebidas em promoção</h2>
                <div className='produtosCarrossel' id='promocaoProdutosCarrossel'>
                    <div onClick={()=>carrosselMoveRight()} className='promocaoButtons' id='promocaoButtonRight'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </div>
                    <div id='carrosselFun'>
                        {carrosselFun(pc)}
                    </div>
                    <div onClick={()=>carrosselMoveLeft()} className='promocaoButtons' id='promocaoButtonLeft'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Body