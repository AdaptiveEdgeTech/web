import Head from 'next/head'
import Sponsors from '@/components/Sponsors'
import Image from 'next/image'

export default function HomePage() {

    const handleScroll = (targetId: string) => {
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <>
            <Head>
                <meta name="description" content="Home page for Adaptive Edge Technologies"/>
            </Head>
            <>
                <div className="text-center content-center my-16">
                    <img src={'/picto.svg'} alt="Picto" className="mx-auto mb-8 h-32 lg:h-48"/>
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
                    <h2 className="text-4xl lg:text-5xl mt-24"></h2>
                    <h3 className="text-2xl lg:text-2xl max-w-4xl mx-auto">At Adaptive Edge Technology we explore
                        practical applications of emerging technologies to empower individuals and organisations.</h3>
                </div>
                <div id="explore-block" className="text-center content-center my-12 flex flex-col">
                    <span className="h-16 w-0.5 bg-gradient-to-b from-blue-50 to-blue-400 self-center"/>
                    <span
                        className="h-10 w-10 self-center rounded-full text-white bg-gradient-to-r from-blue-600 to-emerald-400 inline-flex justify-center items-center">1</span>
                    <span
                        className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-400 self-center my-5">Explore</span>
                    <span className="font-bold text-4xl mb-6">Looking for new technologies</span>
                    <p className="max-w-4xl mx-auto my-4">Dive into the world of emerging technologies with Adaptive
                        Edge Technologies. Our passionate team of innovators is constantly investigating the latest
                        advancements, seeking to unlock the potential of cutting-edge solutions. We believe that by
                        embracing the unknown, we can uncover new opportunities and inspire groundbreaking ideas. Join
                        us on this exciting journey as we explore the technological frontier and redefine the
                        future.</p>
                </div>
                <div id="collaborate-block" className="text-center content-center my-12 flex flex-col">
                    <span className="h-16 w-0.5 bg-gradient-to-b from-purple-50 to-purple-500 self-center"/>
                    <span
                        className="h-10 w-10 self-center rounded-full text-white bg-gradient-to-r from-purple-700 to-pink-600 inline-flex justify-center items-center">2</span>
                    <span
                        className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 self-center my-5">Collaborate</span>
                    <span className="font-bold text-4xl mb-6">Finding like minded people</span>
                    <p className="max-w-4xl mx-auto my-4">At Adaptive Edge Technologies, we believe that the best
                        innovations are born from diverse perspectives and collaborative efforts. Our inclusive
                        environment encourages open dialogue, knowledge sharing, and creative problem-solving. By
                        connecting skilled professionals, industry experts, and technology enthusiasts, we create a
                        thriving ecosystem where ideas can thrive and real-world challenges can be tackled together.
                        Let&apos;s collaborate and harness the power of collective intelligence to shape the future of
                        technology.</p>
                </div>
                <div id="empower-block" className="text-center content-center my-12 flex flex-col">
                    <span className="h-16 w-0.5 bg-gradient-to-b from-orange-50 to-orange-400 self-center"/>
                    <span
                        className="h-10 w-10 self-center rounded-full text-white bg-gradient-to-r from-orange-600 to-yellow-400 inline-flex justify-center items-center">3</span>
                    <span
                        className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-400 self-center my-5">Empower</span>
                    <span className="font-bold text-4xl mb-6">Giving the power to the people</span>
                    <p className="max-w-4xl mx-auto my-4">Our mission goes beyond the discovery of new technologies; we
                        strive to empower individuals and organizations to adapt and excel in the rapidly evolving
                        technological landscape. By providing resources, tools, and expert guidance, we help our
                        community harness the power of emerging technologies to drive growth, success, and meaningful
                        impact. Through our commitment to empowering others, we aim to spark innovation and create a
                        lasting, positive change in the world.</p>
                </div>
                <Sponsors/>
            </>
        </>
    )
}
