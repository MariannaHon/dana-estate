
import React from 'react'
import Search from '../Search/Search'

import css from './SearchBox.module.css'

const SearchBox = () => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <input
                className={css.input}
                type="text"
                placeholder='Choose neighborhood'
                // value={filter}
                // onChange={(e) => dispatch(changeFilter(e.target.value))}
            />
            <button className={css.btn}>
                <svg className={css.icon} width="40" height="40">
                    <use xlinkHref="/images/icons.svg#icon-arrow"></use>
                </svg>
            </button>
            </div>
            <Search />
        </div>
    )
}

export default SearchBox
