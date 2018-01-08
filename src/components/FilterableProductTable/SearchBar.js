/**
 * Created by Jason
 */
import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.keypress = this.keypress.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu(e) {
        console.log(e.clientX + e.clientY);
    }

    handleInput(e) {
        this.props.onInput(e.target.value);
    }

    keypress(e) {
        if (e.charCode === 13) {
            this.props.onCheck(!this.props.onlyInStock);
            // this.props.onInput(e.target.value);
        }
    }

    handleCheck(e) {
        this.props.onCheck(e.target.checked);
    }

    render() {
        return (
            <div className="SearchBar" onContextMenu={this.handleMenu}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterTxt}
                    onChange={this.handleInput}
                    onKeyPress={this.keypress}
                />
                <label htmlFor="chkStock">
                    <input
                        type="checkbox"
                        id="chkStock"
                        checked={this.props.onlyInStock}
                        onChange={this.handleCheck}
                    />
                    <span>Only show products in stock</span>
                </label>
            </div>
        );
    }
}
export default SearchBar;