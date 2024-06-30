
import React from 'react'
import SearchBox from '../components/SearchBox/SearchBox'
import FlatList from '../components/FlatList/FlatList'
import Layout from '../components/Layout/Layout'

const catalogue = () => {
    return (
        <Layout>
            <SearchBox />
            <FlatList />
            
            <p>Here will be pages</p>
        </Layout>
    )
}

export default catalogue
