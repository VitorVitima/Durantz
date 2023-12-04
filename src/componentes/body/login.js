import './login.css'
import Logo from '../header/logo'
import { Link } from 'react-router-dom'

function Login(){
    function clickButton(){
        console.log('jenfjknwe')
    }
    return(
        <div id='conteinerLogin'>
            <Link to='/'>
                <div id='seta'>
                    <div id='arrow'></div>
                </div>
            </Link>
            <div>
                <Logo></Logo>     
            </div>
            <div id='conteinerContinueCom'>
                <div id='google' className='continue'>
                    <div className='svg'>
                        <img
                            src='https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'
                        ></img>
                    </div>
                    <span>
                        Continue com o Google
                    </span>
                </div>
                <div id='facebook' className='continue'>
                    <div className='svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                    </div>
                    <span>
                        Continue com o Facebook
                    </span>
                </div>
                <div id='apple' className='continue'>
                    <div className='svg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                        </svg>
                    </div>
                    <span>
                        Continue com a Apple
                    </span>
                </div>
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
            <div id='preenchimento'>
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

