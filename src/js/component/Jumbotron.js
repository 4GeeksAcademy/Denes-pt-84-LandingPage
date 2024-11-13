import React from "react";

const Jumbotron = () => {
    return (

        <div className="card portada mb-3 text-white text-center" style={{width: "100%", height: "300px", opacity:"0.8"}}>
            <div className="card-body" style={{marginTop: "80px"}}>
                <h5 className="card-title text-center" style={{fontSize:"60px"}}>Imperium Motors</h5>
                <p className="card-text" style={{fontSize:"30px"}} >El lugar donde los sueños se cumplen y por muy poco</p>
                
            </div>
            <div className="card-footer">
                    <a href="#" className="btn btn-primary">Visita nuestro Cátalogo completo</a>
            </div>
        </div>
    )
}
export default Jumbotron; 