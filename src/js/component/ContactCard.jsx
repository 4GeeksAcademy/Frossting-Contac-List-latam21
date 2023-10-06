import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const contactCard = () => {
    const { store, actions } = useContext(Context)
    const [isModalOpen, setisModalOpen] = useState()
    
    return (
        <div className="content">
            <Link to="/">
                <button className="add btn btn-success">Add new contact</button>
            </Link>
            {store.contacts.map((item) => {
                return (
                    <div className="card">
                        <div className="contactCard">
                            <img src="https://picsum.photos/200/200" className="img-fluid rounded-circle" alt="..." />
                            <div className="contactInfo">
                                <h5>{item.full_name}</h5>
                                <p><i class="fas fa-map-marker-alt"> {item.address}</i></p>
                                <p><i class="fas fa-phone"></i> {item.phone}</p>
                                <p><i class="fas fa-envelope"></i> {item.email}</p>
                            </div>
                            <div className="icons">
                                <div>
                                    <Link to={`/editUser/${item.id}`}>
                                        <a href=""><i class="fas fa-pencil-alt"></i></a>
                                    </Link>
                                </div>                               
                                <div>
                                    <a href="" onClick={()=>actions.deleteContact(item.id)}><i class="fas fa-trash"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default contactCard;