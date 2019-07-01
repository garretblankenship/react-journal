import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";

//localhost:3000/garret/is/cool

class App extends Component {
    state = {
        categories: ["food", "thoughts", "other"],
        entries: []
    }

    onEntryFormSubmit = (value) => {        
        let { entries } = this.state;
        this.setState({ entries: [...entries, value] });
    }
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={HomeView} />
                    <Route 
                        exact 
                        path="/category" 
                        render={(props) => {
                            return <CategorySelectionView {...props} categories={this.state.categories} />
                        }}
                    />
                    <Route 
                        exact 
                        path="/entry/new/:id" 
                        render={(props) => {
                            return <NewEntryView {...props} categories={this.state.categories} onEntryFormSubmit={this.onEntryFormSubmit} />
                        }}
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;