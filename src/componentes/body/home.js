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

    const images = ['https://media.danmurphys.com.au/dmo/product/908839-1.png?impolicy=PROD_LG',
                    'https://www.sucos.com/fileadmin/_processed_/0/f/csm_SDB_VELHO_BARREIRO_Cachaca_Silver_700ml_850_e81030d8da.png',
                    'https://www.bartendme.co/wp-content/uploads/2020/11/cachaza-51-ron-brasil.png',
                    'https://ecommercewebblob0.blob.core.windows.net/auchan/cache/product_large/product/7207358/02_4193481_front_1607759963.png',
                    'https://d25ja3g8yr6mfa.cloudfront.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/o/johnnie_walker_red_label_caja.png',
                    'https://d50xhnwqnrbqk.cloudfront.net/images/products/large/WHISKY-BUCHANANS-DELUXE-750-ML.png',
                    'https://cdn.irmaospatrocinio.com.br/img/p/1/6/8/5/8/8/168588-thickbox_default.jpg',
                    'https://i.pinimg.com/originals/d8/6f/da/d86fda77c35f943bd96b6d43a0a46844.png',
                    'https://www.covylsa.com/WebRoot/StoreES/Shops/ea2537/5616/389A/078A/A657/F3B1/52DF/D07D/DB62/heinken_lata_ml.png'
]

    
    useEffect(()=>{
        setBanner(Globais.banner)
        setPc(Globais.pc)
    })
    function carrosselFun(e){
        return e?.map((et,posi)=>{
            return (
                <div className='promocaoProdutosCarrossel' id={`carrosselpro${posi}`}>
                    <div className='promocaoProdutosCarrossel2'>
                        <img
                          className="imgCarrossel"
                            src={images[posi]}                      
                      >
                            
                        </img>
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
