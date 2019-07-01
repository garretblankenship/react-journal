import React, {Component} from "react";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";

class App extends Component {
    state = { location: "home" }
    
    getView() {
        const { location } = this.state;

        switch(location) {
            case "home":
                return <HomeView />;
            case "categorySelection":
                return <CategorySelectionView />;
            case "newEntry":
                return <NewEntryView />;
            default:
                return null;
        }
    }

    onButtonClick = (event) => {
        this.setState({ location: event.target.value });
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick} value="home">Home</button>
                <button onClick={this.onButtonClick} value="categorySelection">Category Selection</button>
                <button onClick={this.onButtonClick} value="newEntry">New Entry</button>
                {this.getView()}
            </div>
        );
    }
}

export default App;