import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <meta name="description" content="Home page for Adaptive Edge Technologies"/>
            </Head>
            <>
                <div className="text-center content-center my-16">
                    <h1 className="flex flex-col leading-none text-9xl font-extrabold">
                        <span className='relative select-none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400
                        before:bg-black before:content-["Explore."] before:absolute before:bg-clip-text before:text-transparent before:animate-gradient-1'>Explore.</span>
                        <span className='relative select-none bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600
                        before:bg-black before:content-["Collaborate."] before:absolute before:bg-clip-text before:text-transparent before:animate-gradient-2'>Collaborate.</span>
                        <span className='relative select-none bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-400
                        before:bg-black before:content-["Empower."] before:absolute before:bg-clip-text before:text-transparent before:animate-gradient-3'>Empower.</span>
                    </h1>
                </div>
            </>
        </>
    )
}
