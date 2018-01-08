/**
 * Created by Jason
 */
import React from 'react';
import Link from './Link';
import {FilterTypes} from '../../constants';
import './Filters.scss';

// 全部 / 已完成 / 未完成
const filterTypes = [FilterTypes.ALL, FilterTypes.COMPLETED, FilterTypes.UNCOMPLETED];

const Filters = () => {
    return (
        <ul className="filters">
            {
                filterTypes.map((filterType) =>
                    <Link
                        filter={filterType}
                        key={filterType}
                    >
                        {filterType}
                    </Link>
                )
            }
        </ul>
    );
}
export default Filters;