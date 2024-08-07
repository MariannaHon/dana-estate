import { ReactNode, Suspense } from 'react';

import React from 'react'
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import css from './Layout.module.css'

interface LayoutProps {
    children: ReactNode,
}

const Layout:React.FC<LayoutProps> = ({children}) => {
    return (
        <div className={css.container}>
            <Navigation />
            <Suspense fallback={null}>{children}</Suspense>
            <Footer />
        </div>
    )
}

export default Layout
