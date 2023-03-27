import { PropsWithChildren } from 'react'
import Navbar from '@/components/Navbar'

const Layout = ({ children }: PropsWithChildren) => {

    return (
        <>
            <Navbar/>
            <main>{children}</main>
            {/*<Footer/>*/}
        </>
    )
}

export default Layout