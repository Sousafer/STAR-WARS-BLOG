import React, { useEffect, useContext } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/character.css";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let url = `https://www.swapi.tech/api/planets/${params.uid}`;

	const planetStore = store.planet.filter(planet => planet.url == url);
	useEffect(() => actions.planetDescription(url), []);

	return (
		<Container>
			<Nav className="aux1">
				<div className="d-flex justify-content-between">
					<img
						src="https://i.pinimg.com/originals/8a/a9/2c/8aa92c5ba570f0c8d50a97e6bce0a8ea.jpg"
						width="400"
					/>
					<div className="description">
						{planetStore[0] ? <h1 className="display-4">{planetStore[0].name}</h1> : ""}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit mauris eget nulla
							ultrices aliquam. Nunc ut ullamcorper massa. Curabitur vitae massa in risus congue dapibus a
							eu orci. Quisque mollis sit amet nisl ac euismod. Ut vulputate leo enim, vitae accumsan
							augue sagittis sed. Nullam non erat tellus. Mauris congue a nulla quis rutrum.
						</p>
					</div>
				</div>
				<hr className="my-4 aux2" />
				{planetStore[0] ? (
					<Container>
						<Row className="information">
							<Col sm={2}>Name: {planetStore[0].name}</Col>
							<Col sm={2}>Population: {planetStore[0].population}</Col>
							<Col sm={2}>Climate: {planetStore[0].climate}</Col>
							<Col sm={2}>Terrain {planetStore[0].terrain}</Col>
							<Col sm={2}>Diameter: {planetStore[0].diameter}</Col>
							<Col sm={2}>Rotation Period: {planetStore[0].rotation_period}</Col>
						</Row>
					</Container>
				) : (
					""
				)}
			</Nav>
		</Container>
	);
};
