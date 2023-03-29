import { previewConfig } from '@/sanity.config'
import { definePreview } from '@sanity/preview-kit'

export const usePreview = definePreview(previewConfig)