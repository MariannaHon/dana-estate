
import React from 'react'
import Search from '../Search/Search'

const SearchBox = () => {
    return (
        <div>
            <input
                // className={css.input}
                type="text"
                // value={filter}
                // onChange={(e) => dispatch(changeFilter(e.target.value))}
            />
            <svg width="40" height="40">
                <use xlinkHref="/images/icons.svg#icon-arrow"></use>
            </svg>
            <Search />
        </div>
    )
}

export default SearchBox
