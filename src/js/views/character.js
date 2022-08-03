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
					<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6f0fc814488169.5628504fe67d8.jpg" width="400" />
					<div className="description">
						{charStore[0] ? <h1 className="display-4">{charStore[0].name}</h1> : ""}
						<p>
						Sed rhoncus varius sem a laoreet. Donec congue, sapien quis aliquet hendrerit, mauris lacus viverra diam, quis posuere purus risus eu ante. Ut sit amet turpis odio. Curabitur ut ex sit amet sem aliquet fermentum. Suspendisse a urna ultrices, rhoncus leo a, imperdiet metus. Maecenas in aliquet ex, eu molestie tellus. Vestibulum ac est et justo rutrum pharetra ut id justo. Sed vel vulputate risus. Pellentesque dapibus hendrerit enim. Fusce vitae aliquet sem. In volutpat cursus blandit. Curabitur nec lectus non arcu pulvinar mollis. Nulla maximus elit sed odio convallis, ut tristique risus interdum. Donec pretium justo suscipit diam viverra congue. Nullam posuere tempor nunc, vel semper odio mattis suscipit. Quisque a augue id ligula ultrices semper nec quis leo.
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
