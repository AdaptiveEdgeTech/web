import { Post } from '@/types'
import { ComponentProps } from 'react'

type BlogListItemProps = {
    blog: Post
}
const BlogListItem = ({blog}: BlogListItemProps) => {

    return (
        <>
            Blog item: {JSON.stringify(blog)}
        </>
    )
}

export default BlogListItem