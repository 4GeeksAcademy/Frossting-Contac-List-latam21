import React from "react";
import { Link } from "react-router-dom";

const contactCard = () => {

    return (
        <div>
            <div className="content">
                
                <div className="contactCard">
                    <img src="https://picsum.photos/200/200" className="img-fluid rounded-circle" alt="..." />
                    <div className="contactInfo">
                        <h5>David Betancourt</h5>
                        <p><i class="fas fa-map-marker-alt"></i></p>
                        <p><i class="fas fa-phone"></i></p>
                        <p><i class="fas fa-envelope"></i></p>
                    </div>
                    <div className="deleteIcon">
                        <a href=""><i class="fas fa-trash"></i></a>
                    </div>
                    <div className="editIcon">
                        <a href=""><i class="fas fa-pencil-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contactCard;