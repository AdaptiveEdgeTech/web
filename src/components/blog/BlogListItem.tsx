import { Post } from '@/types'
import { ComponentProps } from 'react'

type BlogListItemProps = {
    post: Post
}

const BlogListItem = ({post}: BlogListItemProps) => {
    const date: Date = new Date(post._updatedAt)

    return (
        <article className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'>
            <img src={post.mainImage} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 dark:from-white/10 dark:to-white/40" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={date.toISOString()} className="mr-8">
                    {date.toLocaleDateString()}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                        <img src={post.author.image} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                        {post.author.name}
                    </div>
                </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={`/blog/${post._id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                </a>
            </h3>
        </article>
    )
}

export default BlogListItem

//Blog item: {JSON.stringify(blog)}