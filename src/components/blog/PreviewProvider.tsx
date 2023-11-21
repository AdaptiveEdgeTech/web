import LiveQueryProvider from '@sanity/preview-kit'
import {client} from '@/utils/sanity'
import {ReactNode} from 'react'

export default function PreviewProvider({children}: { children: ReactNode }) {
    return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}