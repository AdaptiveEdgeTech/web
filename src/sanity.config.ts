/* eslint-disable no-process-env */
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from '@/schemas'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const clientConfig = {projectId, dataset, apiVersion, useCdn: true}

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
