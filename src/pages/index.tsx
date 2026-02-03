import Head from 'next/head'
import Image from 'next/image'

export default function HomePage() {
    const titleText = 'To adapt is to evolve.'
    const titleLetters = Array.from(titleText)

    return (
        <>
            <Head>
                <meta name="description" content="Home page for Adaptive Edge Technologies"/>
            </Head>
            <section className="mx-auto flex min-h-full max-w-3xl flex-col items-center justify-center px-6 py-10 text-center md:py-12">
                <div className="space-y-6 md:space-y-8">
                    <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="relative h-9 w-9 logo-bounce md:h-12 md:w-12">
                            <Image
                                src="/picto.svg"
                                alt="Adaptive Edge icon"
                                fill
                                sizes="(max-width: 640px) 36px, 48px"
                            />
                        </div>
                        <h1 className="text-4xl font-medium leading-[1.05] text-black sm:text-5xl md:text-7xl">
                            <span className="typing-letters" aria-label={titleText}>
                                {titleLetters.map((letter, index) => (
                                    <span
                                        key={`${letter}-${index}`}
                                        aria-hidden="true"
                                        className="typing-letter"
                                        style={{ animationDelay: `${index * 0.06}s` }}
                                    >
                                        {letter === ' ' ? '\u00A0' : letter}
                                    </span>
                                ))}
                            </span>
                        </h1>
                    </div>
                    <p className="subcopy-rise mx-auto max-w-xl text-sm font-normal leading-relaxed text-black/70 sm:text-base md:text-lg md:text-black/60">
                        We build and operate the next generation of AI-native products.
                    </p>
                </div>
            </section>
        </>
    )
}
