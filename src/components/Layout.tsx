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

    const isHome = router && router.pathname === '/'

    return (
        <div className="flex min-h-[100svh] flex-col">
            <Navbar/>
            <main className={`flex-1 pb-8 ${isHome ? 'flex items-center' : ''}`}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
