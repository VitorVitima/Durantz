import { Routes, Route, Router } from 'react-router-dom'
import './body.css'

import Home from './home'
import Bebidas from './bebidas/bebidas'
import Marcas from './marcas/marcas'
import Drinks from './drinks/drinks'
import Kits from './kits/kits'
import Login from './login'

function Body(){
    
    
    return(
        <main>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='bebidas' element={<Bebidas></Bebidas>}></Route>
                <Route path='marcas' element={<Marcas></Marcas>}></Route>
                <Route path='kits' element={<Kits></Kits>}></Route>
                <Route path='drinks' element={<Drinks></Drinks>}></Route>
                <Route path='login' element={<Login></Login>}></Route>
            </Routes>
        </main>
    )
}
export default Body