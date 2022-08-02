import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Nav, Row, Col } from "react-bootstrap";
import "../../styles/character.css";
import { useParams } from "react-router-dom";

export const Character = () => {
	const { store, actions } = useContext(Context);

	const params = useParams();

	let url = `https://www.swapi.tech/api/people/${params.uid}`;

	const charStore = store.character.filter(char => char.url == url);
	useEffect(() => actions.charDescription(url), []);

	return (
		<Container>
			<Nav className="aux1">
				<div className="d-flex justify-content-between">
					<img src="https://media.timeout.com/images/103670273/320/210/image.jpg" width="400" />
					<div className="description">
						{charStore[0] ? <h1 className="display-4">{charStore[0].name}</h1> : ""}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit mauris eget nulla
							ultrices aliquam. Nunc ut ullamcorper massa. Curabitur vitae massa in risus congue dapibus a
							eu orci. Quisque mollis sit amet nisl ac euismod. Ut vulputate leo enim, vitae accumsan
							augue sagittis sed. Nullam non erat tellus. Mauris congue a nulla quis rutrum.
						</p>
					</div>
				</div>

				<hr className="my-4 aux2" />
				{charStore[0] ? (
					<Container>
						<Row className="information">
							<Col sm={2}>Name: {charStore[0].name}</Col>
							<Col sm={2}>Birth-Day: {charStore[0].birth_year}</Col>
							<Col sm={2}>Gender: {charStore[0].gender}</Col>
							<Col sm={2}>Height {charStore[0].height}</Col>
							<Col sm={2}>Skin Color: {charStore[0].skin_color}</Col>
							<Col sm={2}>Eyes Color: {charStore[0].eye_color}</Col>
						</Row>
					</Container>
				) : (
					""
				)}
			</Nav>
		</Container>
	);
};
