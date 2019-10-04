import React from "react";

const Card = props => {

    return (
        <div>
            <div>
                <h1>Women's World Cup Players</h1>
                <h2>Ranked in Search Interest</h2>
                <h3>June-July 2019, Worldwide</h3>
            </div>
            <div className="followers">
                {props.things.map (item => {
                    return (
                        <p>
                        Player: {item.name} 
                        <br></br>
                        Country: {item.country} 
                        <br></br>
                        # of searches: {item.searches}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;