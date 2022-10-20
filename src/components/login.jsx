import "../assets/styles/login.css"

function Login(){

    

    const handleFocus = (Event) =>{
        Event
    };

    return(
        <div className="fullContent">
            <div className="email">
                <input type="text" id="email" placeholder="ingrese su email" onFocus={function () {handleFocus}}/>
            </div>
            <div className="password">
                <input type="password" id="password" placeholder="Ingrese su contraseña" />
            </div>
            <div className="buttom">
                <button id="boton">ingresar</button>
            </div>
        </div>
    );
}

export default Login;