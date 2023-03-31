import { sponsors } from '@/utils/constants'
import Image from 'next/image'
import { Sponsor } from '@/types'

const Sponsors = () => {

    const renderLogo = (item: Sponsor) => {
        return (
            <>
                <Image src={item.logoUrl} alt={item.name}
                       width={item.logoWidth} height={item.logoHeight}
                       className={`col-span-2 max-h-12 object-contain lg:col-span-1 ${item.darkLogoUrl ? 'dark:hidden' : ''}`}/>
                {item.darkLogoUrl && (
                    <Image src={item.darkLogoUrl} alt={item.name}
                           width={item.logoWidth} height={item.logoHeight}
                           className="col-span-2 max-h-12 object-contain lg:col-span-1 hidden dark:block"/>
                )}
            </>
        )
    }

    return (
        <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                    Sponsored by
                </h2>
                <div
                    className=" flex flex-row justify-center mx-auto mt-5 py-5 max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none overflow-y-scroll">
                    {sponsors.map((item, index) => (
                        <span key={`sponsor-logo-${index}`}>
                            {item.url ? (
                                <a href={item.url} rel="noreferrer" target='_blank'>
                                    {renderLogo(item)}
                                </a>
                            ) : (
                                <>{renderLogo(item)}</>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sponsors
