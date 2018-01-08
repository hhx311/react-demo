/**
 * Created by Jason
 */
import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
const products_data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.state = {
            filterTxt: '',
            onlyInStock: false,
            data: products_data
        };
    }

    handleTextInput(text) {
        this.setState({
            filterTxt: text
        });
    }

    handleCheck(checked) {
        let newData = [];
            if (checked) {
                // eslint-disable-next-line
                products_data.map((value) => {
                    if (value.stocked) {
                        newData.push(value);
                    }
                })
            } else {
                newData = products_data;
            }

        this.setState({
            onlyInStock: checked,
            data: newData
        });

            // console.log('回调');
    }

    render() {
        return (
            <div className="FilterableProductTable">
                <SearchBar
                    filterTxt={this.state.filterTxt}
                    onlyInStock={this.state.onlyInStock}
                    onInput={this.handleTextInput}
                    onCheck={this.handleCheck}
                />
                <ProductTable data={this.state.data}/>
            </div>
        );
    }
}
export default FilterableProductTable;