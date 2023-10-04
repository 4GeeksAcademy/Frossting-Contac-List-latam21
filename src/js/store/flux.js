const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://playground.4geeks.com/apis/fake/contact",
			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "Brad Pitt",
					background: "black",
					initial: "Purple"
				}
			]
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
			addContact: async (data) => {
				try {
					let response = await fetch(getStore().urlBase, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					})
					if (response.ok) {
						getActions().getAllContacs()
					}
				} catch (error) {
					console.error(error)
					
				}
				
			},
			getAllContacs: async () => {
				try { 
					let response = await fetch(`${getStore().urlBase}/agenda/Mycontacts`)
					let data = await response.json()
					if (response.ok) {
						setStore({
							contacts:data
						})
					}
				} catch (error) {
					
				}
			},
			deleteContact: async (data) => {
				try {
					let response = await fetch(getStore().urlBase/{contact_id}, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					})
					if (response.ok) {
						getActions().getAllContacs()
					}
				} catch (error) {
					console.error(error)
				}
			}
		}
	};
};

export default getState;
