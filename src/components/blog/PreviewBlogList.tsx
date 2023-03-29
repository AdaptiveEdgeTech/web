'use client'

import {usePreview} from '@/utils/sanity'
import { Post } from '@/types'
import BlogListItem from '@/components/blog/BlogListItem'

const query = `*[_type=='post' && !(_id in path('drafts.**'))]{title,'slug':slug.current,'body':body[]{style,'children':children[]{marks,text},'markDefs':markDefs[]{_key,href}},'mainImage':mainImage.asset->url,'categories': categories[]->{title,description}, 'author': author->{name,'image':image.asset->url,'slug':slug.current}}`

const PreviewBlogList = () => {
    const posts: Post[] = usePreview(null, query)
    return (
        <>
            {posts.filter((post) => post.body && post.author && post.mainImage).map((post, index) => (
                <BlogListItem key={index} blog={post} />
            ))}
        </>
    )
}

export default PreviewBlogList