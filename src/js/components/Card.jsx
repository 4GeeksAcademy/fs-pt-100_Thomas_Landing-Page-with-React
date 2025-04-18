import React from "react";

const Card = () => {
    return (
        <div className="card px-0 m-2 card-width">
            <img src="https://picsum.photos/500/325" className="card-img-top" alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
};

export default Card;