import { PropsWithChildren } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Layout = ({ children }: PropsWithChildren) => {

    return (
        <>
            <Navbar/>
            <main className="mb-32 lg:mb-24 dark:text-white">{children}</main>
            <Footer/>
        </>
    )
}

export default Layout