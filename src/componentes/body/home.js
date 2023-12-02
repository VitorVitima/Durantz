import { useState, useEffect } from "react"
import Globais from '../globais'
import "./home.css"

import banner1 from "../../images/banners/banner 11.webp"
import banner2 from "../../images/banners/banner 10.webp"
import banner3 from "../../images/banners/banner 6.webp"
import banner4 from "../../images/banners/banner 7.webp"
import banner5 from "../../images/banners/banner 8.webp"

function Home(){
    const [pc, setPc] = useState()
    const [banner, setBanner] = useState()

    const sbanner1 = banner1;
    const sbanner2 = banner2;
    const sbanner3 = banner3;
    const sbanner4 = banner4;
    const sbanner5 = banner5;

    const [autoBanner, setAutoBanner] = useState(0);
    
    useEffect(()=>{
        setBanner(Globais.banner)
        setPc(Globais.pc)
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
        })}
    function bannerFun(e){
        return e?.map((et,posi)=>{
            return (
                <div className='banners' id={`banner${banner[posi]}`}>
                    <div className='conteinerImageBanner'>
                        <img
                            src={eval(`sbanner${et}`)}
                        >
                        </img>
                    </div>
                </div>
            )
        })}
    function carrosselMoveLeft(e){
        if(e == 1){
            const produtos = document.querySelectorAll('.promocaoProdutosCarrossel')
            const conteiner = document.querySelector('#carrosselFun')
            conteiner.appendChild(produtos[0])
        } else {
            const banners = document.querySelectorAll(".banners")
            const conteiner = document.querySelector('#allBanners')
            conteiner.appendChild(banners[0])
        }

    }
    function carrosselMoveRight(e){
        if(e == 1){
            const produtos = document.querySelectorAll('.promocaoProdutosCarrossel')
            produtos[0].before(produtos[produtos.length -1])
        } else{
            const banners = document.querySelectorAll(".banners")
            banners[0].before(banners[banners.length -1])
        }
    }
    useEffect(()=>{
        if(autoBanner != 0){
            carrosselMoveLeft(0)
        }
        setTimeout(()=>{
            if(autoBanner == 0){
                setAutoBanner(1)
            } else {
                setAutoBanner(0)
            }
        }, 7000)
        
    },[autoBanner])
    return(
        <>
            <div id='banners'>
                <div className="botoesBanner" id="botaoBanner1">
                    <div onClick={()=>carrosselMoveRight(0)} ></div>
                </div>
                <div id="allBanners">
                    {bannerFun(banner)}
                </div>
                <div className="botoesBanner" id="botaoBanner2">
                    <div onClick={()=>carrosselMoveLeft(0)}></div>
                </div>
            </div>
            <div id='promocao'>
                    <h2>Bebidas em promoção</h2>
                    <div className='produtosCarrossel' id='promocaoProdutosCarrossel'>
                        <div onClick={()=>carrosselMoveRight(1)} className='promocaoButtons' id='promocaoButtonRight'>
                            <div></div>
                        </div>
                        <div id='carrosselFun'>
                            {carrosselFun(pc)}
                        </div>
                        <div onClick={()=>carrosselMoveLeft(1)} className='promocaoButtons' id='promocaoButtonLeft'>
                            <div></div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Home