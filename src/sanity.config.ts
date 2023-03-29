/* eslint-disable no-process-env */
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from '@/schemas'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rnqbdo7r'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-11-16'

export const clientConfig = {projectId, dataset, apiVersion}

export const previewConfig = {projectId, dataset}
export default defineConfig({
    title: 'next-sanity',
    basePath: '/studio',

    projectId,
    dataset,

    plugins: [deskTool()],

    schema: {
        types: schemaTypes,
    },
})
