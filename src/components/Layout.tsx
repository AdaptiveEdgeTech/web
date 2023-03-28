import { PropsWithChildren } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Layout = ({ children }: PropsWithChildren) => {

    return (
        <>
            <Navbar/>
            <main className='mb-48 lg:mb-32 dark:text-white'>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout