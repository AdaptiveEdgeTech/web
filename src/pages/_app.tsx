import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Adaptive Edge Technologies</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Layout>
                <Component {...pageProps} />
                <Analytics/>
            </Layout>
        </>
    )
}
