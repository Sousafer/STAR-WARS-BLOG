import React, { useEffect, useContext } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import "../../styles/character.css";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Ship = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let url = `https://www.swapi.tech/api/starships/${params.uid}`;

	const shipStore = store.starShip.filter(ship => ship.url == url);
	useEffect(() => actions.starShipDescription(url), []);

	return (
		<Container>
			<Nav className="aux1">
				<div className="d-flex justify-content-between">
					<img src="https://i.pinimg.com/originals/80/25/7e/80257e085f3bc1ccad89065c8ed10341.jpg" width="400" />
					<div className="desciption">
						{shipStore[0] ? <h1 className="display-4">{shipStore[0].name}</h1> : ""}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit mauris eget nulla
							ultrices aliquam. Nunc ut ullamcorper massa. Curabitur vitae massa in risus congue dapibus a
							eu orci. Quisque mollis sit amet nisl ac euismod. Ut vulputate leo enim, vitae accumsan
							augue sagittis sed. Nullam non erat tellus. Mauris congue a nulla quis rutrum.
						</p>
					</div>
				</div>
				<hr className="my-4 aux2" />
				{shipStore[0] ? (
					<Container>
						<Row className="information">
							<Col sm={2}>Model: {shipStore[0].model}</Col>
							<Col sm={2}>Class: {shipStore[0].starship_class}</Col>
							<Col sm={2}>Passengers: {shipStore[0].passengers}</Col>
							<Col sm={2}>Pilots: {shipStore[0].pilots}</Col>
							<Col sm={2}>Cargo Capacity: {shipStore[0].cargo_capacity}</Col>
							<Col sm={2}>Crew: {shipStore[0].crew}</Col>
						</Row>
					</Container>
				) : (
					""
				)}
			</Nav>
		</Container>
	);
};
