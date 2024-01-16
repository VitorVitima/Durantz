import './receba.css'
function Receba(){
    return (
        <div id='receba'>
            <div id='imgReceba'>
                
            </div>
            <div id='formReceba'>
                <div className='text'>
                    <h1>
                        Receba nossas novidades
                    </h1>
                    <p>
                        cadastre-se e ganhe descontos nas primeiras compras!
                    </p>
                </div>
                <div id='form'>
                    <form>
                        <div>
                            <label for='iname'>Nome</label>
                            <input id='iname' type='text'></input>
                        </div>
                        <div>
                            <label for='imail'>E-mail</label>
                            <input type='text' id='imail'></input>
                            <div id='button'>
                                <div></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='text'>
                    <p>
                        Ao inserir meus dados, estou de acordo com os <span>termos e condições</span> e <span>política de privacidade</span> Conheça também
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Receba