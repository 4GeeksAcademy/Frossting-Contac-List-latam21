import React from "react";
import "../../styles/home.css";

const addContact = () => (
    <div className="mt-5">
		<div className="container">
			<div className="tittle">
				<h1>Add new Contact</h1>
			</div>
			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label"><strong>Full name</strong></label>
				<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full name"/>
			</div>
			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label"><strong>Email</strong></label>
				<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
			</div>
			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label"><strong>Phone</strong></label>
				<input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter phone"/>
			</div>
			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label"><strong>Address</strong></label>
				<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter address"/>
			</div>
			<button type="button" className="button btn btn-primary">Save</button>
			<a href="#" class="link-primary">or get back to contacts</a>
		</div>
	</div>
);

export default addContact;