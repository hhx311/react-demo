/**
 * Created by Jason
 */
import React from 'react';

function ProductCategoryRow(props) {
    const style = {
        fontWeight: 'bold'
    };
    return (
        <div className="ProductCategoryRow" style={style}>
            {props.category}
        </div>
    );
}
export default ProductCategoryRow;