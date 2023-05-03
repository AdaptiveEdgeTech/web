import {defineType} from 'sanity'


export default defineType({
    name: 'remoteVideo',
    type: 'object',
    title: 'Remote viceo (YouTube, Vimeo,...)',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'video URL',
        }
    ]
})