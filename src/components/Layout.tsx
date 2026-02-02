import { PropsWithChildren } from 'react'
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
            <main className="pb-16">{children}</main>
            <Footer/>
        </>
    )
}

export default Layout
