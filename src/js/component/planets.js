import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Planets = props => {
	const { store, actions } = useContext(Context);

	const planetStore = store.planet.filter(plt => plt.name == props.planet.name);

	useEffect(() => actions.planetDescription(props.planet.url), []);

	return (
		<Col>
			<Card>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/736x/c7/e4/26/c7e42606cc03017466e6ae81a130e415.jpg"
				/>
				<Card.Body>
					<Card.Title>{props.planet.name}</Card.Title>
					{planetStore[0] ? (
						<Card.Text>
							<p>Population: {planetStore[0].population}</p>
							<p>Terrain: {planetStore[0].terrain}</p>
							<p>rotation_period: {planetStore[0].rotation_period}</p>
							<p>climate: {planetStore[0].climate}</p>
							<p>diameter: {planetStore[0].diameter}</p>
						</Card.Text>
					) : (
						""
					)}
					<Link to={"/planet/" + props.planet.uid} data={planetStore}>
						<Button variant="outline-primary">Learn More!</Button>
					</Link>
					<Button
						variant="outline-warning"
						className="likeBtn"
						onClick={() => actions.addItem(props.planet.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

Planets.propTypes = {
	index: PropTypes.number,
	planet: PropTypes.object,
	id: PropTypes.number
};

export default Planets;
