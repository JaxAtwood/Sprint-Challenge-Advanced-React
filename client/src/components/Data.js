// import React
// class components
// axios call? 
// http://localhost:5000/api/players
// export Data
//axios

import React from "react";
import axios from "axios";
import Card from "./Card";

class Data extends React.Component {
    state = {
        players: []
    };

    componentDidMount() {
        axios
            .get("http://localhost:5000/api/players")
            .then(res => {
                console.log(res.data);

                this.setState({
                    players: res.data
                });
            }, [])

            .catch(error => console.log(error));
    }

    render() {
        return (
            <div data-testid="divtag" className="fancy-div">
                <div>
                    <Card 
                        things={this.state.players}
                    />
                    </div>
            </div>
        )
    }
}

export default Data;