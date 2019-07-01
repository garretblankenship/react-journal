import React, {Component} from "react";
import { Link } from "react-router-dom";

class HomeView extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <h1>HomeView</h1>
                <Link to="/category">
                    <button>Create New Entry</button>
                </Link>
            </>
        );
    }
}

export default HomeView;