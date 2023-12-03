import './login.css'
import Logo from '../header/logo'

function Login(){
    function clickButton(){
        console.log('jenfjknwe')
    }
    return(
        <div id='conteinerLogin'>
            <div>
                <Logo></Logo>     
            </div>
            <div id='lines'>
                <div className='line'>
                </div>
                <span>
                    ou
                </span>
                <div className='line'>
                </div>
            </div>
            <div>
                <div id='textLogin'>
                    <span>
                        Insira seu e-mail para entrar ou se cadastrar:
                    </span>
                </div>
                <div id='conteinerForm'>
                    <form method='post'>
                        <label>Email </label>
                        <input id='email' type='text' name='email'></input>
                        <div id='button' onClick={()=>clickButton()}>CONTINUAR COM E-MAIL</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

