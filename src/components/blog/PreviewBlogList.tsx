'use client'

import {usePreview} from '@/utils/sanity'
import { Post } from '@/types'
import BlogListItem from '@/components/blog/BlogListItem'

const query = `*[_type=='post' && !(_id in path('drafts.**'))] | order(_updatedAt desc) {_id,title,_updatedAt,'slug':slug.current,'body':body[]{style,'children':children[]{marks,text},'markDefs':markDefs[]{_key,href}},'mainImage':mainImage.asset->url,'categories': categories[]->{title,description}, 'author': author->{name,'image':image.asset->url,'slug':slug.current}}`

const PreviewBlogList = () => {
    const posts: Post[] = usePreview(null, query)
    return (
        <div className="bg-white dark:bg-gray-900 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our blog</h2>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 md:mx-0 md:max-w-none xl:grid-cols-3">
            {posts.filter((post) => post.body && post.author && post.mainImage).map((post, index) => (
                <BlogListItem key={index} post={post} />
            ))}
                </div>
            </div>
        </div>
    )
}

export default PreviewBlogList
