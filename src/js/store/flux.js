const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			favorites: [],
			people: [],
			planet: [],
			planets: [],
			starShip: [],
			starShips: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addItem: item => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, { item }] });
			},

			removeItem: id => {
				let value = document.getElementById(id).title;
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.item !== value) });
			},

			getPeopleData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/people`, settings);
				const json = await request.json();
				const data = json;
				setStore({ people: data.results });
			},

			getCharacterDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ character: [...store.character, data.result.properties] });
			},

			charDescription: url => {
				getActions().getCharacterDescription(url);
			},

			getPlanetsData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/planets`, settings);
				const json = await request.json();
				const data = json;
				setStore({ planets: data.results });
			},

			getPlanetDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ planet: [...store.planet, data.result.properties] });
			},

			planetDescription: url => {
				getActions().getPlanetDescription(url);
			},

			getStarShipsData: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://www.swapi.tech/api/starships`, settings);
				const json = await request.json();
				const data = json;
				setStore({ starShips: data.results });
			},

			getStarShipDescription: async url => {
				const store = getStore();
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(url, settings);
				const json = await request.json();
				const data = json;
				setStore({ starShip: [...store.starShip, data.result.properties] });
			},

			starShipDescription: url => {
				getActions().getStarShipDescription(url);
			}
		}
	};
};

export default getState;
