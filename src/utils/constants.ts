import { MenuItem, Sponsor } from '@/types'
import { PortableTextReactComponents } from '@portabletext/react/src/types'
import React from 'react'

export const navigation: MenuItem[] = [
    { name: 'Home', href: '/' , visible: true},
    { name: 'Blog', href: '/blog', visible: true },
    { name: 'Projects', href: '/projects', visible: false },
]

export const sponsors: Sponsor[] = [
    {name: 'AgilXP', logoUrl: '/agilxp/main-logo.png', logoWidth: 85, logoHeight: 30, darkLogoUrl: '/agilxp/main-logo-w.png', url: 'https://agilxp.no'},
]
