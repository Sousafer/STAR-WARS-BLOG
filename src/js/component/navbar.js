import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swlogo from "../../img/swlogo.png";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid>
			<Row>
				<Col>
					<nav className="navbar navbar-light bg-light mb-3">
						<Link to="/">
							<img src={swlogo} width="90" />
						</Link>
						<div className="ml-auto">
							<Dropdown>
								<Dropdown.Toggle variant="primary" className="toggle">
									<div className="favBtn">
										Favorites <div className="favBtn counter">{store.favorites.length}</div>
									</div>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{store.favorites ? (
										store.favorites.map((elem, i) => (
											<Dropdown.Item key={i} id={++i} title={elem.item}>
												{elem.item}
												<span id={i} onClick={() => actions.removeItem(i)}>
													&#128465;
												</span>
											</Dropdown.Item>
										))
									) : (
										<span>(empty)</span>
									)}
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</nav>
				</Col>
			</Row>
		</Container>
	);
};
