import { createClient } from 'next-sanity'
import { clientConfig } from '@/sanity.config'

export const client = createClient(clientConfig)

