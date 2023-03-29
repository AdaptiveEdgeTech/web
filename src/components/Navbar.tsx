import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from '@/utils/constants'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white dark:bg-gray-900">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Adaptive Edge Technologies</span>
                        <img className="h-10 lg:h-12 w-auto dark:hidden" src="/logo/logo-left-tag.svg" alt="" />
                        <img className="h-10 lg:h-12 w-auto hidden dark:block" src="/logo/logo-left-tag-w.svg" alt="" />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.filter((item) => item.visible).map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            {item.name}
                        </Link>
                    ))}
                </div>
                {/*<div className="flex flex-1 items-center justify-end gap-x-6">*/}
                {/*    <Link href="/login" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 dark:lg:text-white">*/}
                {/*        Log in*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        href="/signup"*/}
                {/*        className="hidden lg:block rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                {/*    >*/}
                {/*        Sign up*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-10 w-auto dark:hidden" src="/logo/logo-left-tag.svg" alt="" />
                            <img className="h-10 w-auto hidden dark:block" src="/logo/logo-left-tag-w.svg" alt="" />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                {navigation.filter((item) => item.visible).map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            {/*<div className="py-6">*/}
                            {/*    <Link*/}
                            {/*        href="/login"*/}
                            {/*        onClick={() => setMobileMenuOpen(false)}*/}
                            {/*        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"*/}
                            {/*    >*/}
                            {/*        Log in*/}
                            {/*    </Link>*/}
                            {/*    <Link*/}
                            {/*        href="/signup"*/}
                            {/*        className="ml-auto rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                            {/*    >*/}
                            {/*        Sign up*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Navbar