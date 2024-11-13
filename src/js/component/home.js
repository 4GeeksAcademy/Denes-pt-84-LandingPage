import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer"

//create your first component
const Home = () => {
	//Aqui comeinza la logica o la creación

	return (

		<div className="text-center">
			<Navbar />
			<div classname="container">
				<div className="mx-5">
					<Jumbotron/>
				</div>

				<div className="row">

					<div className="col-xl-3 col-md-6 col-sm-12 d-flex justify-content-center ">
						<Card title="Deportivos" description="Domina las calles con los mejores deportivos" imgURL="https://images.unsplash.com/photo-1592853625597-7d17be820d0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29jaGUlMjBkZXBvcnRpdm98ZW58MHx8MHx8fDA%3D" />
					</div>
					<div className="col-xl-3 col-md-6 col-sm-12 d-flex justify-content-center">
						<Card title="SUV" description="Explora cualquier rincon con un gigante" imgURL="https://images.unsplash.com/photo-1531181616225-f8e50c1ab53e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U1VWfGVufDB8fDB8fHww" />
					</div >
					<div className="col-xl-3 col-md-6 col-sm-12 d-flex justify-content-center">
						<Card title="Dos Ruedas" description="Si te gustan las emociones fuertes tienes que ver nuestras motos" imgURL="https://media.istockphoto.com/id/1691787654/es/foto/puesta-de-sol-sobre-una-carretera-abierta-y-un-hombre-con-casco-montando-una-moto.webp?a=1&b=1&s=612x612&w=0&k=20&c=xKFv7DuZx7Ar824k7xzBaxesA4CtbgcbLM5lzBQ9SOE=" />
					</div>
					<div className="col-xl-3 col-md-6 col-sm-12 d-flex justify-content-center">
						<Card title="Clásicos" description="Si lo que de verdad te gusta es un buen clasico, estas en el sitio correcto" imgURL="https://media.istockphoto.com/id/877577708/es/foto/coche-cl%C3%A1sico-americano-de-los-a%C3%B1os-60-en-color-rojo-brillante.webp?a=1&b=1&s=612x612&w=0&k=20&c=QXZKVYBxC1POKyivAjxtXUVCUo8tQPsFt3K3h3mS9nY=" />
					</div>
				</div>


			</div>
			<Footer />

		</div >
	);
};

export default Home;
