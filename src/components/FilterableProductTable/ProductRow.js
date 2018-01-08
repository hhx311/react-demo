/**
 * Created by Jason
 */
import React from 'react';
import './ProductRow.scss';

function ProductRow(props) {
    return (
        <div className="ProductRow">
            <span className={`name ${props.stocked ? '' : 'unstock'}`}>{props.name}</span>
            <span className="price">{props.price}</span>
        </div>
    );
}
export default ProductRow;