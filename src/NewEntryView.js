import React, {Component} from "react";
import { Link } from "react-router-dom";

class NewEntryView extends Component {
    render() {
        const { id } = this.props.match.params;
        const { categories } = this.props;
        
        if(!categories[id]) {
            return <div>Invalid Category</div>;
        }

        return (
            <>
                <h1>New Entry For {categories[id]}</h1>
                <Link to="/">
                    <button>Back To Home</button>
                </Link>
            </>
        );
    }
}

export default NewEntryView;