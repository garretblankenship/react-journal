import React, {Component} from "react";

class EntryForm extends Component {
    state = { entry: "", error: null }
    
    onTextAreaChange = (event) => {
        this.setState({ entry: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { entry } = this.state;
        const { onEntryFormSubmit } = this.props;

        if (entry) {
            return onEntryFormSubmit(entry);
        }

        return this.setState({ error: "Entry cannot be blank "});
    }

    render() {
        const { entry, error } = this.state;

        return(
            <form onSubmit={this.onFormSubmit} >
                {error}
                <div>
                    <textarea value={entry} onChange={this.onTextAreaChange} ></textarea>
                </div>
                <input type="submit" value="create new entry" />
            </form>
        );
    }
}

export default EntryForm;