import Head from 'next/head'
import Sponsors from '@/components/Sponsors'
import Link from 'next/link'

export default function Home() {

    const handleScroll = (targetId: string) => {
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        })
    }

    return (
        <>
            <Head>
                <meta name="description" content="Home page for Adaptive Edge Technologies"/>
            </Head>
            <>
                <div className="text-center content-center my-16">
                    <h1 className="flex flex-col leading-none text-6xl lg:text-9xl font-extrabold">
                        <span
                            onClick={() => handleScroll('explore-block')}
                            className='relative select-none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-400
                            dark:before:bg-white before:bg-black before:content-["Explore."] before:absolute before:bg-clip-text before:text-transparent before:animate-gradient-1'>Explore.</span>
                        <span
                            onClick={() => handleScroll('collaborate-block')}
                            className='relative select-none bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600
                            dark:before:bg-white before:bg-black before:content-["Collaborate."] before:absolute before:bg-clip-text before:text-transparent before:animate-gradient-2'>Collaborate.</span>
                        <span
                            onClick={() => handleScroll('empower-block')}
                            className='relative select-none bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-400
                            dark:before:bg-white before:bg-black before:content-["Empower."] before:absolute before:bg-clip-text before:text-transparent before:animate-gradient-3'>Empower.</span>
                    </h1>
                </div>
                <div id="explore-block" className="text-center content-center my-12 flex flex-col">
                    <span className="h-16 w-0.5 bg-gradient-to-b from-blue-50 to-blue-400 self-center"/>
                    <span
                        className="h-10 w-10 self-center rounded-full text-white bg-gradient-to-r from-blue-600 to-emerald-400 inline-flex justify-center items-center">1</span>
                    <span
                        className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-400 self-center my-5">Explore</span>
                    <span className="font-bold text-4xl mb-6">Looking for new technologies</span>
                    <p className="max-w-4xl mx-auto my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="max-w-4xl mx-auto my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div id="collaborate-block" className="text-center content-center my-12 flex flex-col">
                    <span className="h-16 w-0.5 bg-gradient-to-b from-purple-50 to-purple-500 self-center"/>
                    <span
                        className="h-10 w-10 self-center rounded-full text-white bg-gradient-to-r from-purple-700 to-pink-600 inline-flex justify-center items-center">2</span>
                    <span
                        className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 self-center my-5">Collaborate</span>
                    <span className="font-bold text-4xl mb-6">Finding like minded people</span>
                    <p className="max-w-4xl mx-auto my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div id="empower-block" className="text-center content-center my-12 flex flex-col">
                    <span className="h-16 w-0.5 bg-gradient-to-b from-orange-50 to-orange-400 self-center"/>
                    <span
                        className="h-10 w-10 self-center rounded-full text-white bg-gradient-to-r from-orange-600 to-yellow-400 inline-flex justify-center items-center">3</span>
                    <span
                        className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-400 self-center my-5">Empower</span>
                    <span className="font-bold text-4xl mb-6">Giving the power to the people</span>
                    <p className="max-w-4xl mx-auto my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <Sponsors/>
            </>
        </>
    )
}
