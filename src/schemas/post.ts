import {defineType} from 'sanity'

import authorType from './author'
import blockContentType from './blockContent'
import categoryType from './category'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().min(10).error('A title of minimum 10 characters is required'),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required().error('A slug is required'),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: authorType.name},
            validation: Rule => Rule.required().error('Author is required'),
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required().error('A main image is required'),
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: categoryType.name}}],
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'Body',
            type: blockContentType.name,
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection: any) {
            const {author} = selection
            return {...selection, subtitle: author && `by ${author}`}
        },
    },
})
