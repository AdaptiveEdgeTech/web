import { createClient } from 'next-sanity'
import { clientConfig, previewConfig } from '@/sanity.config'
import { definePreview } from '@sanity/preview-kit'

export const client = createClient(clientConfig)

export const usePreview = definePreview(previewConfig)