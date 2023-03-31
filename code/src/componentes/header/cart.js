import './cart.css'
function Cart(props){
    const itensFun = () =>{
        return (
            <span>
                {props.itens} itens
            </span>
        )
    }
    const precoFun = () =>{
        return (
            <span>
                R$ {props.preco}
            </span>
        )
    }
    return(
        <div id="cartText">
            <div id="preco">
                {precoFun()}
            </div>
            <div id="itens">
                {itensFun()}
            </div>
        </div>
    )
}
export default Cart