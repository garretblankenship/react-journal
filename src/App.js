import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";

//localhost:3000/garret/is/cool

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/category" component={CategorySelectionView} />
                    <Route exact path="/entry" component={NewEntryView} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;