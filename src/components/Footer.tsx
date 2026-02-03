const Footer = () => {
    return (
        <footer className="pb-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 text-center text-xs text-black">
                <p>Adaptive Edge Technologies AS</p>
                <a
                    href="mailto:hello@adaptiveedgetech.com"
                    className="text-black/70 transition hover:text-black"
                >
                    hello@adaptiveedgetech.com
                </a>
                <p>&copy; 2026 Adaptive Edge Technologies. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
