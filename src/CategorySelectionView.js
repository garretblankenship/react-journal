import React, {Component} from "react";
import { Link } from "react-router-dom";

class CategorySelectionView extends Component {
    static defaultProps = {
        categories: []
    }
    
    render() {
        const { categories } = this.props;
        
        return (
            <>
                <h1>What type of entry do you want to write?</h1>
                <ul>
                    {categories.map((item, index) => {
                        return (
                            <li key={item}>
                                <Link to={`/entry/new/${index}`}>
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default CategorySelectionView;