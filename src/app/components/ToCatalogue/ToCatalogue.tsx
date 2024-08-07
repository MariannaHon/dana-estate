'use client'

import React from 'react';
import css from './ToCatalogue.module.css'
import { Link } from 'react-router-dom';

const ToCatalogue = () => {
    return (
    <div>
        <button className={css.btn}>Browse catalogue</button>
    </div>
    )
}

export default ToCatalogue
