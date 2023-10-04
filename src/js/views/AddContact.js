import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

const addContact = () => {
	const {actions} = useContext(Context)
	const [contact, setContact] = useState({
		"full_name": "",
        "email": "",
        "agenda_slug": "Mycontacts",
        "address":"",
        "phone":""
	})
	const handleChange = (event) => {
		setContact({
			...contact,
			[event.target.name]:event.target.value
		})
	}
	const saveTask = () => {
		actions.addContact(contact)
	}  

	return (
		
		<div className="envolture">
			<div className="tittle">
				<h1>Add new Contact</h1>
			</div>
			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label"><strong>Full name</strong></label>
				<input 
					type="text" 
					className="form-control" 
					id="exampleFormControlInput1" 
					placeholder="Full name" 
					name="full_name" 
					value={contact.full_name}
					onChange={handleChange}
					/>
			</div>
			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label"><strong>Email</strong></label>
				<input 
				type="email" 
				className="form-control" 
				id="exampleFormControlInput1" 
				placeholder="name@example.com" 
				name="email" 
				value={contact.email}
				onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label"><strong>Phone</strong></label>
				<input 
				type="text" 
				className="form-control" 
				id="exampleFormControlInput1" 
				placeholder="Enter phone"
				name="phone" 
				value={contact.phone}
				onChange={handleChange}
				/>
				
			</div>
			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label"><strong>Address</strong></label>
				<input 
				type="text" 
				className="form-control" 
				id="exampleFormControlInput1" 
				placeholder="Enter address"
				name="address" 
				value={contact.address}
				onChange={handleChange}
				/>
			</div>
			<button 
			type="button" 
			className="button btn btn-primary" onClick={()=>saveTask()}>Save</button>
			<Link to="/contacts">
				<a href="#" class="link-primary">or get back to contacts</a>
			</Link>
		</div>
)
}

export default addContact;