import { PropsWithChildren, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'

const Layout = ({ children }: PropsWithChildren) => {
    const router = useRouter()

    if (router && router.pathname && router.pathname.startsWith('/studio/')) {
        return (
            <main>{children}</main>
        )
    }

    return (
        <>
            <Navbar/>
            <main className="mb-32 lg:mb-24 dark:text-white">{children}</main>
            <Footer/>
        </>
    )
}

export default Layout