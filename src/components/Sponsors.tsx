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
        <div className="py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <h2 className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                    Sponsored by
                </h2>
                <div
                    className="flex flex-row justify-center mx-auto mt-6 py-6 max-w-2xl items-center gap-x-10 gap-y-10 sm:max-w-4xl lg:mx-0 lg:max-w-none overflow-y-scroll">
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
