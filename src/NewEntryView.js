import React, {Component} from "react";
import { Link } from "react-router-dom";

class NewEntryView extends Component {
    render() {
        console.log(this.props);
        
        return (
            <>
                <h1>NewEntryView</h1>
                <Link to="/">
                    <button>Back To Home</button>
                </Link>
            </>
        );
    }
}

export default NewEntryView;