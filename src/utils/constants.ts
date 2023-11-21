import { MenuItem, Sponsor } from '@/types'

export const navigation: MenuItem[] = [
    { name: 'Home', href: '/' , visible: true},
    { name: 'Blog', href: '/blog', visible: false },
    { name: 'Projects', href: '/projects', visible: false },
]

export const sponsors: Sponsor[] = [
    {name: 'AgilXP', logoUrl: '/agilxp/main-logo.svg', logoWidth: 85, logoHeight: 30, darkLogoUrl: '/agilxp/main-logo-w.svg', url: 'https://agilxp.no'},
]
