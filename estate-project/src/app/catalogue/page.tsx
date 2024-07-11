
import React from 'react'
import SearchBox from '../components/SearchBox/SearchBox'
import FlatList from '../components/FlatList/FlatList'
import Layout from '../components/Layout/Layout'
import Menu from '../components/Menu/Menu'

import css from './page.module.css';
import Offers from '../components/Offers/Offers'

const catalogue = () => {

    return (
        <Layout>
            <Menu/>
            {/* <SearchBox /> */}

            {/* Тимчасово */}

            <Offers/>

            {/* <FlatList /> */}
            
            <p>Here will be pages</p>
        </Layout>
    )
}

export default catalogue
