import { ReactNode, Suspense } from 'react';

import React from 'react'
import Navigation from '../Navigation/Navigation';

interface LayoutProps {
    children: ReactNode,
}

const Layout:React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <Navigation />
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    )
}

export default Layout
