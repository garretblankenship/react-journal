import React, {Component} from "react";
import { Link } from "react-router-dom";
import EntryForm from "./EntryForm";

class NewEntryView extends Component {
    render() {
        const { id } = this.props.match.params;
        const { categories, onEntryFormSubmit } = this.props;
        
        if(!categories[id]) {
            return <div>Invalid Category</div>;
        }

        return (            
            <>
                <h1>New Entry For {categories[id]}</h1>
                <Link to="/">
                    <button>Back To Home</button>
                </Link>
                <EntryForm onEntryFormSubmit={onEntryFormSubmit} />
            </>
        );
    }
}

export default NewEntryView;