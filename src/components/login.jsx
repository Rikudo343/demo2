import "../assets/styles/login.css"

function Login(){

    return(
        <div className="fullContent">
            <div className="email">
                <input type="text" id="email" placeholder="ingrese su email"/>
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