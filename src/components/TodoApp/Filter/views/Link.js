/**
 * Created by Jason
 */
import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions';
import './Link.scss';

const Link = ({active, children, handleClick}) => {
    if (active) {
        return (
            <li className="filter selected"><b>{children}</b></li>
        );
    } else {
        return (
            <li className="filter unselected">
                <a href=""
                   onClick={(e) => {
                       e.preventDefault();
                       handleClick();
                   }}
                >
                    {children}
                </a>
            </li>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);