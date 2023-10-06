const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://playground.4geeks.com/apis/fake/contact",
			contacts: [
				{
					address: "2814 ASHFORD LN",
					agenda_slug: "Mycontacts",
					email: "dbetan997@gmail.com",
					full_name: "David Betancourt",
					id: 93374584596,
					phone: "6088883262"
				}
			],
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
				}

			},
			getAllContacs: async () => {
				try {
					let response = await fetch(`${getStore().urlBase}/agenda/Mycontacts`)
					let data = await response.json()
					if (response.ok) {
						setStore({
							contacts: data
						})
					}
				} catch (error) {

				}
			},
			deleteContact: async (contactId) => {
				try {
					let response = await fetch(`${getStore().urlBase}/${contactId}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						},
					})
					if (response.ok) {
						getActions().getAllContacs()
					}
				} catch (error) {
					console.error(error)
				}
			},
			editContact: async (data, contactId) => {
				try {
					console.log("editContact", contactId)
					let response = await fetch(`${getStore().urlBase}/${contactId}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					})
					console.log("response", response)
					if (response.ok) {
						getActions().getAllContacs()
					}
				} catch (error) {
				}

			}
		}
	};
};

export default getState;
