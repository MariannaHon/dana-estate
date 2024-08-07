
import Link from 'next/link'
import React from 'react'

import css from './ToDetails.module.css'

const ToDetails = () => {
    return (
        <button type='button' className={css.btn}>
            <Link href="/catalogue/details">Read more</Link>
        </button>
    )
}

export default ToDetails
