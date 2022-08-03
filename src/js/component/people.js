import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const People = props => {
	const { store, actions } = useContext(Context);

	const charStore = store.character.filter(char => char.name == props.character.name);

	useEffect(() => actions.charDescription(props.character.url), []);

	return (
		<Col>
			<Card>
				<Card.Img
					variant="top"
					src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6f0fc814488169.5628504fe67d8.jpg"
					width="200"
				/>
				<Card.Body>
					<Card.Title>{props.character.name}</Card.Title>
					{charStore[0] ? (
						<Card.Text>
							<p>Gender: {charStore[0].gender}</p>
							<p>Hair Color: {charStore[0].hair_color}</p>
							<p>Eye Color: {charStore[0].eye_color}</p>
							<p>Birth year: {charStore[0].birth_year}</p>
							<p>Homeworld: {charStore[0].homeworld}</p>
						</Card.Text>
					) : (
						""
					)}
					<Link to={"/character/" + props.character.uid} data={charStore}>
						<Button variant="outline-primary">Learn More!</Button>
					</Link>
					<Button
						variant="outline-warning"
						className="likeBtn"
						onClick={() => actions.addItem(props.character.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

People.propTypes = {
	index: PropTypes.number,
	character: PropTypes.object,
	id: PropTypes.number
};

export default People;
