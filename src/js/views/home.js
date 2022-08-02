import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Characters from "../component/characters";
import Planets from "../component/planets";
import Ships from "../component/ships";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<Container>
			<Row>
				<Col>
					<h2 className="title">Characters</h2>
				</Col>
			</Row>
			<Row>
				<div className="d-flex justify-content-between overFlow">
					{store.people
						? store.people.map((elem, index) => <Characters key={index} id={++index} character={elem} />)
						: ""}
				</div>
			</Row>
			<Row>
				<Col>
					<h2 className="title">Planets</h2>
				</Col>
			</Row>
			<Row>
				<div className="d-flex justify-content-between overFlow">
					{store.planets
						? store.planets.map((elem, index) => <Planets key={index} id={++index} planet={elem} />)
						: ""}
				</div>
			</Row>
			<Row>
				<Col>
					<h2 className="title">Vehicles</h2>
				</Col>
			</Row>
			<Row>
				<div className="d-flex justify-content-between overFlow">
					{store.starShips
						? store.starShips.map((elem, index) => <Ships key={index} id={++index} ship={elem} />)
						: ""}
				</div>
			</Row>
		</Container>
	);
};
