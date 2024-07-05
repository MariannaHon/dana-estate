

import React from 'react'
import css from './Search.module.css';

const Search = () => {
    return (
        <div>
            <button className={css.btn}>
                <svg className={css.icon} width="40" height="40">
                    <use xlinkHref="/images/icons.svg#icon-search"></use>
                </svg>
            </button>
        </div>
    )
}

export default Search
