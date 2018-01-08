/**
 * Created by Jason
 */
import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import './ProductTable.scss';

function ProductTable(props) {
    const nodes = props.data.map((value, index) =>
        <div className="category_item" key={`${value.category}-${index}`}>
            <ProductCategoryRow category={value.category}/>
            <ProductRow
                name={value.name}
                price={value.price}
                stocked={value.stocked}
            />
        </div>
    );

    return (
        <div className="ProductTable">
            <div className="table-header">
                <span>Name</span>
                <span>Price</span>
            </div>
            {nodes}
        </div>
    );
}
export default ProductTable;