import {defineType} from 'sanity'

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().error('A Title is required'),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
})
